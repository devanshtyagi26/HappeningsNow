import React from "react";
import { Blob1, Blob2, Blob3 } from "../assets/Blobs";
import RadioButtons from "./RadioButtons";
import GetStates from "./GetStates";
import { useLocationFilter } from "./UseLocationFilter";
import axios from "axios";

function LocationFilter() {
  const { selectedCountry, selectedState, selectedCity, updateParams } =
    useLocationFilter();
  console.log(selectedCity);

  const submit = async () => {
    console.log("API URL:", import.meta.env.REACT_APP_API_URL); // Debugging output
    try {
      const response = await axios.post(
        import.meta.env.REACT_APP_API_URL,
        { city: selectedCity.name },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="locationFilter">
        <div className="text">
          <p className="welcome">Welcome to HappeningsNow! </p>
          <p>WHAT ARE YOU LOOKING FOR</p>
        </div>

        <RadioButtons />
        <Blob1 />
        <Blob3 />
        <Blob2 />
        <div className="select">
          <p>SELECT</p>
          <GetStates />
        </div>
        <button className="submit" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default LocationFilter;
