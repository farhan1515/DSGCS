import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Zap,
  Users,
  Database,
  AlertTriangle,
  Search,
  Globe,
  Smartphone,
  Code,
  Monitor,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Managed Security Services (MSS)",
      description:
        "Comprehensive 24/7 SOC monitoring with real-time threat detection and incident response. Advanced SIEM solutions with threat intelligence.",
      features: [
        "24/7 SOC Monitoring",
        "Real-time Threat Detection",
        "SIEM Management",
        "Incident Response",
      ],
      gradient: "from-accent-500 to-accent-300",
      iconColor: "text-accent-500",
      borderColor: "border-accent-500/20",
      hoverImage:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Eye,
      title: "Cybersecurity Consultation",
      description:
        "Expert cybersecurity consulting for risk assessments, compliance frameworks, and strategic security planning aligned with industry standards.",
      features: [
        "Risk Assessment",
        "Compliance Frameworks",
        "Security Roadmap",
        "GAP Analysis",
      ],
      gradient: "from-cta-500 to-cta-300",
      iconColor: "text-cta-500",
      borderColor: "border-cta-500/20",
      hoverImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Users,
      title: "Cybersecurity Academy",
      description:
        "Globally recognized training and certifications including CISSP, CISM, CISA with hands-on labs and expert instructors.",
      features: [
        "CISSP Training",
        "CISM Certification",
        "CISA Programs",
        "Hands-on Labs",
      ],
      gradient: "from-success-500 to-success-300",
      iconColor: "text-success-500",
      borderColor: "border-success-500/20",
      hoverImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Lock,
      title: "Professional Services",
      description:
        "Implementation and optimization of advanced cybersecurity solutions including SIEM, SOAR, PAM, DLP, and Zero Trust frameworks.",
      features: [
        "SIEM Implementation",
        "SOAR Solutions",
        "PAM Systems",
        "Zero Trust Architecture",
      ],
      gradient: "from-accent-400 to-accent-200",
      iconColor: "text-accent-400",
      borderColor: "border-accent-400/20",
      hoverImage:
        "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description:
        "Modern, responsive web applications with cutting-edge design and robust security features. Full-stack development with premium UX/UI.",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "SEO Optimization",
        "Security Integration",
      ],
      gradient: "from-accent-300 to-accent-100",
      iconColor: "text-accent-300",
      borderColor: "border-accent-300/20",
      hoverImage:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications with intuitive interfaces, robust security, and seamless user experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform",
        "UI/UX Design",
      ],
      gradient: "from-cta-300 to-cta-100",
      iconColor: "text-cta-300",
      borderColor: "border-cta-300/20",
      hoverImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Zap,
      title: "Threat Intelligence",
      description:
        "Advanced threat hunting and intelligence services with proactive monitoring and predictive threat analysis capabilities.",
      features: [
        "Threat Hunting",
        "Intelligence Feeds",
        "Predictive Analysis",
        "IOC Monitoring",
      ],
      gradient: "from-cta-400 to-cta-200",
      iconColor: "text-cta-400",
      borderColor: "border-cta-400/20",
      hoverImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Database,
      title: "Data Protection & Privacy",
      description:
        "Comprehensive data protection strategies, privacy compliance, and data loss prevention solutions for enterprise environments.",
      features: [
        "Data Loss Prevention",
        "Privacy Compliance",
        "Data Classification",
        "Encryption Solutions",
      ],
      gradient: "from-success-400 to-success-200",
      iconColor: "text-success-400",
      borderColor: "border-success-400/20",
      hoverImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(0, 255, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 59, 59, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(0, 255, 171, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Shield className="w-5 h-5 text-accent-500 mr-2" />
            <span className="text-accent-500 font-semibold">
              Premium Services
            </span>
          </motion.div>

          <h2 className="text-h1 md:text-hero font-bold text-text-primary mb-6">
            <span className="cyber-gradient-text">Cybersecurity</span>{" "}
            <span className="text-text-secondary">Excellence</span>
          </h2>

          <p className="text-body text-text-muted max-w-3xl mx-auto leading-relaxed">
            Comprehensive managed security services with 24/7/365 SOC
            monitoring, expert consultation, and cutting-edge threat detection
            capabilities.
          </p>
        </motion.div>

        {/* Services Grid with Hover Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative cyber-card hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Hover Background Image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                style={{
                  backgroundImage: `url(${service.hoverImage})`,
                }}
              />

              {/* Gradient Overlay on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 ${service.borderColor} border group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 15 }}
                  >
                    <service.icon
                      className={`w-8 h-8 ${service.iconColor} group-hover:drop-shadow-glow`}
                    />
                  </motion.div>

                  <motion.div
                    className="px-3 py-1 rounded-full glass-card text-xs font-semibold text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Premium
                  </motion.div>
                </div>

                {/* Service Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-cyber-glow transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-text-muted mb-6 leading-relaxed text-sm group-hover:text-text-secondary transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 0.7, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace(
                            "text-",
                            "bg-"
                          )} group-hover:animate-pulse`}
                        />
                        <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Service Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-accent-500/10 group-hover:border-accent-500/30 transition-colors duration-300">
                  <motion.button
                    className={`px-4 py-2 rounded-xl bg-gradient-to-r ${service.gradient} text-primary-900 font-semibold text-sm flex items-center space-x-2 hover:shadow-glow transition-all duration-300 opacity-80 group-hover:opacity-100`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <Search className="w-3 h-3" />
                  </motion.button>

                  <div className="text-right">
                    <div className="text-xs text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                      Starting from
                    </div>
                    <div
                      className={`text-sm font-bold ${service.iconColor} group-hover:text-glow-success transition-all duration-300`}
                    >
                      Contact us
                    </div>
                  </div>
                </div>

                {/* Cyber Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-accent-500/30 rounded-2xl pointer-events-none transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent, rgba(0,255,247,0.05), transparent)",
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              label: "Threats Detected",
              value: "500K+",
              color: "text-cta-500",
            },
            {
              label: "Clients Protected",
              value: "1000+",
              color: "text-accent-500",
            },
            {
              label: "Security Experts",
              value: "150+",
              color: "text-success-500",
            },
            {
              label: "Projects Delivered",
              value: "2000+",
              color: "text-accent-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2 group-hover:text-glow-success transition-all duration-300`}
                animate={{
                  textShadow: [
                    "0 0 0px rgba(0,255,247,0)",
                    "0 0 10px rgba(0,255,247,0.3)",
                    "0 0 0px rgba(0,255,247,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <div className="text-text-muted text-sm group-hover:text-text-secondary transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group bg-gradient-cta text-text-primary px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:shadow-glow-red-lg transition-all duration-300 mx-auto cyber-border-red"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" />
            <span>Get Security Assessment</span>
            <motion.div
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
