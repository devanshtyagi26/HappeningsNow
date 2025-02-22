// Main App component managing event display and navigation
// - Uses React Router's search params to determine if event cards should be shown
// - Implements context provider for event data management
// - Uses a ref to enable smooth scrolling

import EventsTest from "./API/EventsTest";
import Hero from "./Components/Hero";
import { useSearchParams } from "react-router-dom";
import { EventsProvider } from "./Components/EventsContext";
import "./Style/secondPage.css";
import { useRef } from "react";
import Scroll from "./Components/Scroll";

function App() {
  const ref = useRef(null); // Create a reference for scrolling
  const [searchParams] = useSearchParams(); // Get URL search parameters
  const isShowCards = searchParams.get("isvalid") === "true"; // Check if 'isvalid' param is true

  return (
    <>
      <EventsProvider>
        {" "}
        {/* Provide event context to child components */}
        <Hero scrollToRef={ref} />{" "}
        {/* Hero component with scroll functionality */}
        <div className="secondPage">
          <Scroll ref={ref} />{" "}
          {/* Scroll component to handle smooth scrolling */}
          {isShowCards && <EventsTest />}{" "}
          {/* Show event cards only if 'isvalid' is true */}
        </div>
      </EventsProvider>
    </>
  );
}

export default App;
