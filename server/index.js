require("dotenv").config(); // Load environment variables

import express from "express";
import cors from "cors"; // Import the cors package

const app = express();

// ✅ Use cors() properly
app.use(
  cors({
    origin: process.env.API_URL || "https://happenings-now.vercel.app", // Allow frontend URL
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(express.json()); // Middleware for JSON body parsing

// ✅ Handle OPTIONS preflight requests
app.options("*", cors());

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
