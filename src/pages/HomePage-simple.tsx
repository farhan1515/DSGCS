import { motion } from "framer-motion";

const SimpleHero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
    <div className="absolute inset-0 bg-gradient-contact" />

    <div className="relative z-10 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Trusted Partner for
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-4 text-emerald-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Cybersecurity, Infrastructure,
      </motion.h2>
      <motion.h3
        className="text-2xl md:text-4xl font-bold mb-8 text-amber-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        and Digital Innovation.
      </motion.h3>
      <motion.p
        className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        "We protect your business, build your foundation, and design your
        digital future — all in one place"
      </motion.p>
      <motion.button
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.button>
    </div>
  </section>
);

const SimpleCompanyIntro = () => (
  <section className="py-24 px-4 bg-gradient-contact">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Digital Security Gateway Consulting Services (DSGCS)
      </motion.h2>
      <motion.p
        className="text-lg text-gray-200 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Digital Security Gateway Consulting Services stands as a premier
        cybersecurity company based in Riyadh, Saudi Arabia, committed to
        securing digital landscapes with cutting-edge solutions. With a rich
        legacy of safeguarding critical assets, Digital Security Gateway
        Consulting Services (DSGCS) is renowned for its expertise, innovative
        approach, and unwavering commitment to cybersecurity excellence.
      </motion.p>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <SimpleHero />
      <SimpleCompanyIntro />
    </motion.div>
  );
};

export default HomePage;
