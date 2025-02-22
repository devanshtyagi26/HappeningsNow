//? Event Component for OTP-based authentication and redirection
// - Users enter an email to receive an OTP
// - OTP verification grants access to a specified target link
// - Uses state to manage OTP sending, verification, and redirection

import { useState } from "react";
import "../Style/auth.css";

const Event = ({ target }) => {
  const [email, setEmail] = useState(""); // Stores the user's email input
  const [otp, setOtp] = useState(""); // Stores the entered OTP
  const [isOtpSent, setIsOtpSent] = useState(false); // Tracks if OTP has been sent
  const [isVerified, setIsVerified] = useState(false); // Tracks if OTP verification is successful
  const [isRedirected, setIsRedirected] = useState(false); // Tracks if user has been redirected

  // API endpoints for sending and verifying OTP
  const locationSend = import.meta.env.VITE_API_URL + "/send-otp";
  const locationVerify = import.meta.env.VITE_API_URL + "/verify-otp";

  // Function to send OTP to the provided email
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
    }
  };

  // Function to verify the entered OTP
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
        setIsRedirected(true); // Mark user as redirected
        setTimeout(() => {
          window.open(target, "_blank"); // Redirect to target link
        }, 100); // Delay before opening link
      } else {
        alert("Invalid OTP.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    <>
      {!isRedirected && (
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
            <div className="load">Verifying OTP, please wait...</div>
          )}
        </div>
      )}
    </>
  );
};

export default Event;
