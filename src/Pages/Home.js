import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
    { label: "Track Bus", href: "#track" },
    { label: "Features", href: "#features" },
    { label: "Route Info", href: "#route" },
    { label: "About Us", href: "#about" },
    { label: "Feedback", href: "#feedback" },
  ];
  const features = [
    {
      icon: "⏰", // Clock emoji as a simple replacement
      title: "Real-Time Tracking",
      description: "Track your bus location and arrival times in real-time",
    },
    {
      icon: "📍", // Map Pin emoji
      title: "Route Planning",
      description: "Plan your journey with detailed route information",
    },
    {
      icon: "🔔", // Bell emoji
      title: "Smart Notifications",
      description: "Get alerts about delays and schedule changes",
    },
    {
      icon: "⭐", // Star emoji
      title: "Service Rating",
      description: "Rate your journey and provide feedback",
    },
  ];

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
         <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">Smart Metro</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-white hover:text-orange-500 transition-colors px-3 py-1 rounded bg-black/20"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#profile"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-bold"
          >
            PROFILE
          </a>
        </nav>

        {/* Mobile Navigation (Burger Menu) */}
        <button
          className="md:hidden text-white bg-black/50 p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-black/80 p-4 rounded-md w-48">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-bold text-white hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
      <section
        className="relative py-20 overflow-hidden bg-navy-900"
        style={{
          backgroundImage:
            'url("https://www.smetro.co.ke/assets/img/metrobus5.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Smart Metro System
              </h1>
              <p className="text-lg font-bold text-black bg-white/90 p-4 rounded-lg mb-8">
                Enhancing passenger mobility and convenience along the
                Nairobi-Juja route (Thika Road) with real-time tracking and
                smart features.
              </p>
              <div className="flex flex-wrap gap-4">
  <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600">
    Track Your Bus Now
  </button>
  <button className="px-6 py-3 border border-white text-black font-bold rounded-md hover:bg-white hover:text-navy-900">
    Learn More
  </button>
</div>

            </motion.div>

            {/* Right Column - Journey Planner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full p-6 border rounded-md shadow-lg bg-white">
  <h3 className="text-xl font-semibold text-navy-900 mb-6">NEED HELP?</h3>
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Special Service Requests
      </label>
      <textarea
        rows={3}
        placeholder="E.g., Need extra luggage space, assistance for elderly"
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md">
      Submit Request
    </button>
  </form>
</div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="features" style={{ padding: "40px", background: "#f8f9fa" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1a202c" }}>
          Smart Features for Smart Travel
        </h2>
        <p style={{ fontSize: "16px", color: "#4a5568", maxWidth: "600px", margin: "auto" }}>
          Experience seamless travel with our innovative features designed to
          make your journey comfortable and efficient.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", maxWidth: "800px", margin: "auto" }}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>{feature.icon}</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1a202c" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#4a5568" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Home;
