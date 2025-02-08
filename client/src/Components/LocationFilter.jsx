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
    const apiUrl = import.meta.env.VITE_API_URL; // Ensure it's correct
    console.log("API URL:", apiUrl); // Debugging output

    try {
      const response = await axios.get(
        `${apiUrl}/api/events?city=${selectedCity.name}`
      );
      console.log("Events Data:", response.data);
    } catch (error) {
      console.error("Error fetching events:", error.response?.data || error);
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
