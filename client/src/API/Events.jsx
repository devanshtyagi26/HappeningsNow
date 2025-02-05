import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://happenings-now-server.vercel.app/api/events") // Replace with your actual backend URL
      .then((response) => response.json())
      .then((data) => setEvents(data.events)) // Adjust based on JSON structure
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>
              {event.date} - {event.location}
            </p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
