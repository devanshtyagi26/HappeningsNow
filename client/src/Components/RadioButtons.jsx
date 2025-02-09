import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocationFilter } from "./UseLocationFilter";

const RadioButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("type")) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("type", "Events");
      setSearchParams(newParams);
    }
  }, []);

  const { setType } = useLocationFilter();

  const handleChange = (event) => {
    const selectedType = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("type", selectedType);
    setSearchParams(newParams);
  };

  return (
    <div className="radio-inputs">
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
