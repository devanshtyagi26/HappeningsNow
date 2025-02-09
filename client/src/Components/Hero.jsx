import React from "react";
import Navbar from "./Navbar";
import "../Style/hero.css";
import LocationFilter from "./LocationFilter";
function Hero() {
  return (
    <>
        <Navbar />
      <div className="hero">
      
          <div className="title">
            <p className="main">
              SEARCH FOR EVENTS <br /> ALL OVER THE{" "}
              <span className="color">WORLD</span>
            </p>
            <p className="sub">Find events across the globe, effortlessly!</p>
          </div>
          <LocationFilter />
        </div>
     
    </>
  );
}

export default Hero;
