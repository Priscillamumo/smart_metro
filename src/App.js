import React from "react";
import Feedback from "./Pages/Feedback"; // Import the Feedback component
import LoginRegister from './Pages/Login'; // Import the Login/Register component
import ErrorPage from './Pages/ErrorPage'; // Import the Error Page component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusTracking from "./Pages/BusTracking";
import About from "./Pages/About";
import Home from "./Pages/Home"

import "./App.css"; // Optional: Add global styling if needed
import AdminPage from "./Pages/Admin"; // Import the Admin Page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/BusTracking" element={<BusTracking/>} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
    
  );
}

export default App;
