import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Heart,
  ShoppingCart,
  GraduationCap,
  Rocket,
  Building,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  gradient: string;
  stats: string;
}

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries: Industry[] = [
    {
      id: "fintech",
      name: "Fintech & Banking",
      icon: Building2,
      description:
        "Securing financial transactions and protecting sensitive banking data",
      gradient: "from-green-400 to-emerald-600",
      stats: "500+ Banks Protected",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      description: "HIPAA compliance and medical data protection solutions",
      gradient: "from-red-400 to-pink-600",
      stats: "100+ Medical Centers",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      description: "PCI DSS compliance and customer data security",
      gradient: "from-blue-400 to-indigo-600",
      stats: "1000+ Online Stores",
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      description: "Student data protection and educational platform security",
      gradient: "from-purple-400 to-violet-600",
      stats: "200+ Institutions",
    },
    {
      id: "startups",
      name: "Startups & SMEs",
      icon: Rocket,
      description: "Scalable security solutions for growing businesses",
      gradient: "from-orange-400 to-red-600",
      stats: "2000+ Startups",
    },
    {
      id: "government",
      name: "Government & Public Sector",
      icon: Building,
      description:
        "Compliance with national security frameworks and regulations",
      gradient: "from-teal-400 to-cyan-600",
      stats: "50+ Gov Agencies",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-24 px-4 relative overflow-hidden bg-gradient-contact"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 border border-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-60 h-60 border border-white/15 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6 border"
            style={{
              background: `linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)`,
              borderColor: "rgba(245, 158, 11, 0.3)",
              color: "#F59E0B",
              boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Industries We Serve
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-cute mb-3"
            style={{
              background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 30%, #E2E8F0 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              filter:
                "contrast(1.1) brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Securing Every Sector
          </motion.h2>

          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed font-cute-body"
            style={{
              color: "#F1F5F9",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              filter: "contrast(1.1) brightness(1.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            From fintech to healthcare, we provide tailored cybersecurity
            solutions that meet the unique challenges of every industry.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              className="group relative"
              variants={cardVariants}
            >
              <div className="relative h-full p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:-translate-y-2">
                {/* Gradient Border on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${industry.gradient
                      .replace("from-", "")
                      .replace("to-", "")
                      .split(" ")
                      .map((color) => color + "/20")
                      .join(", ")})`,
                    padding: "1px",
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="relative mb-6 flex justify-center"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} p-4 shadow-xl`}
                    style={{
                      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${
                        industry.gradient.includes("green")
                          ? "rgba(16, 185, 129, 0.3)"
                          : industry.gradient.includes("red")
                          ? "rgba(239, 68, 68, 0.3)"
                          : industry.gradient.includes("blue")
                          ? "rgba(59, 130, 246, 0.3)"
                          : industry.gradient.includes("purple")
                          ? "rgba(147, 51, 234, 0.3)"
                          : industry.gradient.includes("orange")
                          ? "rgba(249, 115, 22, 0.3)"
                          : "rgba(6, 182, 212, 0.3)"
                      }`,
                    }}
                  >
                    <industry.icon className="w-full h-full text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3
                    className="text-xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {industry.name}
                  </h3>

                  <p
                    className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      color: "#F1F5F9",
                      textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {industry.description}
                  </p>

                  {/* Stats removed per request */}
                </div>

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white/40" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
