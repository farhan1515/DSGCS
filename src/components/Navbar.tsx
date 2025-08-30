import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  cloneElement,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Home, User, Briefcase, Phone } from "lucide-react";

// LimelightNav Component with CyberCore Integration
type NavItem = {
  id: string;
  icon: React.ReactElement;
  label: string;
  path: string;
};

const LimelightNav = ({
  items,
  activeIndex,
  onItemClick,
  className = "",
}: {
  items: NavItem[];
  activeIndex: number;
  onItemClick: (index: number, path: string) => void;
  className?: string;
}) => {
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const newLeft =
        activeItem.offsetLeft +
        activeItem.offsetWidth / 2 -
        limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 100);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) return null;

  return (
    <nav
      className={`relative inline-flex items-center h-16 rounded-2xl px-3 ${className}`}
    >
      {items.map((item, index) => (
        <Link
          key={item.id}
          to={item.path}
          ref={(el) => (navItemRefs.current[index] = el)}
          className="relative z-20 flex h-full cursor-pointer items-center justify-center px-6 py-2 rounded-xl transition-all duration-300 group"
          onClick={() => onItemClick(index, item.path)}
          aria-label={item.label}
        >
          <div className="flex flex-col items-center space-y-1">
            {cloneElement(item.icon, {
              className: `w-5 h-5 transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "text-accent-500 drop-shadow-glow"
                  : "text-text-muted hover:text-accent-400"
              } group-hover:scale-110`,
            })}
            <span
              className={`text-xs font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "text-accent-500 opacity-100"
                  : "text-text-muted opacity-70 group-hover:opacity-100 group-hover:text-accent-400"
              }`}
            >
              {item.label}
            </span>
          </div>
        </Link>
      ))}

      {/* Limelight Effect */}
      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-14 h-1 rounded-full bg-gradient-accent shadow-glow-lg ${
          isReady ? "transition-[left] duration-500 ease-out" : ""
        }`}
        style={{ left: "-999px" }}
      >
        {/* Gradient Beam Effect */}
        <div
          className="absolute left-[-40%] top-1 w-[180%] h-12 bg-gradient-to-b from-accent-500/20 via-accent-500/10 to-transparent rounded-b-full pointer-events-none"
          style={{
            clipPath: "polygon(10% 100%, 30% 0%, 70% 0%, 90% 100%)",
          }}
        />

        {/* Additional Glow */}
        <div className="absolute inset-0 bg-accent-500 rounded-full animate-pulse opacity-50" />
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: "home", icon: <Home />, label: "Home", path: "/" },
    { id: "about", icon: <User />, label: "About", path: "/about" },
    { id: "services", icon: <Shield />, label: "Services", path: "/services" },
    { id: "careers", icon: <Briefcase />, label: "Careers", path: "/careers" },
    { id: "contact", icon: <Phone />, label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  const handleItemClick = (index: number, path: string) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.div
      className="fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Unified Navigation Container */}
      <div
        className={`cyber-card rounded-2xl p-4 transition-all duration-500 shadow-cyber-lg ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="flex items-center space-x-6">
          {/* Logo Section */}
          <Link to="/">
            <motion.div
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow relative overflow-hidden"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                }}
              >
                <Shield className="w-5 h-5 text-primary-900 drop-shadow-lg" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{ x: [-100, 100] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              <div className="hidden md:block">
                <motion.span
                  className="text-lg font-bold cyber-gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  ASITLOG
                </motion.span>
                <div className="text-xs text-text-muted font-medium">
                  Cybersecurity Excellence
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop LimelightNav */}
          <div className="hidden lg:block">
            <LimelightNav
              items={navItems}
              activeIndex={activeIndex}
              onItemClick={handleItemClick}
              className="border-0 bg-transparent shadow-none"
            />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-3 rounded-2xl hover:bg-accent-500/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-accent-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-accent-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-20 left-4 right-4 cyber-card rounded-2xl p-6 shadow-cyber-lg"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 group ${
                    activeIndex === index
                      ? "bg-accent-500/10 border border-accent-500/30 text-accent-500"
                      : "text-text-muted hover:text-accent-400 hover:bg-accent-500/5"
                  }`}
                  onClick={() => handleItemClick(index, item.path)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cloneElement(item.icon, {
                      className: `w-6 h-6 transition-all duration-300 ${
                        activeIndex === index
                          ? "text-accent-500 drop-shadow-glow"
                          : "group-hover:text-accent-400"
                      }`,
                    })}
                  </motion.div>
                  <span className="text-sm font-medium">{item.label}</span>
                  {activeIndex === index && (
                    <motion.div
                      className="w-2 h-2 bg-accent-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-6 pt-6 border-t border-accent-500/20 flex items-center justify-center">
              <motion.div
                className="text-xs text-text-muted flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse" />
                <span>Cybersecurity Excellence</span>
                <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
