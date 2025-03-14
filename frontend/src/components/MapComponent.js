import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import "../styles/map.css"; 

// Custom component to handle Leaflet Draw inside MapContainer
const MapWithDraw = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Feature Group to store drawn items
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Add Draw Control
    const drawControl = new L.Control.Draw({
      edit: { featureGroup: drawnItems },
      draw: {
        polygon: true,
        rectangle: true,
        circle: false,
        marker: false,
        polyline: false,
      },
    });

    map.addControl(drawControl);

    // Capture drawn shapes and log coordinates
    map.on("draw:created", (e) => {
      const layer = e.layer;
      drawnItems.addLayer(layer);
      console.log("AOI Coordinates:", layer.getLatLngs());
    });

  }, [map]);

  return null;
};

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer 
        center={[20.5937, 78.9629]} 
        zoom={5} 
        scrollWheelZoom={true} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapWithDraw /> {/* Drawing functionality */}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
