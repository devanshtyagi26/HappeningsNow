//? Hero Component
// This component serves as the main landing section of the application.
// It includes a navigation bar, a title, a subtitle, and a location filter for event searches.

import React from "react";
import Navbar from "./Navbar"; // Importing the navigation bar component
import "../Style/hero.css"; // Importing styles for the Hero section
import LocationFilter from "./LocationFilter"; // Importing the location filter component

function Hero({ scrollToRef }) {
  return (
    <>
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Hero section container */}
      <div className="hero">
        {/* Main heading */}
        <div className="title">
          <p className="main">
            SEARCH FOR EVENTS <br /> ALL OVER THE{" "}
            <span className="color">WORLD</span>
          </p>
          {/* Subtitle for the hero section */}
          <p className="sub">Find events across the globe, effortlessly!</p>
        </div>

        {/* Location filter component for event search */}
        <LocationFilter scrollToRef={scrollToRef} />
      </div>
    </>
  );
}

export default Hero;
