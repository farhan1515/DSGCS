import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Activity,
  Target,
  UserCheck,
  Sparkles,
  Zap,
  Brain,
  Globe,
  Clock,
  Star,
  Video,
} from "lucide-react";

interface ServiceItem {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  duration?: string;
  level?: string;
  format?: string;
}

const CybersecurityAcademy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const academyServices: ServiceItem[] = [
    {
      name: "Material Development",
      icon: BookOpen,
      description:
        "Custom cybersecurity training materials and curriculum development",
      features: [
        "Custom Curriculum",
        "Interactive Content",
        "Assessment Tools",
        "Learning Modules",
        "Best Practices",
        "Industry Standards",
      ],
      color: "#3B82F6",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      duration: "Ongoing",
      level: "All Levels",
      format: "Digital & Print",
    },
    {
      name: "Bootcamps/Programs",
      icon: GraduationCap,
      description:
        "Intensive cybersecurity bootcamps and comprehensive training programs",
      features: [
        "Hands-on Training",
        "Real-world Scenarios",
        "Expert Instructors",
        "Certification Prep",
        "Career Guidance",
        "Project-based Learning",
      ],
      color: "#10B981",
      gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
      duration: "3-6 Months",
      level: "Beginner to Advanced",
      format: "In-person & Online",
    },
    {
      name: "Public Courses",
      icon: Users,
      description:
        "Open enrollment courses for cybersecurity professionals and enthusiasts",
      features: [
        "Open Enrollment",
        "Flexible Scheduling",
        "Group Learning",
        "Networking Opportunities",
        "Industry Insights",
        "Practical Labs",
      ],
      color: "#8B5CF6",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      duration: "1-4 Weeks",
      level: "Intermediate",
      format: "Classroom & Virtual",
    },
    {
      name: "Official Vendor Trainings",
      icon: Award,
      description:
        "Authorized training programs from leading cybersecurity vendors",
      features: [
        "Vendor Certified",
        "Official Materials",
        "Expert Trainers",
        "Certification Paths",
        "Latest Technologies",
        "Lab Access",
      ],
      color: "#F59E0B",
      gradient: "from-amber-400 via-amber-500 to-amber-600",
      duration: "3-5 Days",
      level: "Professional",
      format: "Authorized Centers",
    },
    {
      name: "Closed Courses",
      icon: Target,
      description:
        "Private, customized training courses for organizations and teams",
      features: [
        "Custom Content",
        "Private Sessions",
        "Team Building",
        "Organizational Focus",
        "Tailored Curriculum",
        "Executive Briefings",
      ],
      color: "#EF4444",
      gradient: "from-red-400 via-red-500 to-red-600",
      duration: "1-2 Weeks",
      level: "Customized",
      format: "On-site & Remote",
    },
    {
      name: "Awareness Programs and Events",
      icon: Activity,
      description: "Security awareness campaigns and educational events",
      features: [
        "Security Awareness",
        "Phishing Simulations",
        "Interactive Events",
        "Compliance Training",
        "Risk Communication",
        "Behavioral Change",
      ],
      color: "#06B6D4",
      gradient: "from-cyan-400 via-cyan-500 to-cyan-600",
      duration: "Ongoing",
      level: "All Staff",
      format: "Multiple Formats",
    },
    {
      name: "Mentoring",
      icon: UserCheck,
      description: "One-on-one mentoring and career guidance in cybersecurity",
      features: [
        "Personal Guidance",
        "Career Planning",
        "Skill Development",
        "Industry Insights",
        "Network Building",
        "Goal Setting",
      ],
      color: "#EC4899",
      gradient: "from-pink-400 via-pink-500 to-pink-600",
      duration: "3-12 Months",
      level: "All Levels",
      format: "1-on-1 Sessions",
    },
  ];



  return (
    <div
      ref={ref}
      className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-gradient-contact"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/6 left-1/8 w-64 h-64 border border-white/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/8 w-48 h-48 border border-white/15 rounded-full"
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full"
          animate={{
            scale: [1.2, 1.8, 1.2],
            rotate: [0, 360],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)`,
              borderColor: "rgba(59, 130, 246, 0.3)",
              color: "#3B82F6",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Cybersecurity Academy
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
            Elevate Your Cybersecurity Skills
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
            Comprehensive cybersecurity education and training programs designed
            to build expertise, advance careers, and strengthen organizational
            security capabilities.
          </motion.p>
        </motion.div>

        {/* Academy Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {academyServices.map((service, index) => (
            <motion.div
              key={service.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative h-full p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:-translate-y-3">
                {/* Gradient Border on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, transparent)`,
                    border: `1px solid ${service.color}30`,
                  }}
                />

                {/* Service Header */}
                <div
                  className="relative mb-6 flex flex-col items-center text-center"
                >
                  <service.icon
                    className="w-16 h-16 mb-4"
                    style={{ color: service.color }}
                  />

                  {/* Pulse Ring removed per request */}

                  <h3
                    className="text-2xl font-cute"
                    style={{
                      background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {service.name}
                  </h3>
                </div>

                {/* Service Info */}
                <div className="space-y-4 mb-6">
                  <p
                    className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      color: "#F1F5F9",
                      textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {service.duration && (
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                        <div className="flex items-center">
                          <Clock
                            className="w-3 h-3 mr-2"
                            style={{ color: service.color }}
                          />
                          <span style={{ color: "#E2E8F0" }}>Duration</span>
                        </div>
                        <span style={{ color: "#F8FAFC" }}>
                          {service.duration}
                        </span>
                      </div>
                    )}
                    {service.level && (
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                        <div className="flex items-center">
                          <Star
                            className="w-3 h-3 mr-2"
                            style={{ color: service.color }}
                          />
                          <span style={{ color: "#E2E8F0" }}>Level</span>
                        </div>
                        <span style={{ color: "#F8FAFC" }}>
                          {service.level}
                        </span>
                      </div>
                    )}
                    {service.format && (
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                        <div className="flex items-center">
                          <Video
                            className="w-3 h-3 mr-2"
                            style={{ color: service.color }}
                          />
                          <span style={{ color: "#E2E8F0" }}>Format</span>
                        </div>
                        <span style={{ color: "#F8FAFC" }}>
                          {service.format}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="flex items-center text-xs opacity-75 group-hover:opacity-100 transition-opacity duration-300"
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

                {/* Action Button removed per request */}

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Brain className="w-5 h-5 text-white/30" />
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Why Choose Our Academy Section - simplified */}
        <motion.div
          className="p-2 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-cute mb-6"
              style={{
                background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 30%, #E2E8F0 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
            >
              Why Choose DSGCS Academy?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Expert Instructors",
                description: "Industry veterans with real-world experience",
                color: "#F59E0B",
              },
              {
                icon: Globe,
                title: "Global Recognition",
                description: "Internationally recognized certifications",
                color: "#10B981",
              },
              {
                icon: Users,
                title: "Hands-on Learning",
                description: "Practical labs and real-world scenarios",
                color: "#3B82F6",
              },
              {
                icon: Target,
                title: "Career Support",
                description: "Job placement assistance and networking",
                color: "#8B5CF6",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <benefit.icon
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: benefit.color }}
                />
                <h3
                  className="text-lg font-cute mb-2"
                  style={{
                    background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "#F1F5F9",
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA removed per request */}
      </div>
    </div>
  );
};

export default CybersecurityAcademy;
