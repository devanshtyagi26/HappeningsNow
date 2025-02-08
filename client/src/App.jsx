import Events from "./API/Events";
import EventsTest from "./API/EventsTest";
import { CardImage } from "./assets/CardImage";
import { StarRating } from "./assets/Star";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import { useSearchParams } from "react-router-dom";
import { EventsProvider } from "./Components/EventsContext";

function App() {
  const [searchParams] = useSearchParams();
  const isShowCards = searchParams.get("isvalid") === "true"; // Check if true
  return (
    <>
      <EventsProvider>
        <Hero />
        {isShowCards && <EventsTest />}
      </EventsProvider>
    </>
  );
}

export default App;
