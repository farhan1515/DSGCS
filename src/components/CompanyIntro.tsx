import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Globe, Award, Users } from "lucide-react";

const CompanyIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-24 px-4 relative overflow-hidden bg-gradient-contact"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Company Description */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Digital Security Gateway Consulting Services Intro */}
          <motion.div className="mb-16" variants={fadeInVariants}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
              style={{
                fontFamily: '"Inter", sans-serif',
                textShadow: "0 2px 20px rgba(255, 255, 255, 0.2)",
                letterSpacing: "-0.02em",
              }}
            >
              Digital Security Gateway Consulting Services (DSGCS)
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto text-white/90"
              style={{
                fontFamily: '"Inter", sans-serif',
                textShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
                lineHeight: "1.8",
                fontWeight: "400",
              }}
              variants={fadeInVariants}
            >
              A leading cybersecurity firm headquartered in Riyadh, Saudi Arabia, dedicated to protecting digital environments through advanced security solutions. With a strong track record in defending critical assets, Digital Security Gateway Consulting Services (DSGCS) is recognized for its deep expertise, forward-thinking innovation, and steadfast dedication to cybersecurity excellence.
            </motion.p>
          </motion.div>

          {/* Our Care Statement Section */}
          <motion.div
            className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/5"
            variants={fadeInVariants}
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              variants={iconVariants}
            >
              <div className="relative">
                <Shield
                  className="w-16 h-16 text-white"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
                  }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
              style={{
                fontFamily: '"Inter", sans-serif',
                textShadow: "0 2px 15px rgba(255, 255, 255, 0.2)",
                letterSpacing: "-0.01em",
              }}
              variants={fadeInVariants}
            >
              Our Core Statement
            </motion.h3>

            <motion.div
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto space-y-6 text-white/90"
              style={{
                fontFamily: '"Inter", sans-serif',
                textShadow: "0 1px 6px rgba(0, 0, 0, 0.2)",
                lineHeight: "1.8",
                fontWeight: "400",
              }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInVariants}>
                At Digital Security Gateway Consulting Services (DSGCS), safeguarding our clients' digital assets and ensuring operational confidence are at the core of our mission. Our team of highly skilled cybersecurity professionals delivers advanced, customized security solutions aligned with each organization's specific requirements.
              </motion.p>

              <motion.p variants={fadeInVariants}>
                We are committed to fostering long-term partnerships founded on trust, integrity, and service excellence. Through proactive threat intelligence, continuous innovation, and ongoing enhancement of our capabilities, we help organizations maintain a strong, resilient, and secure cybersecurity posture.
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl font-medium pt-4 text-white"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  textShadow: "0 2px 12px rgba(255, 255, 255, 0.2)",
                  letterSpacing: "-0.01em",
                }}
                variants={fadeInVariants}
              >
                Your security is our top priority, and we are here to support
                you every step of the way.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements - Subtle white icons */}
        <motion.div
          className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Globe className="w-12 h-12 text-white/20" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-10 hidden lg:block"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Award className="w-10 h-10 text-white/20" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-20 hidden lg:block"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Users className="w-8 h-8 text-white/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro;
