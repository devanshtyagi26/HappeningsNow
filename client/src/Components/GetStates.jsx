import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";
import { CitySvg, CountrySvg, StateSvg } from "../assets/stateSvgs";

export default function GetStates() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
      border: "none",
      width: "100%", // Adjust width dynamically
      color: "white !important", // Ensure text is white
      fontFamily: "Poppins",
      boxShadow: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Poppins",
      color: state.isSelected ? "black" : "grey",
      backgroundColor: state.isSelected ? "lightgrey" : "white",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%", // Ensure dropdown takes full width
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // Keeps the selected text white
    }),
    indicatorSeparator: () => ({
      display: "none", // Removes the vertical line
    }),
  };

  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  return (
    <div className="getStates">
      <div className="choose">
        <CountrySvg />
        <Select
          options={Country.getAllCountries()}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCountry}
          onChange={(item) => {
            setSelectedCountry(item);
          }}
          styles={customStyles}
        />
      </div>
      <div className="choose">
        <StateSvg />
        <Select
          options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedState}
          onChange={(item) => {
            setSelectedState(item);
          }}
          styles={customStyles}
        />
      </div>
      <div className="choose">
        <CitySvg />
        <Select
          options={City.getCitiesOfState(
            selectedState?.countryCode,
            selectedState?.isoCode
          )}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCity}
          onChange={(item) => {
            setSelectedCity(item);
          }}
          styles={customStyles}
        />
      </div>
    </div>
  );
}
