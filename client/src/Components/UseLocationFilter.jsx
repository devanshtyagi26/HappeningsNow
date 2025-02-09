import { useSearchParams } from "react-router-dom";
import { Country, State, City } from "country-state-city";

export const useLocationFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read values from URL
  const setType = searchParams.get("type") || "";
  const countryName = searchParams.get("country") || "";
  const stateName = searchParams.get("state") || "";
  const cityName = searchParams.get("city") || "";

  // Get selected country object
  const selectedCountry = Country.getAllCountries().find((c) => c.name === countryName) || null;

  // Get selected state object (only if country is valid)
  const selectedState =
    selectedCountry
      ? State.getStatesOfCountry(selectedCountry?.isoCode).find((s) => s.name === stateName) || null
      : null;

  // Get selected city object (only if state is valid)
  const selectedCity =
    selectedState
      ? City.getCitiesOfState(selectedState?.countryCode, selectedState?.isoCode).find((ci) => ci.name === cityName) || null
      : null;

  // Update URL parameters and reset dependent values when needed
  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);

    if (key === "country") {
      newParams.set("country", value);
      newParams.delete("state"); // Reset state when country changes
      newParams.delete("city");  // Reset city when country changes
    } else if (key === "state") {
      newParams.set("state", value);
      newParams.delete("city");  // Reset city when state changes
    } else if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    setSearchParams(newParams, { replace: true });
  };

  return {
    setType,
    selectedCountry,
    selectedState,
    selectedCity,
    updateParams,
  };
};
