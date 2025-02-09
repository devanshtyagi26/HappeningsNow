import { useEffect } from "react";
import Card from "../Components/Card";
import { useEvents } from "../Components/EventsContext";

const EventsTest = () => {
  const { events } = useEvents(); // Access the stored data

  useEffect(() => {
    console.log("Updated Events Data in EventsTest:", events); // Debugging
  }, [events]);

  return (
    <div>
      <h1>UPCOMING EVENTS</h1>
      {events?.length > 0 ? (
        <ul className="cardContainer">
          {events.map((event, index) => (
            <li key={index}>
              <Card
                title={event?.title ?? "No Title"}
                dateTime={event?.date?.when ?? "No Date"}
                address={event?.address ?? "No Address"}
                description={event?.description ?? "No Description"}
                rating={event?.venue?.rating ?? "No Rating"}
                imgUrl={event?.thumbnail ?? "No Image"}
                ticketLink={event?.link ?? "#"}
                eventLocationLink={event?.event_location_map?.link ?? "#"}
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
