//? Card Component
// This component renders event details including title, date, location, description, rating, and buttons for ticket booking and location access.
// Implements authentication for ticket access via OTP verification.

import React, { useState } from "react";
import "../Style/card.css";
import { DateTime } from "../assets/DateTime";
import { CardImage } from "../assets/CardImage";
import { Location } from "../assets/Location";
import { StarRating } from "../assets/Star";
import Event from "../utils/Otp";

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
  // Function to format the event date into a more readable format
  const cardDate = (data) => {
    let split = data.split(",");
    return split[1] + " | " + split[2];
  };

  const [Auth, setAuth] = useState(false); // State to track authentication status

  // Function to trigger authentication process
  const authenticate = () => {
    setAuth(true);
  };

  return (
    <>
      <div className="frame">
        <div className="canvas">
          {/* Display event image */}
          <div className="svgImage">
            <CardImage image={imgUrl} />
          </div>
          <div className="content">
            {/* Display event title and rating */}
            <div className="title">
              <p className="event">{title}</p>
              <div className="rating">
                <StarRating rating={rating} />
              </div>
            </div>
            {/* Display event date and location */}
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
            {/* Display event description */}
            <div className="description">{description}</div>
            {/* Ticket and location buttons */}
            <div className="buttons">
              <button className="button" onClick={authenticate}>
                Ticket
              </button>
              {Auth && <Event target={ticketLink} />}
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
