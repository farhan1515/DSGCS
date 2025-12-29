import { motion } from "framer-motion";
import ShinyText from "./ShinyText";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-contact"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `rgba(13, 30, 111, 0.4)`,
              boxShadow: "0 0 8px rgba(13, 30, 111, 0.3)",
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
        {/* DSGCS Logo - Clean and Independent */}
        <div className="relative">
          <motion.img
            src="/images/DSGCS16.png"
            alt="DSGCS Logo"
            className="w-48 h-48 object-contain drop-shadow-2xl filter brightness-110"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Professional Pulse Rings - Using Brand Color #0D1E6F */}
          <motion.div
            className="absolute inset-0 border-2 rounded-full"
            style={{ borderColor: "rgba(13, 30, 111, 0.4)" }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 border rounded-full"
            style={{ borderColor: "rgba(13, 30, 111, 0.25)" }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute inset-0 border rounded-full"
            style={{ borderColor: "rgba(13, 30, 111, 0.15)" }}
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Company Name with Crystal Clear Text */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <ShinyText
            text="DSGCS"
            disabled={false}
            speed={3}
            className="text-5xl md:text-6xl font-bold mb-3"
            style={{
              fontFamily: '"Inter", "Segoe UI", sans-serif',
              letterSpacing: "0.05em",
            }}
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ShinyText
              text="Digital Security Gateway Consulting Services"
              disabled={false}
              speed={4}
              className="text-xl font-semibold mb-2"
              style={{
                fontFamily: '"Inter", "Segoe UI", sans-serif',
                letterSpacing: "0.1em",
                fontWeight: "600",
              }}
            />
          </motion.div>
          {/* <p
            className="text-sm font-medium tracking-widest"
            style={{
              fontFamily: '"Inter", sans-serif',
              color: "#E2E8F0",
              textShadow:
                "0 1px 8px rgba(0, 0, 0, 0.7), 0 0 15px rgba(226, 232, 240, 0.4)",
              filter: "contrast(1.2) brightness(1.2)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: "500",
            }}
          >
            Protecting Your Digital Future
          </p> */}
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
            className="w-3 h-3 rounded-full"
            style={{
              background: `linear-gradient(135deg, #0D1E6F 0%, #6B46C1 100%)`,
              boxShadow: "0 0 15px rgba(13, 30, 111, 0.6)",
            }}
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
        <ShinyText
          text="Initializing Security Protocols..."
          disabled={false}
          speed={2}
          className="text-lg font-light tracking-wide"
          style={{
            color: "#F8FAFC",
            textShadow: "0 2px 8px rgba(13, 30, 111, 0.6)",
            filter: "contrast(1.2) brightness(1.1)",
          }}
        />

        {/* Progress bar */}
        <div className="mt-4 w-64 h-2 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/30">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, #0D1E6F 0%, #6B46C1 50%, #0D1E6F 100%)`,
              boxShadow: "0 0 20px rgba(13, 30, 111, 0.8)",
            }}
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
        {/* <div className="flex items-center justify-center space-x-8 text-xs text-gray-500">
          <span>24/7 SOC Monitoring</span>
          <span>•</span>
          <span>Real-time Threat Detection</span>
          <span>•</span>
          <span>Incident Response</span>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
