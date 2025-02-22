/**
 *? RadioButtons Component
 *
 * This component provides radio buttons for selecting event types (Events or Movies).
 * It updates the search parameters in the URL and ensures a default selection is set.
 */

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocationFilter } from "./UseLocationFilter";

const RadioButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Ensure 'type' is set in search params when the component mounts
  useEffect(() => {
    if (!searchParams.get("type")) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("type", "Events"); // Default type is 'Events'
      setSearchParams(newParams);
    }
  }, []);

  const { setType } = useLocationFilter();

  // Handle radio button selection change
  const handleChange = (event) => {
    const selectedType = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("type", selectedType); // Update 'type' parameter in URL
    setSearchParams(newParams);
  };

  return (
    <div className="radio-inputs">
      {/* Events Radio Button */}
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="Events"
          checked={setType === "Events"} // Ensure default selection
          onChange={handleChange}
        />
        <span className="name">Events</span>
      </label>

      {/* Movies Radio Button */}
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="Movies"
          checked={setType === "Movies"}
          onChange={handleChange}
        />
        <span className="name">Movies</span>
      </label>
    </div>
  );
};

export default RadioButtons;
