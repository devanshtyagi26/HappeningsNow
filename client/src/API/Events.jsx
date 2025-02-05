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
      {console.log(events)}
    </div>
  );
};

export default Events;
