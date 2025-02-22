//? EventsContext.js
// This file creates a React Context for managing event data throughout the application.

import { createContext, useContext, useState } from "react";

// Create a Context for events
const EventsContext = createContext();

// EventsProvider Component
// This component wraps children components and provides event-related state and functions.
export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]); // State to store the list of events

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

// Custom hook to use the EventsContext
export const useEvents = () => {
  const context = useContext(EventsContext);

  // Ensure the hook is used within a provider
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }

  return context;
};
