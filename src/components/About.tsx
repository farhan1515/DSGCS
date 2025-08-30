import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Shield, Award, Clock } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Clock,
      number: 15,
      suffix: "+",
      label: "Years of Expertise",
      color: "from-[#ff3333] to-[#ff6b35]",
    },
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Satisfied Clients",
      color: "from-[#3b82f6] to-[#1e40af]",
    },
    {
      icon: Award,
      number: 20,
      suffix: "+",
      label: "Tier One Vendors",
      color: "from-[#10b981] to-[#059669]",
    },
    {
      icon: Shield,
      number: 24,
      suffix: "/7",
      label: "Cybersecurity Protection",
      color: "from-[#8b5cf6] to-[#7c3aed]",
    },
  ];

  const AnimatedCounter = ({
    number,
    suffix,
    inView,
  }: {
    number: number;
    suffix: string;
    inView: boolean;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * number));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(number);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [inView, number]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#ff3333]/20 to-[#ff6b35]/20 text-[#ff3333] rounded-full text-sm font-semibold mb-4 border border-[#ff3333]/20"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            About ASITLOG
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Protecting Your Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff3333] to-[#ff6b35] bg-clip-text text-transparent">
              Future Since 2009
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a leading cybersecurity company with over a decade of
            experience in protecting businesses from evolving digital threats.
            Our comprehensive solutions and expert team ensure your organization
            stays secure in an increasingly connected world.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl text-center group hover:scale-105 hover:shadow-2xl hover:shadow-white/10 hover:border-white/30 transition-all duration-500 border border-white/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Number */}
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  delay: index * 0.2 + 0.8,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <AnimatedCounter
                  number={stat.number}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </motion.div>

              {/* Label */}
              <p className="text-gray-400 font-medium text-sm leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
