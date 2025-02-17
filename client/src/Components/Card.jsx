import React from "react";
import "../Style/card.css";
import { DateTime } from "../assets/DateTime";
import { CardImage } from "../assets/CardImage";
import { Location } from "../assets/Location";
import { StarRating } from "../assets/Star";
import Event from "../utils/Otp";
import { useState } from "react";

function Card({
  title,
  dateTime,
  address,
  description,
  rating,
  imgUrl,
  ticketLink,
  eventLocationLink,
}) {
  const cardDate = (data) => {
    let split = data.split(",");
    return split[1] + " | " + split[2];
  };
  const [Auth, setAuth] = useState(false);
  const authenticate = () => {
    setAuth(true);
  };
  return (
    <>
      <div className="frame">
        <div className="canvas">
          <div className="svgImage">
            <CardImage image={imgUrl} />
          </div>
          <div className="content">
            <div className="title">
              <p className="event">{title}</p>
              <div className="rating">
                {console.log(rating)}
                <StarRating rating={rating} />
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
            <div className="description">{description}</div>
            <div className="buttons">
              <button className="button" onClick={authenticate}>
                Ticket
              </button>
              {Auth && ((<Event target={ticketLink} />), setAuth(false))}

              <button
                className="button"
                onClick={() => window.open(eventLocationLink, "_blank")}
              >
                Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
