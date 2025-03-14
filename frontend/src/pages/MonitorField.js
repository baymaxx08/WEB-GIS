import React from "react";
import Navbar from "../pages/Navbar";
import MapComponent from "../components/MapComponent.js";
import "../styles/monitorField.css";

const MonitorField = () => {
  return (
    <div className="monitor-field-container">
      <Navbar /> {/* Navbar stays on top */}

      {/* Header Section */}
      <div className="monitor-field-header">
        <h1>Monitor Your Field</h1>
        <p>Select your area of interest (AOI) and track real-time data.</p>
      </div>

      {/* Sidebar + Map Layout */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Features</h2>
          <ul>
            <li>📌 Draw Polygons</li>
            <li>📌 Draw Rectangles</li>
            <li>📌 Real-Time Data</li>
            <li>📌 Zoom & Pan</li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="map-wrapper">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default MonitorField;
