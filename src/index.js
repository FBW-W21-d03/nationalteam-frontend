import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// 1.) BrowserRouter, Routes und Route
// importieren
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerList from "./components/PlayerList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2.) App in BrowserRouter schachteln */}
    <BrowserRouter>
      {/* 3.) App in Routes schachteln */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nationalteam" element={<PlayerList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
