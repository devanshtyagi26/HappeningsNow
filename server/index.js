require("dotenv").config(); // Load environment variables

import express from "express";
import cors from "cors"; // Import the cors package

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.API_URL);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
// Basic route for root
app.get("/", (req, res) => {
  res.send("Server Is Running...");
});

// SerpApi route
app.get("/api/events", async (req, res) => {
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

app.post("/", async (req, res) => {
  const { msg } = req.body;
  console.log(msg);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
