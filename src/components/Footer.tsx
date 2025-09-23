import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative py-12 px-4 bg-gradient-contact">
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
          DSGCS • DIGITAL SECURITY GATEWAY • CONSULTING SERVICES •
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/images/dsgcs.png"
              alt="DSGCS Logo"
              className="w-20 h-20 object-contain drop-shadow-lg filter brightness-110"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
            />
            <span
              className="text-3xl font-bold"
              style={{
                fontFamily: '"Inter", "Poppins", sans-serif',
                background:
                  "linear-gradient(135deg, #ffffff 0%, #F8FAFC 50%, #E2E8F0 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
                filter: "contrast(1.2) brightness(1.2)",
              }}
            >
              DSGCS
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
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 border border-white/10"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#10B981";
                  e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(16, 185, 129, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
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
              className="text-gray-400 transition-colors duration-300 font-medium"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#10B981";
                e.currentTarget.style.textShadow =
                  "0 0 10px rgba(16, 185, 129, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.textShadow = "none";
              }}
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
            <p
              className="text-sm"
              style={{
                color: "#F1F5F9",
                textShadow: "0 1px 3px rgba(0,0,0,0.5)",
              }}
            >
              Copyright © 2025 DSGCS (Digital Security Gateway Consulting
              Services). All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
