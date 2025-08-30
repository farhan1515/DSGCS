import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />

      {/* Trust Indicators Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div className="glass-card p-6">
              <div className="text-3xl font-bold text-accent-400 mb-2">
                500+
              </div>
              <div className="text-gray-300">Clients Protected</div>
            </motion.div>
            <motion.div className="glass-card p-6">
              <div className="text-3xl font-bold text-accent-400 mb-2">
                24/7
              </div>
              <div className="text-gray-300">SOC Monitoring</div>
            </motion.div>
            <motion.div className="glass-card p-6">
              <div className="text-3xl font-bold text-accent-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-300">Threat Detection</div>
            </motion.div>
            <motion.div className="glass-card p-6">
              <div className="text-3xl font-bold text-accent-400 mb-2">ISO</div>
              <div className="text-gray-300">27001 Certified</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
