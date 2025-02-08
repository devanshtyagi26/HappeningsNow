import { createContext, useContext, useState } from "react";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState(null);

  return (
    <EventsContext.Provider value={{ eventsData, setEventsData }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
