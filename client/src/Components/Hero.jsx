import React from "react";
import Navbar from "./Navbar";
import "../Style/hero.css";
import LocationFilter from "./LocationFilter";
function Hero() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <LocationFilter />
      </div>
    </>
  );
}

export default Hero;
