import React from "react";
import "../Style/card.css";
import { DateTime } from "../assets/dateTime";
import { CardImage } from "../assets/CardImage";
import { Location } from "../assets/Location";
import { Rating } from "../assets/Rating";

function Card() {
  return (
    <>
      <div className="frame">
        <div className="canvas">
          <div className="svgImage">
            <CardImage />
          </div>
          <div className="content">
            <div className="title">
              <p className="event">Carin Leon</p>
              <div className="rating">
                {" "}
                <Rating />
              </div>
            </div>
            <div className="location">
              <div className="dateTime">
                <DateTime />
                <p>3 April | 6 PM CTD</p>
              </div>
              <div className="venue">
                <Location />
                <p>Del Valle, TX</p>
              </div>
            </div>
            <div className="description">
              🎶 Get Ready for Carin Leon Live at Circuit of the Americas on
              Saturday, April 5, 2025! 🎶 This is not just a concert—it’s a
              moment you’ll talk about for years. Carin Leon is set to light
              up...
            </div>
            <div className="buttons">
              <button className="button">Ticket</button>
              <button className="button">Location</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
