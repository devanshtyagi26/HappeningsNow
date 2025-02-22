/**
 *? LocationFilter Component
 * This component allows users to filter events based on country, state, and city selection.
 * It fetches event data from an API and updates the UI accordingly.
 */

import React from "react";
import { Blob1, Blob2, Blob3 } from "../assets/Blobs";
import RadioButtons from "./RadioButtons";
import GetStates from "./GetStates";
import { useLocationFilter } from "./UseLocationFilter";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEvents } from "./EventsContext";

function LocationFilter({ scrollToRef }) {
  const { setEvents } = useEvents(); // Access the events context to update events
  const [searchParams, setSearchParams] = useSearchParams(); // Manage URL search parameters

  // Remove 'showCards' when the page loads
  useEffect(() => {
    if (searchParams.get("isvalid") === "true") {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("isvalid"); // Remove 'showCards'
      setSearchParams(newParams, { replace: true }); // Update the URL without adding history entry
    }
  }, []); // Runs only once when the component mounts

  const { selectedCity, setType } = useLocationFilter(); // Get selected city and setType function

  // Function to fetch events based on selected filters
  const submit = async () => {
    const apiUrl = import.meta.env.VITE_API_URL; // Get API URL from environment variables
    console.log("API URL:", apiUrl); // Debugging: Log API URL

    try {
      const response = await axios.get(
        `${apiUrl}/api/events?type=${setType}&city=${selectedCity.name}` // Fetch events based on type and city
      );

      if (response.data) {
        setEvents(response.data.events_results); // Store event data in context

        // Preserve existing query parameters while adding 'isvalid=true'
        const newParams = new URLSearchParams(searchParams);
        newParams.set("isvalid", "true");
        setSearchParams(newParams);

        handleClick(); // Scroll to results section
      }
    } catch (error) {
      console.error("Error fetching events:", error.response?.data || error);
    }
  };

  // Function to smoothly scroll to the results section
  const handleClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="locationFilter">
        <div className="text">
          <p className="welcome">Welcome to HappeningsNow! </p>
          <p>WHAT ARE YOU LOOKING FOR</p>
        </div>

        {/* Radio buttons for selecting event type */}
        <RadioButtons />

        {/* Background decorative blobs */}
        <Blob1 />
        <Blob3 />
        <Blob2 />

        <div className="select">
          <p>SELECT</p>
          <GetStates /> {/* Dropdowns for country, state, and city selection */}
        </div>

        {/* Submit button to fetch events */}
        <button className="submit" onClick={submit}>
          <span>Submit</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 74"
            height="34"
            width="34"
          >
            <path
              fill="black"
              stroke="black"
              strokeWidth="3"
              d="M37 1.5C57.6437 1.5 73.5 17.3563 73.5 37C73.5 56.6437 57.6437 72.5 37 72.5C16.3563 72.5 0.5 56.6437 0.5 37C0.5 17.3563 16.3563 1.5 37 1.5ZM25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5H48V35.5H25ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default LocationFilter;
