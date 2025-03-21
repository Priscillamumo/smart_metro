import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import "./BusTracking.css";

const defaultPosition = [-1.286389, 36.817223]; // Nairobi coordinates
const socket = io("http://localhost:5000"); // WebSocket connection

// Fix missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const BusTracking = () => {
  const [busData, setBusData] = useState([]);
  const [error, setError] = useState(null);
  const [mapType, setMapType] = useState("roadmap");
  const [selectedRoute, setSelectedRoute] = useState("nairobi-juja"); // Default route

  const tileLayerURLs = {
    roadmap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    satellite: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  };

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/buses");
        setBusData((prevBuses) => {
          const busMap = new Map(prevBuses.map((bus) => [bus.id, bus]));
          response.data.forEach((bus) => busMap.set(bus.id, bus));
          return Array.from(busMap.values());
        });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load bus data");
        setTimeout(fetchBusData, 5000); // Retry after 5 seconds
      }
    };

    fetchBusData();

    socket.on("busUpdate", (updatedBuses) => {
      setBusData((prevBuses) => {
          const busMap = new Map(prevBuses.map(bus => [bus.id, bus]));
          updatedBuses.forEach(bus => busMap.set(bus.id, bus));
          return Array.from(busMap.values());
      });
  });
  

    return () => {
      socket.off("busUpdate"); // Cleanup WebSocket on unmount
    };
  }, []);

  // Filter buses based on selected route
  const filteredBuses = busData.filter((bus) => 
    (selectedRoute === "nairobi-juja" && bus.route_id === 1) || 
    (selectedRoute === "juja-nairobi" && bus.route_id === 2)
  );

  return (
    <div className="parent-div1">
      {/* Header Section */}
      <section className="frame-2-3537 pos-abs">
        <div className="smart-metro-3538 pos-abs">
          <span className="smart-metro-3538-0">SMART</span>
          <span className="smart-metro-3538-2"> METRO</span>
        </div>
        <div className="home-tracking-a-3539 pos-abs">
          <span className="home-tracking-a-3539-0">
            <Link to="/" className="nav-link">Home</Link> &nbsp;&nbsp;
            <Link to="/" className="nav-link">Tracking</Link> &nbsp;&nbsp;
            <Link to="/about" className="nav-link">About</Link> &nbsp;&nbsp;
            <Link to="/feedback" className="nav-link">Feedback</Link>
          </span>
        </div>
      </section>

      {/* Route Name Section */}
      <div className="nairobi-juja-ro-3511 pos-abs">
        <span className="nairobi-juja-ro-3511-0">
          {selectedRoute === "nairobi-juja" ? "Nairobi - Juja Route" : "Juja - Nairobi Route"}
        </span>
      </div>

      {/* Map Section */}
      <section className="group-1-358 pos-abs">
        <div className="rectangle-1-359 pos-abs">
          {error && <p className="error-message">{error}</p>}
          <MapContainer center={defaultPosition} zoom={12} style={{ height: "600px", width: "100%" }}>
            <TileLayer url={tileLayerURLs[mapType]} />
            {filteredBuses.map((bus) => (
              <Marker key={bus.id} className="marker-info" position={[bus.current_lat, bus.current_lng]}>
                <Popup>
                  <b>Bus {bus.bus_number}</b>
                  <br />
                  Status: {bus.status}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* Map Type Toggle */}
      <section className="frame-6-3512 pos-abs">
        <div className="map-options">
          <button className="map-option roadmap map-button" onClick={() => setMapType("roadmap")}>Roadmap</button>
          <button className="map-option satellite map-button" onClick={() => setMapType("satellite")}>Satellite</button>
        </div>
      </section>

      {/* Route Selection Buttons */}
      <section className="frame-7-3522 pos-abs">
        <div className="group-21-3523 pos-abs">
          <button 
            className={`route-button ${selectedRoute === "juja-nairobi" ? "nairobijuja" : "jujanairobi"}`}
            onClick={() => setSelectedRoute("juja-nairobi")}
          >
            Juja-Nairobi
          </button>
          <button 
            className={`route-button ${selectedRoute === "nairobi-juja" ? "nairobijuja" : "jujanairobi"}`}
            onClick={() => setSelectedRoute("nairobi-juja")}
          >
            Nairobi-Juja
          </button>
        </div>
      </section>

      {/* Traffic Indicator Section */}
      <section className="frame-8-3529">
        <div className="traffic-item">
          <div className="ellipse-3-3533"></div>
          <span className="traffic-label">Clear Traffic</span>
        </div>
        <div className="traffic-item">
          <div className="ellipse-2-3532"></div>
          <span className="traffic-label">Moderate Traffic</span>
        </div>
        <div className="traffic-item">
          <div className="ellipse-1-3531"></div>
          <span className="traffic-label">Heavy Traffic</span>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <div className="footer-content">
          <span className="footer-item">Contact us</span>
          <span className="footer-item">Privacy policy</span>
          <span className="footer-item">F T</span>
        </div>
      </section>
    </div>
  );
};

export default BusTracking;
