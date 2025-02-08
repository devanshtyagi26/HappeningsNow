import Events from "./API/Events";
import EventsTest from "./API/EventsTest";
import { CardImage } from "./assets/CardImage";
import { StarRating } from "./assets/Star";
import Card from "./Components/Card";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Hero />
      {/* {searchParams.get("isvalid") === "true" && <EventsTest />} */}
    </>
  );
}

export default App;
