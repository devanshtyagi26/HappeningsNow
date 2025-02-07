import React from "react";
import { Blob1, Blob2, Blob3 } from "../assets/Blobs";

function LocationFilter() {
  return (
    <>
      <div className="locationFilter">
        <div className="text">
          <p className="welcome">Welcome to HappeningsNow! </p>
          <p>WHAT ARE YOU LOOKING FOR</p>
        </div>
        <Blob1 />
        <Blob3 />
        <Blob2 />
        <div className="select">
          <p>SELECT</p>
        </div>
      </div>
    </>
  );
}

export default LocationFilter;
