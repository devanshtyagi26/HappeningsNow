import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useEvents } from "../Components/EventsContext";

const EventsTest = () => {
  const { events } = useEvents(); // Access the stored data

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.length > 0 ? (
        <ul className="cardContaineer">
          {events.map((event, index) => (
            <li key={index}>
              <Card
                title={event.title}
                dateTime={event.date.when}
                address={event.address}
                description={event.description}
                rating={event.venue.rating}
                imgUrl={event.thumbnail}
                ticketLink={event.link}
                eventLocationLink={event.event_location_map.link}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventsTest;
