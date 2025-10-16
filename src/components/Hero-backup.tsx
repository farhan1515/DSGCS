// Backup of original Hero component
import { Suspense, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import * as THREE from "three";

// Service data structure
interface ServiceData {
  iconName: string;
  title: string;
  details: string[];
  color: string;
}

// Service Icon with interactive card
const ServiceCard = ({
  service,
  size = 50,
  isInner = false,
}: {
  service: ServiceData;
  size?: number;
  isInner?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const showPopup = isHovered || isClicked;

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      {/* Icon Container */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: size, height: size }}
      >
        <div
          className="w-full h-full rounded-full p-2 backdrop-blur-sm transition-all duration-300"
          style={{
            background: showPopup
              ? `linear-gradient(135deg, ${service.color}40, ${service.color}20)`
              : 'rgba(255, 255, 255, 0.05)',
            border: showPopup
              ? `2px solid ${service.color}`
              : '2px solid rgba(255, 255, 255, 0.1)',
            boxShadow: showPopup
              ? `0 0 20px ${service.color}60, 0 4px 12px rgba(0,0,0,0.3)`
              : '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <img
            src={`/icons/services/${service.iconName}`}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Service Name Label - Always Visible */}
      {!isInner && (
        <motion.div
          className="absolute pointer-events-none"
          style={{ top: size + 8 }}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap backdrop-blur-md"
            style={{
              background: 'rgba(9, 22, 92, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            {service.title}
          </div>
        </motion.div>
      )}

      {/* Popup Details - On Hover/Click */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute z-50 pointer-events-none"
            style={{
              top: isInner ? size + 15 : size + 45,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative px-4 py-3 rounded-xl backdrop-blur-xl min-w-[200px] max-w-[280px]"
              style={{
                background: 'rgba(9, 22, 92, 0.95)',
                border: `2px solid ${service.color}`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${service.color}40`,
              }}
            >
              {/* Title */}
              <h4
                className="font-bold text-sm mb-2 text-center"
                style={{ color: service.color }}
              >
                {service.title}
              </h4>

              {/* Details */}
              <div className="space-y-1">
                {service.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-xs text-white/90"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                      style={{ background: service.color }}
                    />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Arrow pointer */}
              <div
                className="absolute w-3 h-3 rotate-45"
                style={{
                  top: -7,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(9, 22, 92, 0.95)',
                  borderTop: `2px solid ${service.color}`,
                  borderLeft: `2px solid ${service.color}`,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// OrbitingCircles demo configured for DSGCS service icons
const OrbitingCirclesDemo: React.FC = () => {
  // Define all services with their details
  const innerServices: ServiceData[] = [
    {
      iconName: "network-security.svg",
      title: "Network Security",
      details: ["Firewall Management", "IDS/IPS", "Network Segmentation", "VPN Solutions"],
      color: "#00FFF7",
    },
    {
      iconName: "identity.svg",
      title: "Identity Management",
      details: ["SSO Solutions", "MFA Implementation", "Access Control", "User Provisioning"],
      color: "#FF3B3B",
    },
  ];

  const outerServices: ServiceData[] = [
    {
      iconName: "application-security.svg",
      title: "Application Security",
      details: ["SAST/DAST", "Code Review", "Penetration Testing", "Secure SDLC"],
      color: "#00FFF7",
    },
    {
      iconName: "secure-data.svg",
      title: "Data Security",
      details: ["Encryption", "Data Classification", "Secure Storage", "Data Masking"],
      color: "#AA00FF",
    },
    {
      iconName: "database-security.svg",
      title: "Database Security",
      details: ["DLP (Data Loss Prevention)", "DC (Data Classification)", "DRM (Digital Rights Management)", "IAM & PAM"],
      color: "#007BFF",
    },
    {
      iconName: "complianceservice.svg",
      title: "Compliance Services",
      details: ["NCA Compliance", "SAMA Standards", "ISO Certification", "CITC & ARAMCO"],
      color: "#FFD700",
    },
    {
      iconName: "digitaltrans.svg",
      title: "Digital Transformation",
      details: ["Infrastructure Modernization", "Cloud Migration", "Data & Analytics", "Process Automation"],
      color: "#00CC00",
    },
    {
      iconName: "infrastructure.svg",
      title: "Infrastructure Security",
      details: ["Cloud Security", "Server Hardening", "Backup Solutions", "Disaster Recovery"],
      color: "#FF007F",
    },
    {
      iconName: "web-development (1).svg",
      title: "Web Development",
      details: ["Secure Web Apps", "API Security", "Web Frameworks", "Performance Optimization"],
      color: "#FFD700",
    },
    {
      iconName: "mobiledev.svg",
      title: "Mobile Development",
      details: ["iOS & Android", "Mobile Security", "Cross-Platform", "App Store Deployment"],
      color: "#00CC00",
    },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-visible">
      <div className="relative" style={{ width: "200px", height: "200px" }}>
        <motion.img
          src="/images/dsgcs.png"
          alt="DSGCS Logo"
          className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
          style={{ minWidth: "160px", minHeight: "160px" }}
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          onLoad={() => console.log("Logo loaded successfully")}
          onError={() => console.log("Logo failed to load")}
        />
        {/* Glow effect around logo */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(13, 30, 111, 0.3) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Inner Circles */}
      {innerServices.map((service, index) => (
        <OrbitingCircles
          key={`inner-${index}`}
          className="border-none bg-transparent"
          duration={20}
          delay={index * 10}
          radius={80}
          path={index === 0}
        >
          <ServiceCard service={service} size={35} isInner={true} />
        </OrbitingCircles>
      ))}

      {/* Outer Circles (reverse) - evenly spaced delays */}
      {outerServices.map((service, index) => (
        <OrbitingCircles
          key={`outer-${index}`}
          className="border-none bg-transparent"
          radius={220}
          duration={25}
          delay={index * (25 / outerServices.length)}
          reverse
          path={index === 0}
        >
          <ServiceCard service={service} size={55} />
        </OrbitingCircles>
      ))}
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
                color: "#FFFFFF",
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
                color: "#FFFFFF",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                filter:
                  "contrast(1.1) brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
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
                color: "#FFFFFF",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
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
