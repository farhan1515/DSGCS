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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              style={{
                background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 30%, #E2E8F0 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(255, 255, 255, 0.4)",
                filter: "contrast(1.1) brightness(1.1)",
              }}
            >
              Digital Security Gateway Consulting Services (DSGCS)
            </motion.h2>

            <motion.p
              className="text-xl leading-relaxed max-w-5xl mx-auto"
              style={{
                color: "#F1F5F9",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                filter: "contrast(1.1) brightness(1.1)",
                lineHeight: "1.8",
              }}
              variants={fadeInVariants}
            >
              stands as a{" "}
              <span className="font-semibold text-emerald-400">
                premier cybersecurity company
              </span>{" "}
              based in{" "}
              <span className="font-semibold text-amber-400">
                Riyadh, Saudi Arabia
              </span>
              , committed to securing digital landscapes with cutting-edge
              solutions. With a rich legacy of safeguarding critical assets,
              Digital Security Gateway Consulting Services (DSGCS) is renowned
              for its{" "}
              <span className="font-semibold text-purple-400">
                expertise, innovative approach, and unwavering commitment to
                cybersecurity excellence
              </span>
              .
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
                  className="w-16 h-16 text-emerald-400"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))",
                  }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-emerald-400/30 rounded-full"
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
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                background: `linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
                filter: "contrast(1.2) brightness(1.2)",
              }}
              variants={fadeInVariants}
            >
              Our Care Statement
            </motion.h3>

            <motion.div
              className="text-lg leading-relaxed max-w-4xl mx-auto space-y-4"
              style={{
                color: "#F8FAFC",
                textShadow: "0 1px 6px rgba(0, 0, 0, 0.3)",
                filter: "contrast(1.1) brightness(1.1)",
              }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInVariants}>
                At{" "}
                <span className="font-semibold text-emerald-400">
                  Digital Security Gateway Consulting Services (DSGCS)
                </span>
                , we prioritize the{" "}
                <span className="font-semibold text-purple-400">
                  security and peace of mind
                </span>{" "}
                of our customers. Our dedicated team of experts is committed to
                providing{" "}
                <span className="font-semibold text-amber-400">
                  cutting-edge cybersecurity solutions
                </span>{" "}
                tailored to meet your unique needs.
              </motion.p>

              <motion.p variants={fadeInVariants}>
                We strive to build{" "}
                <span className="font-semibold text-blue-400">
                  long-lasting relationships
                </span>{" "}
                based on{" "}
                <span className="font-semibold text-emerald-400">
                  trust, integrity, and excellence
                </span>{" "}
                in service. By staying ahead of emerging threats and
                continuously enhancing our offerings, we ensure that your
                organization remains{" "}
                <span className="font-semibold text-purple-400">
                  protected and resilient
                </span>
                .
              </motion.p>

              <motion.p
                className="text-xl font-semibold pt-4"
                style={{
                  background: `linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #FCD34D 100%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
                }}
                variants={fadeInVariants}
              >
                Your security is our top priority, and we are here to support
                you every step of the way.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/2 left-10 transform -translate-y-1/2"
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
          <Globe className="w-12 h-12 text-blue-400/30" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-10"
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
          <Award className="w-10 h-10 text-amber-400/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-20"
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
          <Users className="w-8 h-8 text-purple-400/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro;
