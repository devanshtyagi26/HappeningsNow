const fetchEvents = async (query) => {
  try {
    const response = await fetch(`../../API/serpapi?q=${query}`);
    const data = await response.json();
    console.log("Events Data:", data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

fetchEvents();
