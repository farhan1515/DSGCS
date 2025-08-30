import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Award, Globe } from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: Shield,
      label: "Years of Experience",
      value: "15+",
      color: "text-accent-400",
    },
    {
      icon: Users,
      label: "Security Experts",
      value: "100+",
      color: "text-cyber-blue",
    },
    {
      icon: Award,
      label: "Industry Awards",
      value: "25+",
      color: "text-cyber-green",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: "50+",
      color: "text-cyber-purple",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-hero font-bold mb-6 text-cyber-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About ASITLOG
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Leading cybersecurity organization specializing in comprehensive
            managed security services. Serving banks, government departments,
            and private sector clients with cutting-edge threat detection and
            response capabilities.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -10 }}
              >
                <stat.icon
                  className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:animate-pulse`}
                />
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 font-bold mb-6 text-accent-400">
              Our Mission
            </h2>
            <p className="text-body text-gray-300 leading-relaxed">
              To provide world-class cybersecurity solutions that protect
              organizations from evolving digital threats while enabling secure
              digital transformation and business growth.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 font-bold mb-6 text-accent-400">
              Our Vision
            </h2>
            <p className="text-body text-gray-300 leading-relaxed">
              To be the global leader in managed security services, setting new
              standards for threat detection, incident response, and
              cybersecurity excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
