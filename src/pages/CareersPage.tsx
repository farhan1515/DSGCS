import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior Security Analyst",
      department: "SOC Operations",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Lead threat detection and incident response activities in our 24/7 SOC environment.",
    },
    {
      title: "Cybersecurity Consultant",
      department: "Professional Services",
      location: "Multiple Locations",
      type: "Full-time",
      description:
        "Provide expert cybersecurity consulting to enterprise clients across various industries.",
    },
    {
      title: "Penetration Tester",
      department: "Red Team",
      location: "Remote",
      type: "Full-time",
      description:
        "Conduct comprehensive security assessments and vulnerability testing for client environments.",
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
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Be part of the next generation of cybersecurity professionals
            protecting organizations worldwide from evolving digital threats.
          </motion.p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <h3 className="text-h3 font-bold text-accent-400 group-hover:text-cyber-blue transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <motion.button
                  className="bg-gradient-accent text-white px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CareersPage;
