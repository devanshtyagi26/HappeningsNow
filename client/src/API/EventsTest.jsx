/**
 *? EventsTest Component
 *
 * This component displays a list of upcoming events based on the selected location.
 * It retrieves event data from context and updates the UI accordingly.
 */

import Card from "../Components/Card";
import { useEvents } from "../Components/EventsContext";
import { useLocationFilter } from "../Components/UseLocationFilter";

const EventsTest = () => {
  const { events } = useEvents(); // Access stored event data
  const { selectedCity, setType } = useLocationFilter(); // Get selected location and event type

  const color = { color: "#31d7a9" }; // Style for highlighted text

  return (
    <>
      {/* Show a loading message if no type or city is selected */}
      {setType === null || selectedCity === null ? (
        <h1>CHOOSING THE LOCATION...</h1>
      ) : (
        <h1>
          UPCOMING <span style={color}> {setType.toUpperCase()} </span> IN{" "}
          <span style={color}> {selectedCity.name.toUpperCase()}</span>
        </h1>
      )}

      {/* Display events if available, otherwise show a message */}
      {events?.length > 0 ? (
        <ul className="cardContainer">
          {events.map((event, index) => (
            <li key={index}>
              <Card
                title={event?.title ?? "No Title"} // Event title
                dateTime={event?.date?.when ?? "No Date"} // Event date/time
                address={event?.address ?? "No Address"} // Event address
                description={event?.description ?? "No Description"} // Event description
                rating={event?.venue?.rating ?? -1} // Venue rating
                imgUrl={event?.thumbnail ?? "No Image"} // Event thumbnail
                ticketLink={event?.link ?? "#"} // Ticket booking link
                eventLocationLink={event?.event_location_map?.link ?? "#"} // Map link
              />
            </li>
          ))}
        </ul>
      ) : (
        <p id="unavailable">No events available... (Click Submit to refresh)</p>
      )}
    </>
  );
};

export default EventsTest;
