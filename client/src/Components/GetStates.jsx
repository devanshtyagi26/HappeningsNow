import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { CitySvg, CountrySvg, StateSvg } from "../assets/stateSvgs";
import { useSearchParams } from "react-router-dom"; // FIX: Correct import

export default function GetStates() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Fetch selected values from URL
  const selectedCountry = Country.getAllCountries().find(
    (c) => c.name === searchParams.get("country")
  );
  const selectedState = State.getStatesOfCountry(selectedCountry?.isoCode).find(
    (s) => s.name === searchParams.get("state")
  );
  const selectedCity = City.getCitiesOfState(
    selectedState?.countryCode,
    selectedState?.isoCode
  ).find((ci) => ci.name === searchParams.get("city"));

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

  // Function to update URL parameters correctly
  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams, { replace: true });
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
            City.getCitiesOfState(selectedState?.countryCode, selectedState?.isoCode) || []
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
