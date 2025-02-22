/**
 *? Navbar Component
 * This component renders the navigation bar for the application.
 * It includes the application title and a GitHub logo.
 */

import React from "react";
import "../Style/navbar.css";
import { GithubLogo } from "../assets/GithubLogo";

function Navbar() {
  return (
    <>
      <div className="navbar">
        {/* Application title */}
        <p className="heading">HappeningsNow</p>

        {/* GitHub logo for linking to the project's repository */}
        <GithubLogo />
      </div>
    </>
  );
}

export default Navbar;
