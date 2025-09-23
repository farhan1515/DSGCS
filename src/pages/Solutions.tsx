import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Network,
  Lock,
  Mail,
  GraduationCap,
  Users,
  Key,
  Eye,
  Database,
  AlertTriangle,
  Activity,
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  gradient: string;
  borderGradient: string;
  services: ServiceItem[];
}

interface ServiceItem {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
  color: string;
}

const Solutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceCategories: ServiceCategory[] = [
    {
      id: "network",
      title: "Network Security",
      icon: Network,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      borderGradient: "from-emerald-400/50 via-teal-500/50 to-cyan-600/50",
      services: [
        {
          name: "Next Generation Firewall",
          icon: Shield,
          description: "Advanced threat protection with deep packet inspection",
          features: [
            "Intrusion Prevention",
            "Application Control",
            "SSL Inspection",
            "Advanced Malware Protection",
          ],
          color: "#10B981",
        },
        {
          name: "Network Access Control",
          icon: Lock,
          description: "Comprehensive endpoint security and access management",
          features: [
            "Device Authentication",
            "Policy Enforcement",
            "Quarantine Management",
            "Guest Access",
          ],
          color: "#06B6D4",
        },
        {
          name: "Advance Malware Protection (AMP/ATP)",
          icon: AlertTriangle,
          description: "Real-time threat detection and response capabilities",
          features: [
            "Behavioral Analysis",
            "Sandboxing",
            "Threat Intelligence",
            "Automated Response",
          ],
          color: "#F59E0B",
        },
        {
          name: "Email & Web Security",
          icon: Mail,
          description: "Complete protection for email and web communications",
          features: [
            "Anti-Phishing",
            "Content Filtering",
            "Data Loss Prevention",
            "URL Filtering",
          ],
          color: "#8B5CF6",
        },
      ],
    },
    {
      id: "training",
      title: "Training and Development Awareness",
      icon: GraduationCap,
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      borderGradient: "from-purple-400/50 via-violet-500/50 to-indigo-600/50",
      services: [
        {
          name: "Learning and Management System (LMS)",
          icon: GraduationCap,
          description: "Comprehensive cybersecurity training platform",
          features: [
            "Interactive Modules",
            "Progress Tracking",
            "Certification",
            "Compliance Reporting",
          ],
          color: "#9333EA",
        },
        {
          name: "Phishing Simulation",
          icon: Mail,
          description: "Realistic phishing attack simulations for training",
          features: [
            "Custom Campaigns",
            "Real-time Reporting",
            "User Training",
            "Risk Assessment",
          ],
          color: "#EC4899",
        },
        {
          name: "Awareness Content",
          icon: Eye,
          description: "Educational content for security awareness",
          features: [
            "Video Tutorials",
            "Interactive Guides",
            "Best Practices",
            "Policy Templates",
          ],
          color: "#06B6D4",
        },
        {
          name: "Workshops",
          icon: Users,
          description: "Hands-on cybersecurity workshops and seminars",
          features: [
            "Expert-led Sessions",
            "Practical Exercises",
            "Group Activities",
            "Q&A Sessions",
          ],
          color: "#10B981",
        },
        {
          name: "Security Events",
          icon: Activity,
          description: "Industry conferences and security events",
          features: [
            "Networking Opportunities",
            "Latest Trends",
            "Expert Speakers",
            "Case Studies",
          ],
          color: "#F59E0B",
        },
        {
          name: "Reminder Tools (Digital Content)",
          icon: Smartphone,
          description: "Digital reminders and security tips",
          features: [
            "Push Notifications",
            "Email Reminders",
            "Mobile Apps",
            "Interactive Widgets",
          ],
          color: "#8B5CF6",
        },
      ],
    },
    {
      id: "iam",
      title: "Identity and Access Management (IAM)",
      icon: Key,
      gradient: "from-blue-400 via-sky-500 to-indigo-600",
      borderGradient: "from-blue-400/50 via-sky-500/50 to-indigo-600/50",
      services: [
        {
          name: "Multifactor Authentication",
          icon: Lock,
          description: "Enhanced security with multiple authentication factors",
          features: [
            "SMS/Email OTP",
            "Biometric Auth",
            "Hardware Tokens",
            "Mobile Apps",
          ],
          color: "#3B82F6",
        },
        {
          name: "Single Sign On",
          icon: Key,
          description: "Seamless access to multiple applications",
          features: [
            "SAML Integration",
            "OAuth Support",
            "Federation",
            "Directory Sync",
          ],
          color: "#06B6D4",
        },
        {
          name: "IAM Governance",
          icon: Users,
          description: "Complete identity lifecycle management",
          features: [
            "User Provisioning",
            "Access Reviews",
            "Compliance Reports",
            "Role Management",
          ],
          color: "#8B5CF6",
        },
        {
          name: "Privileged Access Management (PAM)",
          icon: Shield,
          description: "Secure management of privileged accounts",
          features: [
            "Session Recording",
            "Just-in-time Access",
            "Password Vaulting",
            "Risk Analytics",
          ],
          color: "#10B981",
        },
      ],
    },
    {
      id: "appsec",
      title: "Application Security",
      icon: Globe,
      gradient: "from-amber-400 via-orange-500 to-red-600",
      borderGradient: "from-amber-400/50 via-orange-500/50 to-red-600/50",
      services: [
        {
          name: "Web Application Firewall (WAF)",
          icon: Shield,
          description: "Protection against web application attacks",
          features: [
            "OWASP Top 10 Protection",
            "Bot Management",
            "API Security",
            "DDoS Protection",
          ],
          color: "#F59E0B",
        },
        {
          name: "Static Application Security Testing (SAST)",
          icon: Search,
          description: "Source code analysis for vulnerabilities",
          features: [
            "Code Scanning",
            "Vulnerability Detection",
            "Compliance Checks",
            "IDE Integration",
          ],
          color: "#EF4444",
        },
        {
          name: "Dynamic Application Security Testing (DAST)",
          icon: Activity,
          description: "Runtime application security testing",
          features: [
            "Live Testing",
            "Penetration Testing",
            "API Testing",
            "Automated Scans",
          ],
          color: "#F97316",
        },
        {
          name: "Source Code Review (SRC)",
          icon: Eye,
          description: "Manual review of application source code",
          features: [
            "Expert Analysis",
            "Security Patterns",
            "Best Practices",
            "Remediation Guidance",
          ],
          color: "#DC2626",
        },
      ],
    },
    {
      id: "assets",
      title: "Assets Security",
      icon: Server,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      borderGradient: "from-green-400/50 via-emerald-500/50 to-teal-600/50",
      services: [
        {
          name: "Patch Management",
          icon: Shield,
          description: "Automated patch deployment and management",
          features: [
            "Vulnerability Scanning",
            "Automated Patching",
            "Testing Environment",
            "Rollback Capabilities",
          ],
          color: "#10B981",
        },
        {
          name: "IT Assets Management (ITAM)",
          icon: Database,
          description: "Complete IT asset lifecycle management",
          features: [
            "Asset Discovery",
            "Inventory Management",
            "License Tracking",
            "Cost Optimization",
          ],
          color: "#059669",
        },
        {
          name: "IT Service Management (ITSM)",
          icon: Activity,
          description: "Streamlined IT service delivery",
          features: [
            "Incident Management",
            "Change Management",
            "Service Catalog",
            "SLA Monitoring",
          ],
          color: "#0D9488",
        },
      ],
    },
    {
      id: "data",
      title: "Data Security",
      icon: Database,
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
      borderGradient: "from-teal-400/50 via-cyan-500/50 to-blue-600/50",
      services: [
        {
          name: "Data Loss Prevention (DLP)",
          icon: Shield,
          description: "Prevent unauthorized data access and leakage",
          features: [
            "Content Inspection",
            "Policy Enforcement",
            "Incident Response",
            "Compliance Reporting",
          ],
          color: "#0891B2",
        },
        {
          name: "Data Classification",
          icon: Database,
          description: "Automated data discovery and classification",
          features: [
            "Sensitive Data Discovery",
            "Labeling",
            "Policy Application",
            "Risk Assessment",
          ],
          color: "#0E7490",
        },
        {
          name: "Digital Rights Management (DRM)",
          icon: Lock,
          description: "Control access to digital content",
          features: [
            "Document Protection",
            "Access Controls",
            "Usage Tracking",
            "Watermarking",
          ],
          color: "#155E75",
        },
        {
          name: "File Integrity Management (FIM)",
          icon: Eye,
          description: "Monitor and protect critical files",
          features: [
            "Real-time Monitoring",
            "Change Detection",
            "Baseline Management",
            "Compliance Reports",
          ],
          color: "#0C4A6E",
        },
        {
          name: "Database Access Monitoring (DAM)",
          icon: Database,
          description: "Monitor and audit database activities",
          features: [
            "Activity Monitoring",
            "Threat Detection",
            "Compliance Reporting",
            "User Behavior Analytics",
          ],
          color: "#1E40AF",
        },
        {
          name: "Encryption and Cryptography",
          icon: Lock,
          description: "Advanced encryption solutions",
          features: [
            "Data Encryption",
            "Key Management",
            "PKI Infrastructure",
            "Crypto Compliance",
          ],
          color: "#3730A3",
        },
      ],
    },
    {
      id: "soc",
      title: "Essentials SOC Solutions",
      icon: Activity,
      gradient: "from-red-400 via-pink-500 to-purple-600",
      borderGradient: "from-red-400/50 via-pink-500/50 to-purple-600/50",
      services: [
        {
          name: "Network Detection and Response (NDR)",
          icon: Network,
          description: "Advanced network threat detection",
          features: [
            "Traffic Analysis",
            "Behavioral Analytics",
            "Threat Hunting",
            "Automated Response",
          ],
          color: "#EF4444",
        },
        {
          name: "Endpoint Detection and Response (EDR)",
          icon: Smartphone,
          description: "Comprehensive endpoint protection",
          features: [
            "Real-time Monitoring",
            "Incident Investigation",
            "Threat Containment",
            "Forensic Analysis",
          ],
          color: "#F97316",
        },
        {
          name: "Extended Detection and Response (XDR)",
          icon: Eye,
          description: "Unified security across all vectors",
          features: [
            "Cross-platform Visibility",
            "Correlated Alerts",
            "Automated Investigation",
            "Unified Response",
          ],
          color: "#8B5CF6",
        },
        {
          name: "Phishing Detection and Response (PDR)",
          icon: Mail,
          description: "Advanced phishing protection",
          features: [
            "Email Analysis",
            "URL Inspection",
            "User Training",
            "Incident Response",
          ],
          color: "#EC4899",
        },
        {
          name: "Security Information and Event Management (SIEM)",
          icon: Activity,
          description: "Centralized security event management",
          features: [
            "Log Aggregation",
            "Correlation Rules",
            "Dashboards",
            "Compliance Reporting",
          ],
          color: "#06B6D4",
        },
        {
          name: "Security Orchestration, Automation and Response (SOAR)",
          icon: Zap,
          description: "Automated security operations",
          features: [
            "Workflow Automation",
            "Playbook Execution",
            "Case Management",
            "Integration Hub",
          ],
          color: "#10B981",
        },
        {
          name: "Vulnerability Management Solution",
          icon: Search,
          description: "Comprehensive vulnerability assessment",
          features: [
            "Asset Discovery",
            "Vulnerability Scanning",
            "Risk Prioritization",
            "Remediation Tracking",
          ],
          color: "#F59E0B",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 12,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen py-24 px-4 relative overflow-hidden bg-gradient-hero-services"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 will-change-transform">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 will-change-transform">
        {/* Page Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* <motion.span
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
            Solutions
          </motion.span> */}

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-cute mb-6"
            style={{
              background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 30%, #E2E8F0 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(255, 255, 255, 0.4)",
              filter: "contrast(1.1) brightness(1.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Comprehensive Cybersecurity Solutions
          </motion.h1>

          <motion.p
            className="text-xl max-w-4xl mx-auto leading-relaxed font-cute-body"
            style={{
              color: "#F1F5F9",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              filter: "contrast(1.1) brightness(1.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            From network security to SOC solutions, discover our complete range
            of cybersecurity services designed to protect your digital
            infrastructure with enterprise-grade security.
          </motion.p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/5 hover:border-white/20 hover:bg-white/8 transition-all duration-500"
              variants={categoryVariants}
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 + 0.5, duration: 0.6 }}
              >
                <div className="relative mr-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 shadow-xl`}
                    style={{
                      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${
                        category.gradient.includes("emerald")
                          ? "rgba(16, 185, 129, 0.3)"
                          : category.gradient.includes("purple")
                          ? "rgba(147, 51, 234, 0.3)"
                          : category.gradient.includes("blue")
                          ? "rgba(59, 130, 246, 0.3)"
                          : category.gradient.includes("amber")
                          ? "rgba(245, 158, 11, 0.3)"
                          : category.gradient.includes("green")
                          ? "rgba(34, 197, 94, 0.3)"
                          : category.gradient.includes("teal")
                          ? "rgba(6, 182, 212, 0.3)"
                          : "rgba(239, 68, 68, 0.3)"
                      }`,
                    }}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </div>

                  {/* Pulse Ring removed per request */}
                </div>

                <div>
                  <h2
                    className="text-3xl md:text-4xl font-cute"
                    style={{
                      background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {category.title}
                  </h2>
                </div>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
              >
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    className="group relative p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20"
                    variants={serviceVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Service Icon */}
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl p-3 mr-4"
                        style={{
                          backgroundColor: `${service.color}20`,
                          border: `1px solid ${service.color}40`,
                          boxShadow: `0 0 15px ${service.color}30`,
                        }}
                      >
                        <service.icon
                          className="w-full h-full"
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3
                        className="text-lg font-cute"
                        style={{
                          background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)`,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textShadow: "0 1px 5px rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {service.name}
                      </h3>
                    </motion.div>

                    {/* Service Description */}
                    <p
                      className="text-sm mb-4 leading-relaxed"
                      style={{
                        color: "#F1F5F9",
                        textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "#E2E8F0" }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 0.8, x: 0 }}
                          transition={{
                            delay:
                              categoryIndex * 0.1 +
                              serviceIndex * 0.05 +
                              featureIndex * 0.02,
                          }}
                        >
                          <Zap
                            className="w-3 h-3 mr-2"
                            style={{ color: service.color }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Effect Arrow */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-4 h-4 text-white/50" />
                    </motion.div>

                    {/* Gradient Border Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                        border: `1px solid ${service.color}30`,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/5"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3
              className="text-3xl md:text-4xl font-cute mb-6"
              style={{
                background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 30%, #E2E8F0 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
            >
              Ready to Secure Your Digital Infrastructure?
            </h3>
            <p
              className="text-xl mb-8 max-w-3xl mx-auto"
              style={{
                color: "#F1F5F9",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Contact our security experts to discuss your specific requirements
              and get a customized solution.
            </p>
            <motion.button
              className="group text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto"
              style={{
                background: `linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #3B82F6 100%)`,
                boxShadow:
                  "0 0 25px rgba(16, 185, 129, 0.6), 0 8px 32px rgba(6, 182, 212, 0.4)",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Expert Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
