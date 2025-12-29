import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Activity,
  Network,
  GraduationCap,
  Key,
  Shield,
  Database,
  Globe,
  Smartphone,
  Palette,
  Code,
  Settings,
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  Target,
  Eye,
  Monitor,
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

const ProfessionalServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceCategories: ServiceCategory[] = [
    {
      id: "security-implementation",
      title: "Security Solutions Implementation",
      icon: Shield,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      borderGradient: "from-emerald-400/50 via-teal-500/50 to-cyan-600/50",
      services: [
        {
          name: "NDR, EDR and Email Security, Endpoints",
          icon: Activity,
          description:
            "Complete implementation of detection and response solutions",
          features: [
            "Network Detection",
            "Endpoint Protection",
            "Email Security",
            "Response Automation",
          ],
          color: "#10B981",
        },
        {
          name: "Network Security, NAC",
          icon: Network,
          description:
            "Comprehensive network security and access control implementation",
          features: [
            "Firewall Deployment",
            "Network Segmentation",
            "Access Control",
            "Monitoring",
          ],
          color: "#06B6D4",
        },
        {
          name: "Awareness Program and Events",
          icon: GraduationCap,
          description: "Security awareness training and event management",
          features: [
            "Training Programs",
            "Phishing Simulations",
            "Security Events",
            "Compliance Training",
          ],
          color: "#8B5CF6",
        },
        {
          name: "IAM, PAM, DRM and FIM",
          icon: Key,
          description: "Identity and access management solutions",
          features: [
            "Identity Management",
            "Privileged Access",
            "Digital Rights",
            "File Integrity",
          ],
          color: "#3B82F6",
        },
        {
          name: "Application Security: WAF- Web Application",
          icon: Shield,
          description: "Web application firewall and security implementation",
          features: [
            "WAF Deployment",
            "API Protection",
            "DDoS Mitigation",
            "Security Policies",
          ],
          color: "#F59E0B",
        },
      ],
    },
    {
      id: "database-security",
      title: "Database Security",
      icon: Database,
      gradient: "from-blue-400 via-sky-500 to-indigo-600",
      borderGradient: "from-blue-400/50 via-sky-500/50 to-indigo-600/50",
      services: [
        {
          name: "DAM Solution",
          icon: Database,
          description: "Database Activity Monitoring solution implementation",
          features: [
            "Real-time Monitoring",
            "Compliance Reporting",
            "Threat Detection",
            "User Behavior Analytics",
          ],
          color: "#3B82F6",
        },
      ],
    },
    {
      id: "data-protection",
      title: "Data Protection and Privacy",
      icon: Shield,
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      borderGradient: "from-purple-400/50 via-violet-500/50 to-indigo-600/50",
      services: [
        {
          name: "DLP",
          icon: Shield,
          description: "Data Loss Prevention solution implementation",
          features: [
            "Content Inspection",
            "Policy Enforcement",
            "Incident Response",
            "Compliance Reporting",
          ],
          color: "#9333EA",
        },
        {
          name: "Data Classification",
          icon: Target,
          description: "Automated data classification and labeling",
          features: [
            "Sensitive Data Discovery",
            "Automated Labeling",
            "Policy Application",
            "Risk Assessment",
          ],
          color: "#A855F7",
        },
        {
          name: "Data Masking & Labeling",
          icon: Eye,
          description: "Data masking and labeling solutions",
          features: [
            "Dynamic Masking",
            "Static Masking",
            "Label Management",
            "Privacy Protection",
          ],
          color: "#C084FC",
        },
      ],
    },
    {
      id: "web-development",
      title: "Web Design & Development",
      icon: Globe,
      gradient: "from-amber-400 via-orange-500 to-red-600",
      borderGradient: "from-amber-400/50 via-orange-500/50 to-red-600/50",
      services: [
        {
          name: "Custom Website Design",
          icon: Palette,
          description: "Bespoke website design tailored to your brand",
          features: [
            "UI/UX Design",
            "Brand Integration",
            "Responsive Design",
            "User Experience",
          ],
          color: "#F59E0B",
        },
        {
          name: "Responsive Web Development",
          icon: Monitor,
          description: "Modern responsive web development services",
          features: [
            "Mobile-First Design",
            "Cross-Browser Support",
            "Performance Optimization",
            "Accessibility",
          ],
          color: "#F97316",
        },
        {
          name: "CMS Integration (WordPress, Webflow, Shopify)",
          icon: Settings,
          description: "Content management system integration and setup",
          features: [
            "WordPress Development",
            "Webflow Design",
            "Shopify E-commerce",
            "Custom Plugins",
          ],
          color: "#EA580C",
        },
        {
          name: "E-commerce Development",
          icon: Globe,
          description: "Complete e-commerce solution development",
          features: [
            "Online Store Setup",
            "Payment Integration",
            "Inventory Management",
            "Order Processing",
          ],
          color: "#DC2626",
        },
        {
          name: "UI/UX Design",
          icon: Palette,
          description: "User interface and experience design services",
          features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Design Systems",
          ],
          color: "#B91C1C",
        },
        {
          name: "Website Maintenance & Optimization",
          icon: Settings,
          description:
            "Ongoing website maintenance and performance optimization",
          features: [
            "Regular Updates",
            "Security Patches",
            "Performance Tuning",
            "Backup Management",
          ],
          color: "#991B1B",
        },
        {
          name: "SEO & Performance Enhancements",
          icon: Search,
          description:
            "Search engine optimization and performance improvements",
          features: [
            "Technical SEO",
            "Content Optimization",
            "Speed Optimization",
            "Analytics Setup",
          ],
          color: "#7F1D1D",
        },
      ],
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      icon: Smartphone,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      borderGradient: "from-green-400/50 via-emerald-500/50 to-teal-600/50",
      services: [
        {
          name: "Native App Development (iOS & Android)",
          icon: Smartphone,
          description:
            "Native mobile application development for iOS and Android",
          features: [
            "iOS Development",
            "Android Development",
            "Platform Optimization",
            "App Store Deployment",
          ],
          color: "#22C55E",
        },
        {
          name: "Cross-Platform Development (Flutter, React Native)",
          icon: Code,
          description: "Cross-platform mobile app development solutions",
          features: [
            "Flutter Development",
            "React Native",
            "Code Reusability",
            "Multi-Platform Support",
          ],
          color: "#16A34A",
        },
        {
          name: "Mobile UI/UX Design",
          icon: Palette,
          description: "Mobile-first user interface and experience design",
          features: [
            "Mobile UI Design",
            "User Experience",
            "Interaction Design",
            "Prototyping",
          ],
          color: "#15803D",
        },
        {
          name: "App Store Optimization (ASO)",
          icon: Target,
          description: "App store optimization for better visibility",
          features: [
            "Keyword Optimization",
            "App Store Listing",
            "Review Management",
            "Conversion Optimization",
          ],
          color: "#166534",
        },
        {
          name: "Mobile App Maintenance & Updates",
          icon: Settings,
          description: "Ongoing mobile app maintenance and feature updates",
          features: [
            "Bug Fixes",
            "Feature Updates",
            "OS Compatibility",
            "Performance Monitoring",
          ],
          color: "#14532D",
        },
      ],
    },
  ];



  return (
    <div
      ref={ref}
      className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-gradient-hero-services"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 will-change-transform">
        <motion.div
          className="absolute top-1/5 left-1/6 w-72 h-72 border border-white/15 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/5 right-1/6 w-56 h-56 border border-white/10 rounded-full"
          animate={{
            scale: [1.4, 1, 1.4],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/8 rounded-full"
          animate={{
            scale: [1.2, 1.6, 1.2],
            rotate: [0, 360],
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
              background: `linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)`,
              borderColor: "rgba(245, 158, 11, 0.3)",
              color: "#F59E0B",
              boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Services
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
            Implementation & Development Services
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
            From security solution implementation to cutting-edge web and mobile
            development, our professional services bring your cybersecurity and
            digital projects to life.
          </motion.p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/5 hover:border-white/20 hover:bg-white/8 transition-all duration-500"
            >
              {/* Category Header */}
              <div
                className="flex items-center mb-8"
              >
                <div className="relative mr-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 shadow-xl`}
                    style={{
                      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${
                        category.gradient.includes("emerald")
                          ? "rgba(16, 185, 129, 0.3)"
                          : category.gradient.includes("blue")
                          ? "rgba(59, 130, 246, 0.3)"
                          : category.gradient.includes("purple")
                          ? "rgba(147, 51, 234, 0.3)"
                          : category.gradient.includes("amber")
                          ? "rgba(245, 158, 11, 0.3)"
                          : "rgba(34, 197, 94, 0.3)"
                      }`,
                    }}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </div>

                  {/* Pulse Ring removed per request */}
                </div>

                <div>
                  <h2
                    id={category.id}
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
              </div>

              {/* Services Grid */}
              <div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className="group relative p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20"
                  >
                    {/* Service Icon */}
                    <div
                      className="flex items-center mb-4"
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
                    </div>

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
                        <div
                          key={feature}
                          className="flex items-center text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "#E2E8F0" }}
                        >
                          <Zap
                            className="w-3 h-3 mr-2"
                            style={{ color: service.color }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>



                    {/* Gradient Border Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                        border: `1px solid ${service.color}30`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
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
              Ready to Bring Your Project to Life?
            </h3>
            <p
              className="text-xl mb-8 max-w-3xl mx-auto"
              style={{
                color: "#F1F5F9",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Partner with our expert team to implement security solutions or
              develop your next digital project.
            </p>
            <motion.button
              className="group text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto"
              style={{
                background: `linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EA580C 100%)`,
                boxShadow:
                  "0 0 25px rgba(245, 158, 11, 0.6), 0 8px 32px rgba(249, 115, 22, 0.4)",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default ProfessionalServices;
