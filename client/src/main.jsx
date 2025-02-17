import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Style/body.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Style/scrollBar.css";
import "./Style/media.css";
import Event from "./utils/Otp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Event/>
    <App />
  </BrowserRouter>
);
