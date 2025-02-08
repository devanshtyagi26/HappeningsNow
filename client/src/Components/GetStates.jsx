import React from "react";
import { Country, State, City } from "country-state-city";
import { useState } from "react";

function GetStates() {
  const [Countries, setCountries] = useState(Country.getAllCountries());
  const [State, setState] = useState([]);
  const [City, setCity] = useState([]);

  const [SelectedCountry, setSelectedCountry] = useState(null);
  const [SelectedState, setSelectedState] = useState(null);

  return (
    <>
      <select>
        <option value="">Select Country</option>
      </select>
      <select disabled>
        <option value="">Select State</option>
      </select>
      <select disabled>
        <option value="">Select City</option>
      </select>
    </>
  );
}

export default GetStates;
