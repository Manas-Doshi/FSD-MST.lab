import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// StrictMode is intentionally not used so that dev mode does not
// double-render components and confuse the console.log demonstration.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
