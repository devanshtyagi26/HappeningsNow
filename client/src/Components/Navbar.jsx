import React from "react";
import "../Style/navbar.css";
import { GithubLogo } from "../assets/GithubLogo";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <p className="heading">HappeningsNow</p>
        <GithubLogo />
      </div>
    </>
  );
}

export default Navbar;
