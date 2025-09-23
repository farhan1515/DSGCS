// import React, { useState, useEffect, useRef, ReactNode } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface CardProps {
//   children: ReactNode;
//   className?: string;
// }

// export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
//   return <div className={`cyber-card p-8 h-full ${className}`}>{children}</div>;
// };

// interface CardSwapProps {
//   children: ReactNode[];
//   cardDistance?: number;
//   verticalDistance?: number;
//   delay?: number;
//   pauseOnHover?: boolean;
//   className?: string;
// }

// const CardSwap: React.FC<CardSwapProps> = ({
//   children,
//   cardDistance = 60,
//   verticalDistance = 70,
//   delay = 5000,
//   pauseOnHover = true,
//   className = "",
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const cards = React.Children.toArray(children);

//   useEffect(() => {
//     if (pauseOnHover && isHovered) {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//       return;
//     }

//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, delay);

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [cards.length, delay, isHovered, pauseOnHover]);

//   const getCardStyle = (index: number, currentIndex: number) => {
//     const totalCards = cards.length;
//     let position = index - currentIndex;

//     if (position < 0) {
//       position += totalCards;
//     }

//     const isActive = position === 0;
//     const zIndex = totalCards - position;
//     const scale = isActive ? 1 : 1 - position * 0.05;
//     const opacity = position < 3 ? 1 - position * 0.2 : 0;
//     const translateX = position * cardDistance;
//     const translateY = position * (verticalDistance * 0.3);
//     const rotateY = position * 5;

//     return {
//       zIndex,
//       scale,
//       opacity,
//       x: translateX,
//       y: translateY,
//       rotateY,
//     };
//   };

//   return (
//     <div
//       className={`relative w-full h-full ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="popLayout">
//         {cards.map((card, index) => {
//           const style = getCardStyle(index, currentIndex);

//           return (
//             <motion.div
//               key={index}
//               className="absolute inset-0 cursor-pointer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{
//                 opacity: style.opacity,
//                 scale: style.scale,
//                 x: style.x,
//                 y: style.y,
//                 rotateY: style.rotateY,
//                 zIndex: style.zIndex,
//               }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{
//                 duration: 0.6,
//                 ease: [0.25, 0.46, 0.45, 0.94],
//               }}
//               whileHover={{
//                 scale: style.scale * 1.02,
//                 y: style.y - 10,
//                 transition: { duration: 0.2 },
//               }}
//               onClick={() => setCurrentIndex(index)}
//               style={{
//                 transformStyle: "preserve-3d",
//                 perspective: "1000px",
//               }}
//             >
//               {card}
//             </motion.div>
//           );
//         })}
//       </AnimatePresence>

//       {/* Card Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
//         {cards.map((_, index) => (
//           <motion.button
//             key={index}
//             className={`w-2 h-2 rounded-full border transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-accent-500 border-accent-500 shadow-glow"
//                 : "bg-transparent border-accent-500/50 hover:border-accent-500"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           />
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <motion.button
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 p-2 rounded-full glass-card hover:bg-accent-500/10 transition-all duration-300"
//         onClick={() =>
//           setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//           )
//         }
//         whileHover={{ scale: 1.1, x: -2 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <svg
//           className="w-5 h-5 text-accent-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </motion.button>

//       <motion.button
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 p-2 rounded-full glass-card hover:bg-accent-500/10 transition-all duration-300"
//         onClick={() =>
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
//         }
//         whileHover={{ scale: 1.1, x: 2 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <svg
//           className="w-5 h-5 text-accent-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </motion.button>
//     </div>
//   );
// };

// export default CardSwap;
