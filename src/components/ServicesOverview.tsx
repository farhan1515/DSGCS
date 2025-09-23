import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  borderGradient: string;
  route: string;
  highlights: string[];
}

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const services: ServiceCard[] = [
    {
      id: "solutions",
      title: "Services and Solutions",
      description:
        "Comprehensive cybersecurity solutions including network security, IAM, application security, and SOC solutions.",
      icon: Shield,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      borderGradient: "from-emerald-400/50 via-teal-500/50 to-cyan-600/50",
      route: "/solutions",
      highlights: [
        "Network Security",
        "Identity Management",
        "Data Protection",
        "SOC Solutions",
      ],
    },
    {
      id: "consultation",
      title: "Consultation Services",
      description:
        "Expert assessment services, compliance frameworks, security operations, and risk management consulting.",
      icon: Users,
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      borderGradient: "from-purple-400/50 via-violet-500/50 to-indigo-600/50",
      route: "/consultation",
      highlights: [
        "GAP Assessment",
        "Penetration Testing",
        "Compliance Services",
        "ISMS Development",
      ],
    },
    {
      id: "professional",
      title: "Professional Services",
      description:
        "Implementation and management of security solutions, web development, and mobile app development services.",
      icon: Briefcase,
      gradient: "from-amber-400 via-orange-500 to-red-600",
      borderGradient: "from-amber-400/50 via-orange-500/50 to-red-600/50",
      route: "/professional",
      highlights: [
        "Implementation",
        "Web Development",
        "Mobile Apps",
        "Database Security",
      ],
    },
    {
      id: "academy",
      title: "Cybersecurity Academy",
      description:
        "Comprehensive training programs, bootcamps, vendor certifications, and awareness programs.",
      icon: GraduationCap,
      gradient: "from-blue-400 via-sky-500 to-indigo-600",
      borderGradient: "from-blue-400/50 via-sky-500/50 to-indigo-600/50",
      route: "/academy",
      highlights: [
        "Bootcamps",
        "Vendor Training",
        "Awareness Programs",
        "Mentoring",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.6,
      } as const,
    },
  };

  const iconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      y: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      } as const,
    },
  };

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <section
      ref={ref}
      className="py-24 px-4 relative overflow-hidden bg-gradient-contact"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
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
              background: `linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%)`,
              borderColor: "rgba(16, 185, 129, 0.3)",
              color: "#10B981",
              boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-cute mb-6"
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
            Comprehensive Digital Solutions
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
            Explore our complete range of cybersecurity, infrastructure, and
            digital innovation services designed to protect and empower your
            business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              onClick={() => handleCardClick(service.route)}
            >
              {/* Card Container */}
              <div className="relative h-full p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-white/20">
                {/* Animated Border Gradient */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.borderGradient
                      .replace("from-", "")
                      .replace("via-", "")
                      .replace("to-", "")
                      .split(" ")
                      .map((color) => color + "/20")
                      .join(", ")})`,
                    padding: "2px",
                  }}
                />

                {/* Icon Section */}
                <motion.div
                  className="relative mb-6 flex justify-center"
                  variants={iconVariants}
                >
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-xl`}
                      style={{
                        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${
                          service.gradient.includes("emerald")
                            ? "rgba(16, 185, 129, 0.3)"
                            : service.gradient.includes("purple")
                            ? "rgba(147, 51, 234, 0.3)"
                            : service.gradient.includes("amber")
                            ? "rgba(245, 158, 11, 0.3)"
                            : "rgba(59, 130, 246, 0.3)"
                        }`,
                      }}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </div>

                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100"
                      style={{
                        borderColor: service.gradient.includes("emerald")
                          ? "#10B981"
                          : service.gradient.includes("purple")
                          ? "#9333EA"
                          : service.gradient.includes("amber")
                          ? "#F59E0B"
                          : "#3B82F6",
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <motion.h3
                    className="text-2xl font-cute"
                    style={{
                      background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {service.title}
                  </motion.h3>

                  <p
                    className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 font-cute-body"
                    style={{
                      color: "#F1F5F9",
                      textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4">
                    {service.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-center text-xs opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#E2E8F0" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 0.75, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                      >
                        <Zap className="w-3 h-3 mr-2 text-emerald-400" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="flex items-center justify-center pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span
                      className="text-sm font-semibold mr-2"
                      style={{ color: "#10B981" }}
                    >
                      Explore
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Target className="w-5 h-5 text-white/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
