require("dotenv").config(); // Load environment variables

import express from "express";
import cors from "cors"; // Import the cors package

const app = express();

// Basic route for root
app.get("/", (req, res) => {
  res.send("Server Is Running...");
});

app.use(cors({ origin: "https://happenings-now.vercel.app" }));
app.use(express.json());

// SerpApi route
app.get("/api/serpapi", async (req, res) => {
  const apiKey = process.env.API_TOKEN;
  const location = "Austin";

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_events&q=Events+in+${location}&hl=en&gl=us&api_key=${apiKey}`
    );
    const data = await response.json();
    console.log("data");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from SerpApi" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
