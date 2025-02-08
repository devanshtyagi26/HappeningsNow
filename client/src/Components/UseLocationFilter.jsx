import { useSearchParams } from "react-router-dom";
import { Country, State, City } from "country-state-city";

export const useLocationFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read values from URL
  const countryName = searchParams.get("country") || "";
  const stateName = searchParams.get("state") || "";
  const cityName = searchParams.get("city") || "";

  // Get selected country object
  const selectedCountry =
    Country.getAllCountries().find((c) => c.name === countryName) || null;

  // Get selected state object (only if country is valid)
  const selectedState =
    selectedCountry &&
    State.getStatesOfCountry(selectedCountry?.isoCode).find(
      (s) => s.name === stateName
    )
      ? State.getStatesOfCountry(selectedCountry?.isoCode).find(
          (s) => s.name === stateName
        )
      : null;

  // Get selected city object (only if state is valid)
  const selectedCity =
    selectedState &&
    City.getCitiesOfState(
      selectedState?.countryCode,
      selectedState?.isoCode
    ).find((ci) => ci.name === cityName)
      ? City.getCitiesOfState(
          selectedState?.countryCode,
          selectedState?.isoCode
        ).find((ci) => ci.name === cityName)
      : null;

  // Update URL parameters
  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams, { replace: true });
  };

  return {
    selectedCountry,
    selectedState,
    selectedCity,
    updateParams,
  };
};
