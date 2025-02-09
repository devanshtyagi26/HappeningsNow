import { useEffect } from "react";
import Card from "../Components/Card";
import { useEvents } from "../Components/EventsContext";
import { useLocationFilter } from "../Components/UseLocationFilter";

const EventsTest = () => {
  const { events } = useEvents(); // Access the stored data
  const { selectedCity, setType } = useLocationFilter();
  useEffect(() => {
    console.log("Updated Events Data in EventsTest:", events); // Debugging
  }, [events]);
  const color = { color: "#31d7a9" };
  return (
    <>
      <h1>
        UPCOMING <span style={color}> {setType.toUpperCase()} </span> IN{" "}
        <span style={color}> {selectedCity.name.toUpperCase()}</span>
      </h1>
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
    </>
  );
};

export default EventsTest;
