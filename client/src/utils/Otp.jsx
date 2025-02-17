import { useState } from "react";
import "../Style/auth.css";

const Event = ({ target }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const locationSend = import.meta.env.VITE_API_URL + "/send-otp";
  const locationVerify = import.meta.env.VITE_API_URL + "/verify-otp";
  const sendOtp = async () => {
    try {
      const res = await fetch(locationSend, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setIsOtpSent(true);
        alert("OTP sent! Check your email.");
      } else {
        alert("Failed to send OTP.");
      }
    } catch (error) {
      console.error("Email sending failed:", error); // Add detailed logging
      res.status(500).json({
        success: false,
        message: "Failed to send OTP.",
        error: error.message,
      });
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await fetch(locationVerify, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (data.success) {
        setIsVerified(true);
      } else {
        alert("Invalid OTP.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="event-card">
      {!isVerified ? (
        <div className="input-fields">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            className="inputs"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isOtpSent ? (
            <button className="btn" onClick={sendOtp}>
              Send OTP
            </button>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                className="inputs"
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="btn" onClick={verifyOtp}>
                Verify OTP
              </button>
            </>
          )}
        </div>
      ) : (
        window.open(target, "_blank")
      )}
    </div>
  );
};

export default Event;
