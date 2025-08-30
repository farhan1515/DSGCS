import React from "react";
import { motion } from "framer-motion";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-hero font-bold mb-6 text-cyber-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cybersecurity Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive managed security services with 24/7/365 SOC
            monitoring, threat detection, and incident response capabilities.
          </motion.p>
        </div>
      </section>

      {/* Services Component */}
      <Services />
    </motion.div>
  );
};

export default ServicesPage;
