import fetch from 'node-fetch';

export default async function handler(req, res) {
  const apiKey = 'af1f4cefd545a5ac7bcef509d663c27842c129c6fd0867735646107e6e3beac1';
  const location = 'Austin';  // You can modify this based on your needs
  const query = req.query.q || 'Events in Austin';  // Default to 'Events in Austin'

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_events&q=${encodeURIComponent(query)}&hl=en&gl=us&api_key=${apiKey}`
    );
    
    // Log the raw response body to debug
    const rawData = await response.text();  // Get raw response as text
    console.log("Raw Response Data:", rawData); // Log raw response

    // Attempt to parse the JSON
    const data = JSON.parse(rawData);  // Manually parse JSON

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching from SerpApi:", error); // Log error details
    res.status(500).json({ error: 'Failed to fetch data from SerpApi' });
  }
}
