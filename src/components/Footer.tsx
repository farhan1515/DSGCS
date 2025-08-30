import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Fingerprint } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-b from-transparent to-black/50">
      {/* Animated Background Text */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="whitespace-nowrap text-8xl font-bold"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ASITLOG • DIGITAL PROTECTION • CYBER DEFENSE •
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center space-x-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff3333] to-[#ff6b35] rounded-xl flex items-center justify-center">
              <Fingerprint className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ASITLOG
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Links */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Copyright © 2025 ASITLOG. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
