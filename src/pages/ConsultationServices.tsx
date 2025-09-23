import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Shield,
  FileCheck,
  Building,
  Activity,
  Globe,
  Smartphone,
  Eye,
  Database,
  Users,
  Award,
  CheckCircle,
  AlertTriangle,
  Lock,
  Sparkles,
  Zap,
  ArrowRight,
  Target,
  Settings,
  BookOpen,
  UserCheck,
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

const ConsultationServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceCategories: ServiceCategory[] = [
    {
      id: "assessment",
      title: "Assessment Services",
      icon: Search,
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      borderGradient: "from-purple-400/50 via-violet-500/50 to-indigo-600/50",
      services: [
        {
          name: "GAP Assessment as per Framework Compliances",
          icon: FileCheck,
          description: "Comprehensive assessment against industry frameworks",
          features: [
            "NCA Compliance",
            "SAMA Regulations",
            "ISO Standards",
            "CITC Requirements",
          ],
          color: "#9333EA",
        },
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastructure Security Services",
      icon: Building,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      borderGradient: "from-emerald-400/50 via-teal-500/50 to-cyan-600/50",
      services: [
        {
          name: "High-Level Secure Architecture Review",
          icon: Building,
          description: "Strategic security architecture evaluation",
          features: [
            "Architecture Analysis",
            "Security Design",
            "Risk Assessment",
            "Recommendations",
          ],
          color: "#10B981",
        },
        {
          name: "Low-Level Secure Configuration Review",
          icon: Settings,
          description: "Detailed configuration security assessment",
          features: [
            "Configuration Analysis",
            "Hardening Guidelines",
            "Compliance Checks",
            "Documentation",
          ],
          color: "#06B6D4",
        },
        {
          name: "Firewall Rules Review",
          icon: Shield,
          description: "Comprehensive firewall policy analysis",
          features: [
            "Rule Optimization",
            "Policy Validation",
            "Security Gaps",
            "Performance Impact",
          ],
          color: "#0891B2",
        },
        {
          name: "Vulnerability Assessment",
          icon: Search,
          description: "Systematic vulnerability identification",
          features: [
            "Asset Discovery",
            "Vulnerability Scanning",
            "Risk Prioritization",
            "Remediation Plan",
          ],
          color: "#0E7490",
        },
        {
          name: "Compromise Assessments",
          icon: AlertTriangle,
          description: "Detection of existing security breaches",
          features: [
            "Threat Hunting",
            "Forensic Analysis",
            "IOC Identification",
            "Incident Response",
          ],
          color: "#F59E0B",
        },
        {
          name: "Minimum Baseline Security Standard Development",
          icon: FileCheck,
          description: "Custom security standards creation",
          features: [
            "Standard Development",
            "Policy Creation",
            "Implementation Guide",
            "Compliance Mapping",
          ],
          color: "#8B5CF6",
        },
        {
          name: "Infrastructure Penetration Testing",
          icon: Target,
          description: "Simulated attacks on infrastructure",
          features: [
            "Network Testing",
            "System Exploitation",
            "Privilege Escalation",
            "Detailed Reporting",
          ],
          color: "#EF4444",
        },
        {
          name: "Red Teaming",
          icon: Users,
          description: "Advanced adversarial simulation",
          features: [
            "Multi-vector Attacks",
            "Social Engineering",
            "Physical Security",
            "Executive Briefing",
          ],
          color: "#DC2626",
        },
      ],
    },
    {
      id: "soc",
      title: "Security Operation Services",
      icon: Activity,
      gradient: "from-blue-400 via-sky-500 to-indigo-600",
      borderGradient: "from-blue-400/50 via-sky-500/50 to-indigo-600/50",
      services: [
        {
          name: "Security Operations Assessment & Roadmap Design",
          icon: Activity,
          description: "SOC maturity assessment and strategic planning",
          features: [
            "Capability Assessment",
            "Gap Analysis",
            "Roadmap Development",
            "Resource Planning",
          ],
          color: "#3B82F6",
        },
        {
          name: "SOC Framework Development",
          icon: Building,
          description: "Complete SOC framework establishment",
          features: [
            "Process Design",
            "Tool Selection",
            "Workflow Creation",
            "KPI Definition",
          ],
          color: "#2563EB",
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
          name: "Web Application Vulnerability Assessment & Penetration Testing",
          icon: Globe,
          description: "Comprehensive web application security testing",
          features: [
            "OWASP Testing",
            "Business Logic Flaws",
            "Authentication Testing",
            "Session Management",
          ],
          color: "#F59E0B",
        },
        {
          name: "Mobile Application Penetration Testing",
          icon: Smartphone,
          description: "Mobile app security assessment",
          features: [
            "Static Analysis",
            "Dynamic Testing",
            "Runtime Analysis",
            "Platform Security",
          ],
          color: "#F97316",
        },
        {
          name: "Software Source Code Review",
          icon: Eye,
          description: "Manual code security review",
          features: [
            "Code Analysis",
            "Vulnerability Detection",
            "Best Practices",
            "Secure Coding",
          ],
          color: "#EA580C",
        },
      ],
    },
    {
      id: "compliance",
      title: "Compliance Services",
      icon: Award,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      borderGradient: "from-green-400/50 via-emerald-500/50 to-teal-600/50",
      services: [
        {
          name: "International Standards/Frameworks",
          icon: Globe,
          description: "Global compliance standards implementation",
          features: ["ISO 27001", "NIST Framework", "CIS Controls", "COBIT"],
          color: "#22C55E",
        },
        {
          name: "Regional Frameworks/Regulations",
          icon: Building,
          description: "Local regulatory compliance",
          features: [
            "Regional Laws",
            "Industry Specific",
            "Data Protection",
            "Financial Regulations",
          ],
          color: "#16A34A",
        },
      ],
    },
    {
      id: "isms",
      title: "Information Security Management System (ISMS)",
      icon: Lock,
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
      borderGradient: "from-teal-400/50 via-cyan-500/50 to-blue-600/50",
      services: [
        {
          name: "Gap Analysis",
          icon: Search,
          description: "ISMS readiness assessment",
          features: [
            "Current State Analysis",
            "Requirements Mapping",
            "Gap Identification",
            "Action Plan",
          ],
          color: "#0891B2",
        },
        {
          name: "Developing the Information Security Risk Management Methodology",
          icon: AlertTriangle,
          description: "Risk management framework creation",
          features: [
            "Risk Assessment",
            "Risk Treatment",
            "Methodology Design",
            "Process Documentation",
          ],
          color: "#0E7490",
        },
        {
          name: "Development of ISMS Requirements",
          icon: FileCheck,
          description: "ISMS implementation requirements",
          features: [
            "Scope Definition",
            "Control Selection",
            "Implementation Plan",
            "Resource Allocation",
          ],
          color: "#155E75",
        },
        {
          name: "Development/Reviewing and updating of Information Security Policies and Procedures",
          icon: BookOpen,
          description: "Policy framework development",
          features: [
            "Policy Development",
            "Procedure Creation",
            "Review Process",
            "Update Management",
          ],
          color: "#0C4A6E",
        },
        {
          name: "Conducting Information Security Awareness Sessions",
          icon: Users,
          description: "Employee security awareness training",
          features: [
            "Training Programs",
            "Awareness Campaigns",
            "Knowledge Testing",
            "Behavioral Change",
          ],
          color: "#1E40AF",
        },
        {
          name: "ISMS Internal Audit",
          icon: CheckCircle,
          description: "Internal ISMS audit services",
          features: [
            "Audit Planning",
            "Evidence Collection",
            "Non-conformity Identification",
            "Audit Reporting",
          ],
          color: "#1D4ED8",
        },
        {
          name: "Annual ISMS Maintenance Visits",
          icon: Settings,
          description: "Ongoing ISMS maintenance support",
          features: [
            "Annual Reviews",
            "Continuous Improvement",
            "Updates Implementation",
            "Compliance Monitoring",
          ],
          color: "#2563EB",
        },
      ],
    },
    {
      id: "data",
      title: "Data Classification & Protection",
      icon: Database,
      gradient: "from-pink-400 via-rose-500 to-red-600",
      borderGradient: "from-pink-400/50 via-rose-500/50 to-red-600/50",
      services: [
        {
          name: "Data Classification Framework Development",
          icon: Database,
          description: "Comprehensive data classification system",
          features: [
            "Classification Scheme",
            "Labeling System",
            "Handling Procedures",
            "Retention Policies",
          ],
          color: "#EC4899",
        },
        {
          name: "Data Assessment",
          icon: Search,
          description: "Data discovery and assessment",
          features: [
            "Data Discovery",
            "Sensitivity Analysis",
            "Risk Assessment",
            "Classification Assignment",
          ],
          color: "#E11D48",
        },
        {
          name: "Data Classification",
          icon: FileCheck,
          description: "Data classification implementation",
          features: [
            "Automated Classification",
            "Manual Review",
            "Policy Enforcement",
            "Monitoring",
          ],
          color: "#BE185D",
        },
        {
          name: "Training and Communication",
          icon: Users,
          description: "Data handling training programs",
          features: [
            "User Training",
            "Communication Plan",
            "Awareness Programs",
            "Compliance Monitoring",
          ],
          color: "#9D174D",
        },
      ],
    },
    {
      id: "business",
      title: "Business Continuity",
      icon: Activity,
      gradient: "from-indigo-400 via-purple-500 to-pink-600",
      borderGradient: "from-indigo-400/50 via-purple-500/50 to-pink-600/50",
      services: [
        {
          name: "Establishing BCM Governance",
          icon: Building,
          description: "Business continuity management governance",
          features: [
            "Governance Structure",
            "Roles & Responsibilities",
            "Oversight Framework",
            "Reporting",
          ],
          color: "#6366F1",
        },
        {
          name: "Risk Assessment and Business Impact Analysis",
          icon: AlertTriangle,
          description: "Comprehensive risk and impact assessment",
          features: [
            "Risk Identification",
            "Impact Analysis",
            "Priority Assessment",
            "Recovery Objectives",
          ],
          color: "#8B5CF6",
        },
        {
          name: "Business Continuity Strategy",
          icon: Target,
          description: "Strategic continuity planning",
          features: [
            "Strategy Development",
            "Option Analysis",
            "Resource Planning",
            "Investment Planning",
          ],
          color: "#A855F7",
        },
        {
          name: "BC Plans Development",
          icon: FileCheck,
          description: "Business continuity plan creation",
          features: [
            "Plan Development",
            "Procedure Documentation",
            "Contact Lists",
            "Resource Allocation",
          ],
          color: "#C084FC",
        },
        {
          name: "BCP Walkthrough Testing",
          icon: CheckCircle,
          description: "Business continuity plan testing",
          features: [
            "Test Planning",
            "Walkthrough Exercises",
            "Gap Identification",
            "Improvement Plans",
          ],
          color: "#D8B4FE",
        },
        {
          name: "Pre-certification (Internal Audit)",
          icon: Eye,
          description: "Internal audit before certification",
          features: [
            "Readiness Assessment",
            "Gap Analysis",
            "Corrective Actions",
            "Documentation Review",
          ],
          color: "#EC4899",
        },
        {
          name: "Certificate audit handholding",
          icon: Award,
          description: "Certification audit support",
          features: [
            "Audit Preparation",
            "Auditor Support",
            "Evidence Preparation",
            "Issue Resolution",
          ],
          color: "#F472B6",
        },
        {
          name: "Annual Maintenance Visits (Second and Third Year)",
          icon: Settings,
          description: "Ongoing maintenance support",
          features: [
            "Annual Reviews",
            "Plan Updates",
            "Training Refresher",
            "Compliance Monitoring",
          ],
          color: "#FBBF24",
        },
      ],
    },
    {
      id: "tprm",
      title: "Third Party Risk Management (TPRM)",
      icon: Users,
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      borderGradient: "from-yellow-400/50 via-orange-500/50 to-red-600/50",
      services: [
        {
          name: "Establishing TPRM Governance",
          icon: Building,
          description: "Third-party risk governance framework",
          features: [
            "Governance Structure",
            "Risk Appetite",
            "Oversight Framework",
            "Escalation Procedures",
          ],
          color: "#F59E0B",
        },
        {
          name: "Policies and Standards",
          icon: FileCheck,
          description: "TPRM policy framework",
          features: [
            "Policy Development",
            "Standards Creation",
            "Procedure Documentation",
            "Guidelines",
          ],
          color: "#F97316",
        },
        {
          name: "Processes",
          icon: Settings,
          description: "TPRM process implementation",
          features: [
            "Process Design",
            "Workflow Creation",
            "Automation",
            "Integration",
          ],
          color: "#EA580C",
        },
        {
          name: "Technology Assessment",
          icon: Search,
          description: "TPRM technology evaluation",
          features: [
            "Tool Assessment",
            "Technology Selection",
            "Implementation Planning",
            "Integration",
          ],
          color: "#DC2626",
        },
        {
          name: "Metrics and Reporting",
          icon: Activity,
          description: "TPRM metrics and reporting framework",
          features: [
            "KPI Development",
            "Dashboard Creation",
            "Reporting Automation",
            "Performance Monitoring",
          ],
          color: "#B91C1C",
        },
      ],
    },
    {
      id: "vciso",
      title: "V. CISO",
      icon: UserCheck,
      gradient: "from-gray-400 via-slate-500 to-gray-600",
      borderGradient: "from-gray-400/50 via-slate-500/50 to-gray-600/50",
      services: [
        {
          name: "Virtual CISO Service",
          icon: UserCheck,
          description:
            "Comprehensive virtual CISO services customized to organizational needs",
          features: [
            "Strategic Planning",
            "Risk Management",
            "Compliance Oversight",
            "Incident Response",
            "Team Leadership",
            "Board Reporting",
          ],
          color: "#6B7280",
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
          className="absolute top-1/3 left-1/5 w-80 h-80 border border-white/15 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-60 h-60 border border-white/10 rounded-full"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 25,
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
              background: `linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)`,
              borderColor: "rgba(147, 51, 234, 0.3)",
              color: "#9333EA",
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Consultation Services
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
            Expert Cybersecurity Consulting
          </motion.h1>

          <motion.p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{
              color: "#F1F5F9",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              filter: "contrast(1.1) brightness(1.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            From security assessments to compliance frameworks, our expert
            consultants provide comprehensive guidance to strengthen your
            cybersecurity posture and ensure regulatory compliance.
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
                        category.gradient.includes("purple")
                          ? "rgba(147, 51, 234, 0.3)"
                          : category.gradient.includes("emerald")
                          ? "rgba(16, 185, 129, 0.3)"
                          : category.gradient.includes("blue")
                          ? "rgba(59, 130, 246, 0.3)"
                          : category.gradient.includes("amber")
                          ? "rgba(245, 158, 11, 0.3)"
                          : category.gradient.includes("green")
                          ? "rgba(34, 197, 94, 0.3)"
                          : category.gradient.includes("teal")
                          ? "rgba(6, 182, 212, 0.3)"
                          : category.gradient.includes("pink")
                          ? "rgba(236, 72, 153, 0.3)"
                          : category.gradient.includes("indigo")
                          ? "rgba(99, 102, 241, 0.3)"
                          : category.gradient.includes("yellow")
                          ? "rgba(245, 158, 11, 0.3)"
                          : "rgba(107, 114, 128, 0.3)"
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
                    </motion.div>

                    <h3
                      className="text-lg font-cute mb-3"
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
              Ready to Enhance Your Security Posture?
            </h3>
            <p
              className="text-xl mb-8 max-w-3xl mx-auto"
              style={{
                color: "#F1F5F9",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Get expert consultation tailored to your specific security needs
              and compliance requirements.
            </p>
            <motion.button
              className="group text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto"
              style={{
                background: `linear-gradient(135deg, #9333EA 0%, #A855F7 50%, #C084FC 100%)`,
                boxShadow:
                  "0 0 25px rgba(147, 51, 234, 0.6), 0 8px 32px rgba(168, 85, 247, 0.4)",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationServices;
