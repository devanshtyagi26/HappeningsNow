import React from "react";
import "../Style/card.css";
import { DateTime } from "../assets/DateTime";
import { CardImage } from "../assets/CardImage";
import { Location } from "../assets/Location";
import { Rating } from "../assets/Rating";

function Card({ title, dateTime, address, description }) {
  const cardDate = (data) => {
    let split = data.split(",");
    return split[1] + " | " + split[2];
  };
  return (
    <>
      <div className="frame">
        <div className="canvas">
          <div className="svgImage">
            <CardImage />
          </div>
          <div className="content">
            <div className="title">
              <p className="event">{title}</p>
              <div className="rating">
                {" "}
                <Rating />
              </div>
            </div>
            <div className="location">
              <div className="dateTime">
                <DateTime />
                <p>{cardDate(dateTime)}</p>
              </div>
              <div className="venue">
                <Location />
                <p>{address[1]}</p>
              </div>
            </div>
            <div className="description">
              {description}
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
