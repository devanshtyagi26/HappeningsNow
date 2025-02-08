require("dotenv").config(); // Load environment variables

import express from "express";
import cors from "cors"; // Import the cors package

const app = express();

// ✅ CORS Middleware (Fix for 'No Access-Control-Allow-Origin' header)
app.use(
  cors({
    origin: "https://happenings-now.vercel.app", // Allow your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow necessary methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow custom headers
  })
);

// ✅ Handle OPTIONS Preflight Requests
app.options("*", cors());

app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running...");
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

// Fixed POST Route
app.post("/", async (req, res) => {
  const { msg } = req.body;
  console.log(msg);
  res.status(200).json({ message: "Received your message!" }); // Send response
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
