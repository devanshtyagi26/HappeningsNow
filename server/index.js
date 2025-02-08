import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()); // Adjust CORS settings if needed

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

let display = ""; // Global variable to store city

app.post("/", (req, res) => {
  console.log("Received POST request:", req.body);

  if (req.body.city) {
    display = req.body.city; // Store city for later use
  }

  res.json({ message: "City received", city: display });
});

app.get("/api/events", async (req, res) => {
  const apiKey = process.env.API_TOKEN;
  if (!display) {
    return res.status(400).json({ error: "No city provided" });
  }

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_events&q=Events+in+${display}&hl=en&gl=us&api_key=${apiKey}`
    );
    const data = await response.json();
    console.log("data");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from SerpApi" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
