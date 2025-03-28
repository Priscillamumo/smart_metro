import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
};

export default Home;
