import React from "react";
import "../Style/card.css";

function Card() {
  return (
    <>
      <div className="frame">
        <div className="canvas">
          <div className="svgImage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1470"
              height="1009"
              viewBox="0 0 1470 1009"
              fill="none"
            >
              <path
                d="M1468.73 818.197C895.363 621.704 610.909 1283.95 0 870.179V88.3693C-2.21681e-06 45.7441 48.3636 0 106.273 0H1344.64C1406.36 0 1452.18 21.8324 1470 81.6116L1468.73 818.197Z"
                fill="#FF0000"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1470"
              height="1062"
              viewBox="0 0 1470 1062"
              fill="none"
              className="blueStrip"
            >
              <path
                d="M1468 839.129C894.921 686.836 673.575 1284.05 0 968.553V586V89C0 41.5 56.5 0 100.5 0C144.5 0 1288 1 1353.5 1C1419 1 1469.5 49.5 1469.5 89.5C1469.5 129.5 1468 586 1468 586V839.129Z"
                fill="#0026FF"
              />
            </svg>
          </div>
          <div className="content">
            <div className="title">
              <p className="event">Carin Leon</p>
              <div className="rating"></div>
            </div>
            <div className="location">
              <p className="dateTime">3 April | 6 PM CTD</p>
              <p className="venue">Del Valle, TX</p>
            </div>
            <div className="description">
              🎶 Get Ready for Carin Leon Live at Circuit of the Americas on
              Saturday, April 5, 2025! 🎶 This is not just a concert—it’s a
              moment you’ll talk about for years. Carin Leon is set to light
              up...
            </div>
            <div className="buttons">
              <button>Ticket</button>
              <button>Map</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
