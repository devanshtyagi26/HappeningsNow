import fetch from "node-fetch";
import { config } from "dotenv";
config(); // Loads the variables from the .env file

export default async function handler(req, res) {
  const { q } = req.query; // Retrieve the query from the request URL

  if (!q) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const apiKey = process.env.SERPAPI_API_KEY;
  const location = "Austin"; // Modify this if you need location customization

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_events&q=${encodeURIComponent(q)}&hl=en&gl=us&api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json(); // Parse JSON directly

    res.status(200).json(data); // Send the parsed data as response
  } catch (error) {
    console.error("Error fetching from SerpApi:", error);
    res.status(500).json({ error: "Failed to fetch data from SerpApi" });
  }
}
