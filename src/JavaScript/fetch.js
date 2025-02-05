const fetchEvents = async (query) => {
  if (!query) {
    console.error("Query parameter is missing.");
    return;
  }

  try {
    const response = await fetch(
      `https://https://happenings-now.vercel.app/API/serpapi?q=${encodeURIComponent(
        query
      )}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Fetched Events Data:", data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

fetchEvents("Events+in+New+York");
