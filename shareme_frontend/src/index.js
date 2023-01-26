import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
      >
        <App />
      </GoogleOAuthProvider>
    </Router>
  </StrictMode>
);
