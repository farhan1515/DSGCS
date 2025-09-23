// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { 
//   Target, 
//   Eye, 
//   Users, 
//   Shield, 
//   Globe, 
//   Award,
//   Lightbulb,
//   CheckCircle,
//   Sparkles,
//   Zap
// } from "lucide-react";

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const iconVariants = {
//     hidden: { opacity: 0, scale: 0.5, rotate: -10 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       }
//     },
//   };

//   return (
//     <section
//       id="about"
//       ref={ref}
//       className="py-24 px-4 relative overflow-hidden bg-gradient-contact"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"
//           animate={{
//             scale: [1, 1.1, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"
//           animate={{
//             scale: [1.1, 1, 1.1],
//             rotate: [360, 180, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Header */}
//         <motion.div
//           className="text-center mb-20"
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <motion.span
//             className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6 border"
//             style={{
//               background: `linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)`,
//               borderColor: "rgba(147, 51, 234, 0.3)",
//               color: "#9333EA",
//               boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)",
//             }}
//             variants={iconVariants}
//           >
//             <Sparkles className="w-4 h-4 mr-2" />
//             About DSGCS
//           </motion.span>

//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
//             style={{
//               background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 30%, #E2E8F0 100%)`,
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               textShadow: "0 0 40px rgba(255, 255, 255, 0.4)",
//               filter: "contrast(1.3) brightness(1.3)",
//             }}
//             variants={fadeInVariants}
//           >
//             Digital Security Gateway (DSG)
//             <br />
//             <span
//               style={{
//                 background: `linear-gradient(135deg, #9333EA 0%, #A855F7 50%, #C084FC 100%)`,
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 textShadow: "0 0 30px rgba(147, 51, 234, 0.4)",
//               }}
//             >
//               works for you!
//             </span>
//           </motion.h1>
//         </motion.div>

//         {/* Who We Are Section */}
//         <motion.div
//           className="mb-20"
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <motion.div
//             className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/5"
//             variants={fadeInVariants}
//           >
//             <motion.div
//               className="flex items-center justify-center mb-8"
//               variants={iconVariants}
//             >
//               <div className="relative">
//                 <Users 
//                   className="w-16 h-16 text-purple-400" 
//                   style={{
//                     filter: "drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))",
//                   }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
//                   animate={{
//                     scale: [1, 1.3, 1],
//                     opacity: [0.3, 0.6, 0.3],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </div>
//             </motion.div>

//             <motion.h2
//               className="text-3xl md:text-4xl font-bold mb-6 text-center"
//               style={{
//                 background: `linear-gradient(135deg, #9333EA 0%, #A855F7 50%, #C084FC 100%)`,
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 textShadow: "0 0 30px rgba(147, 51, 234, 0.4)",
//               }}
//               variants={fadeInVariants}
//             >
//               Who We Are
//             </motion.h2>

//             <motion.div
//               className="space-y-6 text-lg leading-relaxed max-w-5xl mx-auto"
//               style={{
//                 color: "#F8FAFC",
//                 textShadow: "0 1px 6px rgba(0, 0, 0, 0.3)",
//                 filter: "contrast(1.1) brightness(1.1)",
//               }}
//               variants={staggerContainer}
//             >
//               <motion.p variants={fadeInVariants}>
//                 Digital Security Gateway is a <span className="font-semibold text-purple-400">next-generation Company</span> committed to delivering{" "}
//                 <span className="font-semibold text-emerald-400">end-to-end digital solutions</span>. From securing your data to
//                 building scalable IT infrastructure and crafting impactful websites, we help businesses thrive in a fast-paced digital world.
//               </motion.p>
              
//               <motion.p variants={fadeInVariants}>
//                 Digital Security Gateway (DSG)' <span className="font-semibold text-blue-400">expert team</span> works actively in partnership with organizations to{" "}
//                 <span className="font-semibold text-amber-400">identify risk and prioritize IT security spend</span> accordingly. 
//                 Projects are designed to maximize the efficiency and security of an existing or new IT security infrastructure investment.
//               </motion.p>
              
//               <motion.p variants={fadeInVariants}>
//                 Each project is tailored to a customer's <span className="font-semibold text-purple-400">specific security requirements, IT architecture and business priorities</span>, 
//                 typically compliance, policy enforcement, consolidation, integration and availability. Consideration is given to{" "}
//                 <span className="font-semibold text-emerald-400">minimizing the cost of ownership, improving productivity and delivering a return on investment</span>.
//               </motion.p>

//               <motion.p variants={fadeInVariants}>
//                 Effective security solutions require an increasingly complex combination of software offerings from multiple vendors. 
//                 Digital Security Gateway (DSG) has chosen to work with a <span className="font-semibold text-blue-400">select portfolio of IT security products, which have been identified as the best in the world</span>.
//               </motion.p>

//               <motion.p variants={fadeInVariants}>
//                 Drawing on experience of <span className="font-semibold text-amber-400">global implementations</span>, Digital Security Gateway (DSG) integrates these into{" "}
//                 <span className="font-semibold text-purple-400">pragmatic and effective secure IT solutions</span>. Where enhanced functionality may be required, 
//                 complementary development and integration services are available from the Professional Services team.
//               </motion.p>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Mission & Vision Section */}
//         <motion.div
//           className="grid md:grid-cols-2 gap-8"
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {/* Mission */}
//           <motion.div
//             className="glass-card p-8 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/5 group hover:border-white/20 hover:bg-white/10 transition-all duration-500"
//             variants={fadeInVariants}
//           >
//             <motion.div
//               className="flex items-center justify-center mb-6"
//               variants={iconVariants}
//             >
//               <div className="relative">
//                 <Target 
//                   className="w-12 h-12 text-emerald-400" 
//                   style={{
//                     filter: "drop-shadow(0 0 15px rgba(16, 185, 129, 0.6))",
//                   }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 border-2 border-emerald-400/30 rounded-full"
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0.4, 0.7, 0.4],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </div>
//             </motion.div>

//             <h3
//               className="text-2xl md:text-3xl font-bold mb-4 text-center"
//               style={{
//                 background: `linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)`,
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 textShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
//               }}
//             >
//               Our Mission
//             </h3>

//             <p
//               className="text-lg leading-relaxed text-center"
//               style={{
//                 color: "#F1F5F9",
//                 textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
//                 filter: "contrast(1.1) brightness(1.1)",
//               }}
//             >
//               To <span className="font-semibold text-emerald-400">empower businesses</span> through secure, intelligent, and use of{" "}
//               <span className="font-semibold text-purple-400">top most standard designed technology</span>. We accomplish this by applying{" "}
//               <span className="font-semibold text-blue-400">best practices</span> and continuously improving our services to better serve a growing client base.
//             </p>

//             {/* Mission Icons */}
//             <motion.div
//               className="flex justify-center space-x-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//             >
//               <CheckCircle className="w-6 h-6 text-emerald-400" />
//               <Shield className="w-6 h-6 text-purple-400" />
//               <Zap className="w-6 h-6 text-blue-400" />
//             </motion.div>
//           </motion.div>

//           {/* Vision */}
//           <motion.div
//             className="glass-card p-8 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/5 group hover:border-white/20 hover:bg-white/10 transition-all duration-500"
//             variants={fadeInVariants}
//           >
//             <motion.div
//               className="flex items-center justify-center mb-6"
//               variants={iconVariants}
//             >
//               <div className="relative">
//                 <Eye 
//                   className="w-12 h-12 text-blue-400" 
//                   style={{
//                     filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))",
//                   }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0.4, 0.7, 0.4],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 1,
//                   }}
//                 />
//               </div>
//             </motion.div>

//             <h3
//               className="text-2xl md:text-3xl font-bold mb-4 text-center"
//               style={{
//                 background: `linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)`,
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 textShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
//               }}
//             >
//               Our Vision
//             </h3>

//             <p
//               className="text-lg leading-relaxed text-center"
//               style={{
//                 color: "#F1F5F9",
//                 textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
//                 filter: "contrast(1.1) brightness(1.1)",
//               }}
//             >
//               To achieve the <span className="font-semibold text-blue-400">highest level of cybersecurity</span> while keeping it{" "}
//               <span className="font-semibold text-emerald-400">simple and reliable</span>.
//             </p>

//             {/* Vision Icons */}
//             <motion.div
//               className="flex justify-center space-x-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//             >
//               <Globe className="w-6 h-6 text-blue-400" />
//               <Lightbulb className="w-6 h-6 text-amber-400" />
//               <Award className="w-6 h-6 text-purple-400" />
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Floating Decorative Elements */}
//         <motion.div
//           className="absolute top-1/2 left-10 transform -translate-y-1/2"
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 5, 0],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Globe className="w-12 h-12 text-blue-400/20" />
//         </motion.div>

//         <motion.div
//           className="absolute top-1/4 right-10"
//           animate={{
//             y: [0, 15, 0],
//             rotate: [0, -5, 0],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         >
//           <Shield className="w-10 h-10 text-purple-400/20" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
