//? GetStates Component
// This component provides a dropdown selection for country, state, and city using the `country-state-city` package.
// It updates the selected location using the `useLocationFilter` context.

import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { CitySvg, CountrySvg, StateSvg } from "../assets/StateSvgs";
import { useLocationFilter } from "./UseLocationFilter";

export default function GetStates() {
  // Extract selected location values and update function from context
  const { selectedCountry, selectedState, selectedCity, updateParams } =
    useLocationFilter();

  // Custom styles for the dropdowns
  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
      border: "none",
      minWidth: "10rem",
      width: "fit-content",
      color: "white !important",
      fontFamily: "Poppins",
      boxShadow: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Poppins",
      minWidth: "10rem",
      width: "fit-content",
      color: state.isSelected ? "black" : "grey",
      backgroundColor: state.isSelected ? "lightgrey" : "white",
    }),
    menu: (provided) => ({
      ...provided,
      minWidth: "10rem",
      width: "fit-content",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div className="getStates">
      {/* Country Selection Dropdown */}
      <div className="choose">
        <CountrySvg />
        <Select
          options={Country.getAllCountries()} // Fetch all countries
          getOptionLabel={(option) => option.name} // Display country name
          getOptionValue={(option) => option.name} // Use country name as value
          value={selectedCountry || null} // Handle null case
          onChange={(item) => updateParams("country", item?.name)} // Update selected country
          placeholder="Select Country"
          styles={customStyles}
        />
      </div>

      {/* State Selection Dropdown */}
      <div className="choose">
        <StateSvg />
        <Select
          options={State.getStatesOfCountry(selectedCountry?.isoCode) || []} // Fetch states of selected country
          getOptionLabel={(option) => option.name} // Display state name
          getOptionValue={(option) => option.name} // Use state name as value
          value={selectedState || null} // Handle null case
          onChange={(item) => updateParams("state", item?.name)} // Update selected state
          placeholder="Select State"
          styles={customStyles}
          isDisabled={!selectedCountry} // Disable dropdown if no country is selected
        />
      </div>

      {/* City Selection Dropdown */}
      <div className="choose">
        <CitySvg />
        <Select
          options={
            City.getCitiesOfState(
              selectedState?.countryCode,
              selectedState?.isoCode
            ) || []
          } // Fetch cities of selected state
          getOptionLabel={(option) => option.name} // Display city name
          getOptionValue={(option) => option.name} // Use city name as value
          value={selectedCity || null} // Handle null case
          onChange={(item) => updateParams("city", item?.name)} // Update selected city
          placeholder="Select City"
          styles={customStyles}
          isDisabled={!selectedState} // Disable dropdown if no state is selected
        />
      </div>
    </div>
  );
}
