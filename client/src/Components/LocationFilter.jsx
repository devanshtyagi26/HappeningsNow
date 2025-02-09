import React from "react";
import { Blob1, Blob2, Blob3 } from "../assets/Blobs";
import RadioButtons from "./RadioButtons";
import GetStates from "./GetStates";
import { useLocationFilter } from "./UseLocationFilter";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEvents } from "./EventsContext";

function LocationFilter() {
  const { setEvents } = useEvents(); // Use context
  const [searchParams, setSearchParams] = useSearchParams();
  // Remove 'showCards' when the page loads
  useEffect(() => {
    if (searchParams.get("isvalid") === "true") {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("isvalid"); // Remove 'showCards'
      setSearchParams(newParams, { replace: true }); // Replace the URL without adding history entry
    }
  }, []); // Runs only once when the component mounts

  const { selectedCountry, selectedState, selectedCity, updateParams } =
    useLocationFilter();
  // Log showCards when it updates

  const submit = async () => {
    const apiUrl = import.meta.env.VITE_API_URL; // Ensure it's correct
    console.log("API URL:", apiUrl); // Debugging output

    try {
      const response = await axios.get(
        `${apiUrl}/api/events?city=${selectedCity.name}`
      );
      console.log("Events Data:", response.data);
      if (response.data) {
        setEvents(response.data); // Store in context
        // Preserve existing query parameters while adding showCards=true
        const newParams = new URLSearchParams(searchParams);
        newParams.set("isvalid", "true");
        setSearchParams(newParams);
      }
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
