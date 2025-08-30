import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-cyber"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Logo Section */}
      <motion.div
        className="flex flex-col items-center space-y-8 relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Enhanced 3D Logo */}
        <div className="relative">
          <motion.div
            className="w-28 h-28 bg-gradient-accent rounded-3xl flex items-center justify-center shadow-glow relative overflow-hidden"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
            }}
          >
            <Shield className="w-14 h-14 text-white drop-shadow-lg" />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              animate={{ x: [-150, 150] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />
          </motion.div>

          {/* Pulsing rings */}
          <motion.div
            className="absolute -inset-4 border-2 border-accent-400/50 rounded-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -inset-2 border border-accent-300/30 rounded-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Company Name with glow effect */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent text-cyber-glow mb-2">
            ASITLOG
          </h1>
          <p className="text-lg text-accent-300 font-medium tracking-wider">
            Cybersecurity Excellence
          </p>
        </motion.div>
      </motion.div>

      {/* Enhanced Loading Animation */}
      <motion.div
        className="mt-16 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-accent-400 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Loading Text with typing effect */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.p
          className="text-gray-300 text-lg font-light tracking-wide"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Initializing Security Protocols...
        </motion.p>

        {/* Progress bar */}
        <div className="mt-4 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Security features ticker */}
      <motion.div
        className="absolute bottom-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="flex items-center justify-center space-x-8 text-xs text-gray-500">
          <span>24/7 SOC Monitoring</span>
          <span>•</span>
          <span>Real-time Threat Detection</span>
          <span>•</span>
          <span>Incident Response</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
