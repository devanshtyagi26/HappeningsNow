import { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://happenings-now-server.vercel.app/api/events"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data.events_results); // Assuming data structure is the same
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h2>{event.title}</h2>
              <p>{event.date.when}</p>
              <p>
                <strong>Location:</strong> {event.address.join(", ")}
              </p>
              <p>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
              </p>
              <p>
                {event.description && <strong>Description:</strong>}{" "}
                {event.description}
              </p>
              <p>
                <a
                  href={event.event_location_map.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map
                </a>
              </p>
              <img
                src={event.thumbnail}
                alt={event.title}
                style={{ width: "100px", height: "100px" }}
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

export default Events;
