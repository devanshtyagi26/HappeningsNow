/**
 *? useLocationFilter Hook
 *
 * This custom hook manages location-based filtering using URL parameters.
 * It allows users to select a country, state, and city while keeping the URL in sync.
 */

import { useSearchParams } from "react-router-dom";
import { Country, State, City } from "country-state-city";

export const useLocationFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Retrieve values from URL parameters, defaulting to an empty string if not set
  const setType = searchParams.get("type") || "";
  const countryName = searchParams.get("country") || "";
  const stateName = searchParams.get("state") || "";
  const cityName = searchParams.get("city") || "";

  // Find the selected country object based on the country name from URL
  const selectedCountry =
    Country.getAllCountries().find((c) => c.name === countryName) || null;

  // Find the selected state object (only if a valid country is selected)
  const selectedState = selectedCountry
    ? State.getStatesOfCountry(selectedCountry?.isoCode).find(
        (s) => s.name === stateName
      ) || null
    : null;

  // Find the selected city object (only if a valid state is selected)
  const selectedCity = selectedState
    ? City.getCitiesOfState(
        selectedState?.countryCode,
        selectedState?.isoCode
      ).find((ci) => ci.name === cityName) || null
    : null;

  //!  Updates URL parameters and resets dependent values when necessary
  //  @param {string} key - The parameter key to update
  //  @param {string} value - The new value for the parameter

  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);

    if (key === "country") {
      newParams.set("country", value);
      newParams.delete("state"); // Reset state when country changes
      newParams.delete("city"); // Reset city when country changes
    } else if (key === "state") {
      newParams.set("state", value);
      newParams.delete("city"); // Reset city when state changes
    } else if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    // Update search parameters in the URL
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
