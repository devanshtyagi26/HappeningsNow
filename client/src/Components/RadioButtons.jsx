import React, { useState } from "react";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("Events");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radio-inputs">
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="Events"
          checked={selectedOption === "Events"}
          onChange={handleChange}
        />
        <span className="name">Events</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="Movies"
          checked={selectedOption === "Movies"}
          onChange={handleChange}
        />
        <span className="name">Movies</span>
      </label>
    </div>
  );
};

export default RadioButtons;
