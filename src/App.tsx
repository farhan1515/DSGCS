import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero text-text-primary overflow-x-hidden relative">
      {/* Enhanced CyberCore Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* CyberCore Gradient Orbs with proper opacity */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cta-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-success-500/8 rounded-full blur-2xl animate-cyber-pulse" />

        {/* Enhanced Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Cyber Circuit Lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="cyberGrid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="url(#cyberGradient)"
                  strokeWidth="1"
                />
                <circle cx="0" cy="0" r="2" fill="#00FFF7" opacity="0.3" />
                <circle cx="100" cy="100" r="2" fill="#FF3B3B" opacity="0.3" />
              </pattern>
              <linearGradient
                id="cyberGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00FFF7" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#FF3B3B" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#00FFAB" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#cyberGrid)" />
          </svg>
        </div>
      </div>

      <Router>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <div key="main" className="relative z-10">
              <SmoothScroll />
              <Navbar />

              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>

              <Footer />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
