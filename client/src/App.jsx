import Events from "./API/Events";
import EventsTest from "./API/EventsTest";
import { CardImage } from "./assets/CardImage";
import { StarRating } from "./assets/Star";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import { useSearchParams } from "react-router-dom";
import { EventsProvider } from "./Components/EventsContext";
import "./Style/secondPage.css";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const [searchParams] = useSearchParams();
  const isShowCards = searchParams.get("isvalid") === "true"; // Check if true
  return (
    <>
      <EventsProvider>
        <Hero scrollToRef={ref}/>
        <div className="secondPage">{isShowCards && <EventsTest ref={ref}/>}</div>
      </EventsProvider>
    </>
  );
}

export default App;
