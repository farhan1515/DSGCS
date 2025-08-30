import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import * as THREE from "three";

// 3D Particle System Component - Optimized with CyberCore colors
function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const particleCount =
      typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 800;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points
      ref={ref}
      positions={particlesPosition}
      stride={3}
      frustumCulled={true}
    >
      <PointMaterial
        transparent
        color="#00FFF7"
        size={
          typeof window !== "undefined" && window.innerWidth < 768 ? 0.06 : 0.08
        }
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// Fallback component for 3D loading
function Fallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Utility function for class names
const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// Custom SVG Icon Component
const SVGIcon = ({
  iconName,
  color,
  size = 40,
}: {
  iconName: string;
  color: string;
  size?: number;
}) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: size,
        height: size,
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
      }}
    >
      <img
        src={`/icons/services/${iconName}.svg`}
        alt={iconName}
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

// Spinning Logos Component - ASITLOG Style
const SpinningLogos: React.FC = () => {
  const radiusToCenterOfIcons = 160;
  const iconWrapperWidth = 60;

  const toRadians = (degrees: number): number => (Math.PI / 180) * degrees;

  // Service icons with enhanced 3D visibility
  const serviceLogos = [
    {
      iconName: "shield",
      color: "#00FFF7",
      name: "MSS",
      glow: "shadow-accent-500/50",
      bgGradient: "from-accent-500/30 to-accent-300/30",
      borderColor: "border-accent-500/50",
    },
    {
      iconName: "eye",
      color: "#FF3B3B",
      name: "Consultation",
      glow: "shadow-cta-500/50",
      bgGradient: "from-cta-500/30 to-cta-300/30",
      borderColor: "border-cta-500/50",
    },
    {
      iconName: "users",
      color: "#00FF00",
      name: "Academy",
      glow: "shadow-success-500/50",
      bgGradient: "from-success-500/30 to-success-300/30",
      borderColor: "border-success-500/50",
    },
    {
      iconName: "lock",
      color: "#AA00FF",
      name: "Professional",
      glow: "shadow-purple-500/50",
      bgGradient: "from-purple-500/30 to-purple-300/30",
      borderColor: "border-purple-500/50",
    },
    {
      iconName: "globe",
      color: "#007BFF",
      name: "Web Design",
      glow: "shadow-blue-500/50",
      bgGradient: "from-blue-500/30 to-blue-300/30",
      borderColor: "border-blue-500/50",
    },
    {
      iconName: "smartphone",
      color: "#FF007F",
      name: "Mobile App",
      glow: "shadow-pink-500/50",
      bgGradient: "from-pink-500/30 to-pink-300/30",
      borderColor: "border-pink-500/50",
    },
    {
      iconName: "zap",
      color: "#FFD700",
      name: "Threat Intel",
      glow: "shadow-yellow-500/50",
      bgGradient: "from-yellow-500/30 to-yellow-300/30",
      borderColor: "border-yellow-500/50",
    },
    {
      iconName: "database",
      color: "#00CC00",
      name: "Data Protection",
      glow: "shadow-green-500/50",
      bgGradient: "from-green-500/30 to-green-300/30",
      borderColor: "border-green-500/50",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full relative">
      {/* Seamless integration - no container */}
      <div
        style={{
          width: radiusToCenterOfIcons * 2 + iconWrapperWidth,
          height: radiusToCenterOfIcons * 2 + iconWrapperWidth,
        }}
        className="relative"
      >
        {/* Orbiting Service Icons */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {serviceLogos.map((logo, index) => {
            const angle = (360 / serviceLogos.length) * index;
            return (
              <motion.div
                key={index}
                style={{
                  top: `calc(50% - ${iconWrapperWidth / 2}px + ${
                    radiusToCenterOfIcons * Math.sin(toRadians(angle))
                  }px)`,
                  left: `calc(50% - ${iconWrapperWidth / 2}px + ${
                    radiusToCenterOfIcons * Math.cos(toRadians(angle))
                  }px)`,
                  width: iconWrapperWidth,
                  height: iconWrapperWidth,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 border-2",
                  `bg-gradient-to-br ${logo.bgGradient}`,
                  logo.borderColor,
                  logo.glow
                )}
                animate={{ rotate: -360 }}
                transition={{
                  rotate: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  default: {
                    delay: index * 0.1 + 0.5,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                whileHover={{
                  scale: 1.3,
                  zIndex: 10,
                  transition: { duration: 0.2 },
                }}
                aria-label={`${logo.name} service`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <SVGIcon
                  iconName={logo.iconName}
                  color={logo.color}
                  size={32}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="rounded-full w-40 h-40 md:w-44 md:h-44 flex items-center justify-center bg-gradient-accent shadow-glow-xl relative overflow-hidden border-4 border-accent-500/50 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-16 h-16 md:w-18 md:h-18 text-primary-900 drop-shadow-2xl filter brightness-110" />

            {/* Enhanced Pulse rings */}
            <motion.div
              className="absolute inset-0 border-4 border-accent-500/60 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 0, 0.8],
                boxShadow: [
                  "0 0 20px rgba(0, 255, 247, 0.4)",
                  "0 0 60px rgba(0, 255, 247, 0.8)",
                  "0 0 20px rgba(0, 255, 247, 0.4)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Outer pulse ring */}
            <motion.div
              className="absolute inset-0 border-2 border-accent-400/40 rounded-full"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Enhanced Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
              animate={{ x: [-200, 200] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
            />
          </motion.div>
        </div>

        {/* Enhanced Circular Text Ring */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(40)].map((_, i) => {
              const angle = (360 / 40) * i;
              const text =
                "• CYBERSECURITY EXCELLENCE • PROTECTING YOUR DIGITAL WORLD ";
              const char = text[i % text.length];
              return (
                <motion.span
                  key={i}
                  className="absolute text-sm font-bold text-accent-500/80 drop-shadow-lg"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${
                      radiusToCenterOfIcons + 40
                    }px) rotate(-${angle}deg)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Background glow effects */}
        <div className="absolute inset-0 -z-10">
          {serviceLogos.map((logo, index) => {
            const angle = (360 / serviceLogos.length) * index;
            return (
              <motion.div
                key={`glow-${index}`}
                style={{
                  top: `calc(50% - 40px + ${
                    radiusToCenterOfIcons * Math.sin(toRadians(angle))
                  }px)`,
                  left: `calc(50% - 40px + ${
                    radiusToCenterOfIcons * Math.cos(toRadians(angle))
                  }px)`,
                  background: `radial-gradient(circle, ${logo.color}40, transparent)`,
                }}
                className="absolute w-20 h-20 rounded-full blur-2xl opacity-15"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 md:pt-24"
    >
      {/* CyberCore Background - Match LoadingScreen */}
      <div className="absolute inset-0 bg-gradient-cyber" />

      {/* Enhanced Background Elements - Match theme */}
      <div className="fixed inset-0 pointer-events-none">
        {/* CyberCore Gradient Orbs - Match LoadingScreen colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cta-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-success-500/10 rounded-full blur-2xl" />

        {/* Enhanced Grid Pattern - Match theme */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 247, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 247, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* 3D Particle Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          performance={{ min: 0.5 }}
          dpr={
            typeof window !== "undefined" && window.devicePixelRatio > 1
              ? 1.5
              : 1
          }
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[6, 6, 6]} intensity={0.8} color="#00FFF7" />
          <pointLight position={[-6, -6, -6]} intensity={0.4} color="#FF3B3B" />
          <Suspense fallback={<Fallback />}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-left max-w-xl space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Tagline */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="cyber-gradient-text">
              Next-Generation Cybersecurity
            </span>
            <br />
            <span className="text-text-secondary text-xl md:text-3xl lg:text-4xl">
              Solutions for Modern Threats
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive managed security services with expert-level threat
            detection and 24/7 monitoring for enterprise protection.
          </motion.p>

          {/* Enhanced CTA */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="group bg-gradient-cta text-text-primary px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:shadow-glow-red-lg transition-all duration-300 mx-auto md:mx-0 cyber-border-red"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Secure Your Business</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex items-center space-x-8 pt-8 text-sm text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span>500+ Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cta-500 rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Spinning Service Logos */}
        <motion.div
          className="flex-1 w-full h-[500px] md:h-[600px] relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SpinningLogos />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent-500 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-accent-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
