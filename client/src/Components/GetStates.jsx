import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { CitySvg, CountrySvg, StateSvg } from "../assets/stateSvgs";
import { useLocationFilter } from "./UseLocationFilter";

export default function GetStates() {
  const { selectedCountry, selectedState, selectedCity, updateParams } =
    useLocationFilter();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
      border: "none",
      width: "100%",
      color: "white !important",
      fontFamily: "Poppins",
      boxShadow: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Poppins",
      width: "100%",
      color: state.isSelected ? "black" : "grey",
      backgroundColor: state.isSelected ? "lightgrey" : "white",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
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
      {/* Country Selection */}
      <div className="choose">
        <CountrySvg />
        <Select
          options={Country.getAllCountries()}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.name}
          value={selectedCountry || null} // FIX: Handle null case
          onChange={(item) => updateParams("country", item?.name)}
          placeholder="Select Country"
          styles={customStyles}
        />
      </div>

      {/* State Selection */}
      <div className="choose">
        <StateSvg />
        <Select
          options={State.getStatesOfCountry(selectedCountry?.isoCode) || []}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.name}
          value={selectedState || null} // FIX: Handle null case
          onChange={(item) => updateParams("state", item?.name)}
          placeholder="Select State"
          styles={customStyles}
          isDisabled={!selectedCountry} // Disable if no country selected
        />
      </div>

      {/* City Selection */}
      <div className="choose">
        <CitySvg />
        <Select
          options={
            City.getCitiesOfState(
              selectedState?.countryCode,
              selectedState?.isoCode
            ) || []
          }
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.name}
          value={selectedCity || null} // FIX: Handle null case
          onChange={(item) => updateParams("city", item?.name)}
          placeholder="Select City"
          styles={customStyles}
          isDisabled={!selectedState} // Disable if no state selected
        />
      </div>
    </div>
  );
}
