import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Globe,
  Code,
  Lock,
  Users,
  Zap,
  Award,
} from "lucide-react";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-cute mb-4">
              <span className="bg-gradient-to-r from-accent-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-blue-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-cute text-accent-400">
              Digital Security Gateway Consulting Services
            </h2>
            <p className="text-lg md:text-xl font-cute-body text-text-secondary max-w-3xl mx-auto">
              Securing Tomorrow's Digital Landscape Today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-cute text-accent-400 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg font-cute-body text-text-secondary leading-relaxed">
                  To achieve the highest level of cybersecurity while keeping it
                  simple and reliable.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-cute text-blue-400 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg font-cute-body text-text-secondary leading-relaxed">
                  To empower businesses through secure, intelligent, and use of
                  top most standard designed technology.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative md:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-cute text-emerald-400 mb-4">
                  Our Values
                </h3>
                <p className="text-lg font-cute-body text-text-secondary leading-relaxed">
                  Excellence, Innovation, and Integrity in every security
                  solution we deliver.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are - Interactive Story Cards */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-cute text-accent-400 mb-4">
              Who We Are
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-400 to-blue-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Story Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-accent-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cute text-accent-400 mb-3">
                        Global Innovation
                      </h3>
                      <p className="text-base font-cute-body text-text-secondary leading-relaxed">
                        Digital Security Gateway Consulting Services is a
                        next-generation company committed to delivering
                        end-to-end digital solutions. From securing your data to
                        building scalable IT infrastructure and crafting
                        impactful websites, we help businesses thrive in a
                        fast-paced digital world.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cute text-blue-400 mb-3">
                        Expert Partnership
                      </h3>
                      <p className="text-base font-cute-body text-text-secondary leading-relaxed">
                        Our expert team works actively in partnership with
                        organizations to identify risk and prioritize IT
                        security spend accordingly. Projects are designed to
                        maximize the efficiency and security of an existing or
                        new IT security infrastructure investment.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-emerald-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cute text-emerald-400 mb-3">
                        Tailored Solutions
                      </h3>
                      <p className="text-base font-cute-body text-text-secondary leading-relaxed">
                        Each project is tailored to a customer's specific
                        security requirements, IT architecture and business
                        priorities, typically compliance, policy enforcement,
                        consolidation, integration and availability.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Story Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-orange-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cute text-orange-400 mb-3">
                        Best-in-Class Security
                      </h3>
                      <p className="text-base font-cute-body text-text-secondary leading-relaxed">
                        Digital Security Gateway Consulting Services has chosen
                        to work with a select portfolio of IT security products,
                        which have been identified as the best in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cute text-purple-400 mb-3">
                        Global Implementation
                      </h3>
                      <p className="text-base font-cute-body text-text-secondary leading-relaxed">
                        Drawing on experience of global implementations, Digital
                        Security Gateway Consulting Services integrates these
                        into pragmatic and effective secure IT solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-teal-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cute text-teal-400 mb-3">
                        Professional Services
                      </h3>
                      <p className="text-base font-cute-body text-text-secondary leading-relaxed">
                        Where enhanced functionality may be required,
                        complementary development and integration services are
                        available from the Professional Services team.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
