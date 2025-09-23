import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";

const ContactPage = () => {
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
            className="text-hero font-cute mb-6 text-cyber-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-cute-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to secure your digital infrastructure? Contact our
            cybersecurity experts for a comprehensive security assessment and
            tailored solutions.
          </motion.p>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
