// Backup of original Hero component
import { Suspense, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import * as THREE from "three";

// Service Icon using actual SVG files under public/icons/services
const ServiceIcon = ({
  iconName,
  size = 40,
}: {
  iconName: string;
  size?: number;
}) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src={`/icons/services/${iconName}`}
        alt={iconName.replace(/[-_]/g, " ")}
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

// OrbitingCircles demo configured for DSGCS service icons
const OrbitingCirclesDemo: React.FC = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-4xl md:text-6xl font-display leading-none cyber-gradient-text">
        DSGCS
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <ServiceIcon iconName="network-security.svg" size={30} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <ServiceIcon iconName="identity.svg" size={30} />
      </OrbitingCircles>

      {/* Outer Circles (reverse) - evenly spaced delays */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
        delay={0}
      >
        <ServiceIcon iconName="application-security.svg" size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={3.33}
        reverse
      >
        <ServiceIcon iconName="secure-data.svg" size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={6.67}
        reverse
      >
        <ServiceIcon iconName="database-security.svg" size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <ServiceIcon iconName="infrastructure.svg" size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={13.33}
        reverse
      >
        <ServiceIcon iconName="web-development (1).svg" size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={16.67}
        reverse
      >
        <ServiceIcon iconName="mobiledev.svg" size={50} />
      </OrbitingCircles>
    </div>
  );
};

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
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#00FFF7"
        size={
          typeof window !== "undefined" && window.innerWidth < 768 ? 0.06 : 0.08
        }
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 md:pt-24"
    >
      {/* CyberCore Background */}
      <div className="absolute inset-0 bg-gradient-cyber" />

      {/* Enhanced Background Elements - Match theme */}
      <div className="fixed inset-0 pointer-events-none">
        {/* CyberCore Gradient Orbs */}
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
          {/* New Company Banner */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-cute leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.0, ease: "easeOut" }}
          >
            <motion.span
              className="block mb-4"
              style={{
                background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 25%, #E2E8F0 50%, #FFFFFF 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                filter:
                  "contrast(1.1) brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Your Trusted Partner for
            </motion.span>
            <motion.span
              className="block text-2xl md:text-4xl lg:text-5xl"
              style={{
                background: `linear-gradient(135deg, #10B981 0%, #34D399 25%, #6EE7B7 50%, #10B981 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow:
                  "0 0 40px rgba(16, 185, 129, 0.6), 0 2px 15px rgba(16, 185, 129, 0.4)",
                filter:
                  "contrast(1.3) brightness(1.2) drop-shadow(0 3px 6px rgba(0,0,0,0.3))",
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              Cybersecurity, Infrastructure,
            </motion.span>
            <motion.span
              className="block text-2xl md:text-4xl lg:text-5xl mt-2"
              style={{
                background: `linear-gradient(135deg, #F59E0B 0%, #FBBF24 25%, #FCD34D 50%, #F59E0B 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow:
                  "0 0 20px rgba(245, 158, 11, 0.4), 0 2px 8px rgba(245, 158, 11, 0.3)",
                filter:
                  "contrast(1.1) brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
              }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              and Digital Innovation.
            </motion.span>
          </motion.h1>

          {/* New Intro Statement */}
          <motion.p
            className="text-lg md:text-xl font-cute-body max-w-2xl leading-relaxed"
            style={{
              color: "#FFFFFF",
              textShadow:
                "0 2px 15px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.3)",
              filter:
                "contrast(1.2) brightness(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
              fontWeight: "500",
            }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.9, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              "We protect your business, build your foundation, and design your
              digital future — all in one place"
            </motion.span>
          </motion.p>

          {/* Enhanced CTA */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="group text-white px-8 py-4 rounded-xl font-display text-lg flex items-center space-x-3 transition-all duration-300 mx-auto md:mx-0"
              style={{
                background: `linear-gradient(135deg, #0D1E6F 0%, #6B46C1 50%, #0D1E6F 100%)`,
                boxShadow:
                  "0 0 25px rgba(13, 30, 111, 0.6), 0 8px 32px rgba(107, 70, 193, 0.4)",
                border: "1px solid rgba(13, 30, 111, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 35px rgba(13, 30, 111, 0.8), 0 12px 40px rgba(107, 70, 193, 0.6)";
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(13, 30, 111, 0.6), 0 8px 32px rgba(107, 70, 193, 0.4)";
                e.currentTarget.style.transform = "translateY(0px) scale(1)";
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: OrbitingCircles services - merged with background */}
        <motion.div
          className="flex-1 w-full h-[500px] md:h-[600px] relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitingCirclesDemo />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
