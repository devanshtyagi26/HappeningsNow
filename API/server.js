import express from "express";
import cors from "cors"; // Import the cors package
import { createServer } from "@vercel/node"; // Required for Vercel

const app = express();
const port = 3000;

// Basic route for root

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
// SerpApi route
app.get("/api/serpapi", async (req, res) => {
    const apiKey = process.env.SERPAPI_API_KEY;
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

export default createServer(app);