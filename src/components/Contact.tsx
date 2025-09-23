import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Printer,
  ArrowRight,
  Clock,
  Globe,
  Shield,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@dsgcs.com",
      color: "from-primary-900 to-primary-800",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+966 11 4340001",
      color: "from-primary-800 to-primary-700",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Al-Dabbab Street, Riyadh Saudi Arabia",
      color: "from-primary-600 to-purple-600",
    },
  ];

  const features = [
    { icon: Clock, text: "24/7 Support Available" },
    { icon: Globe, text: "Global Security Coverage" },
    { icon: Shield, text: "Certified Security Experts" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 relative overflow-hidden bg-gradient-contact"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-purple-500/20 text-purple-600 rounded-full text-sm font-semibold mb-4 border border-purple-600/20"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            Get In Touch
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cute mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Secure
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's start building your secure and scalable future — together.
            Connect with our cybersecurity experts to discuss your security
            needs.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* DSGCS Logo Background */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10">
            <img
              src="/images/dsgcs.png"
              alt="DSGCS Logo"
              className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain"
            />
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information */}
              <div>
                <motion.h3
                  className="text-3xl md:text-4xl font-cute mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Let's Start Protecting Your Digital Future
                </motion.h3>

                <motion.p
                  className="text-gray-300 mb-8 text-lg leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Our team of cybersecurity professionals is ready to help you
                  build a robust defense against evolving digital threats.
                  Contact us today for a consultation.
                </motion.p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 hover-group p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.8 }}
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <contact.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          {contact.label}
                        </p>
                        <p className="text-white font-semibold hover-group-hover:text-gray-200 transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <feature.icon className="w-5 h-5 text-green-400" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* CTA Section */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.3, duration: 0.8 }}
                >
                  <h4 className="text-2xl font-cute text-white mb-4">
                    Start Your Security Journey
                  </h4>
                  <p className="text-gray-300 mb-8 font-cute-body">
                    Get a free consultation and discover how we can protect your
                    business with our advanced cybersecurity solutions.
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.7, duration: 0.8 }}
                >
                  <motion.button
                    className="group w-full lg:w-auto bg-gradient-cta text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>

                  <motion.button
                    className="group w-full lg:w-auto glass-card px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white">Schedule a Consultation</span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
