import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

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
  const type = req.query.type; // Get city from query params
  const city = req.query.city; // Get city from query params

  if (!city) {
    return res.status(400).json({ error: "No city provided" });
  }

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_events&q=${type}+in+${city}&hl=en&gl=us&api_key=${apiKey}`
    );
    const data = await response.json();
    console.log("data");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from SerpApi" });
  }
});

let otpStore = {};

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  service: process.env.SERVICE,
  port: Number(process.env.EMAIL_PORT),
  secure: Boolean(process.env.SECURE),
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error(" Nodemailer configuration error:", error);
  } else {
    console.log(" Server is ready to send emails!");
  }
});


// Route to send OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required." });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  try {
    const info = await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    console.log(`OTP sent to ${email}: ${otp}`);
    console.log("Email sent response:", info);
    res.json({ success: true, message: "OTP sent to email." });
  } catch (error) {
    console.error("Email sending failed:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to send OTP.",
        error: error.message,
      });
  }
});

// Route to verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email]; // Remove OTP after verification
    res.json({ success: true, message: "OTP verified successfully." });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
