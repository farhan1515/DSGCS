import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  cloneElement,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Shield,
  Home,
  User,
  Briefcase,
  Phone,
  Settings,
  BookOpen,
} from "lucide-react";

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
  onItemClick: (index: number) => void;
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
      className={`relative inline-flex items-center h-12 rounded-2xl px-2 ${className}`}
    >
      {items.map((item, index) => (
        <Link
          key={item.id}
          to={item.path}
          ref={(el) => (navItemRefs.current[index] = el)}
          className="relative z-20 flex h-full cursor-pointer items-center justify-center px-4 py-1.5 rounded-xl transition-all duration-300 group"
          onClick={() => onItemClick(index)}
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
    { id: "about", icon: <User />, label: "About Us", path: "/about" },
    {
      id: "consultation",
      icon: <Settings />,
      label: "Consultation",
      path: "/consultation",
    },
    {
      id: "solutions",
      icon: <Shield />,
      label: "Solutions",
      path: "/solutions",
    },
    {
      id: "professional",
      icon: <Briefcase />,
      label: "Professional Services",
      path: "/professional",
    },
    { id: "academy", icon: <BookOpen />, label: "Academy", path: "/academy" },
    { id: "contact", icon: <Phone />, label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }

    // Scroll to top when location changes (for direct URL access and navigation)
    // Add a small delay to ensure the route change is complete
    const timer = setTimeout(() => {
      scrollToTop();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false);

    // Scroll to top smoothly when navigating
    // Use a slightly longer delay for programmatic navigation
    setTimeout(() => {
      scrollToTop();
    }, 150);
  };

  return (
    <motion.div
      className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4 md:px-6 lg:px-8 transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div
          className={`w-full backdrop-blur-xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 ${
            isScrolled
              ? "shadow-[0_8px_32px_rgba(147,51,234,0.3)] border-accent-500/30"
              : "shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          }`}
          style={{
            boxShadow: isScrolled
              ? "0 8px 32px rgba(147, 51, 234, 0.3), 0 0 60px rgba(147, 51, 234, 0.1)"
              : "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex items-center justify-between px-3 sm:px-4 py-3">
            {/* Logo + Company Name - Mobile */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
            >
              <div
                className="relative overflow-hidden"
                style={{ width: "70px", height: "80px" }}
              >
                <motion.img
                  src="/images/dsgcs.png"
                  alt="DSGCS Logo"
                  className="w-full h-full object-contain drop-shadow-lg filter brightness-110"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                  }}
                />
              </div>
              <div className="flex-shrink-0">
                <div
                  className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent leading-tight"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    textShadow: "0 2px 10px rgba(147, 51, 234, 0.3)",
                  }}
                >
                  <span className="block sm:hidden">DSGCS</span>
                  <span className="hidden sm:block">
                    Digital Security Gateway
                  </span>
                  <span className="hidden sm:block text-xs text-accent-400/90">
                    Consulting Services
                  </span>
                </div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 sm:p-3 rounded-xl backdrop-blur-md bg-accent-500/10 border border-accent-500/30 hover:bg-accent-500/20 transition-all duration-300 shadow-lg"
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
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-center items-center gap-6">
        {/* Logo - Independent Outside Container */}
        <Link to="/" className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ width: "120px", height: "120px" }}
            >
              <motion.img
                src="/images/dsgcs.png"
                alt="DSGCS Logo"
                className="w-full h-full object-contain drop-shadow-lg filter brightness-110"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                }}
              />
            </div>
          </motion.div>
        </Link>

        {/* Main Navbar Container - Company Name + Nav Items */}
        <div
          className={`backdrop-blur-xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 ${
            isScrolled
              ? "shadow-[0_8px_32px_rgba(147,51,234,0.3)] border-accent-500/30"
              : "shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          }`}
          style={{
            boxShadow: isScrolled
              ? "0 8px 32px rgba(147, 51, 234, 0.3), 0 0 60px rgba(147, 51, 234, 0.1)"
              : "0 8px 32px rgba(0, 0, 0, 0.3)",
            width: "fit-content",
            maxWidth: "calc(100vw - 200px)",
          }}
        >
          {/* Inner Container */}
          <div className="flex items-center gap-6 px-6 py-4">
            {/* Company Name */}
            <div className="flex-shrink-0">
              <div
                className="text-base lg:text-lg font-semibold bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent leading-tight whitespace-nowrap"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  textShadow: "0 2px 10px rgba(147, 51, 234, 0.3)",
                }}
              >
                Digital Security Gateway
                <br />
                <span className="text-sm lg:text-base text-accent-400/90">
                  Consulting Services
                </span>
              </div>
            </div>

            {/* Desktop LimelightNav */}
            <div className="flex items-center">
              <LimelightNav
                items={navItems}
                activeIndex={activeIndex}
                onItemClick={handleItemClick}
                className="border-0 bg-transparent shadow-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-[70px] sm:top-[90px] left-2 right-2 sm:left-4 sm:right-4 backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-accent-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl"
            style={{
              boxShadow:
                "0 8px 32px rgba(147, 51, 234, 0.3), 0 0 60px rgba(147, 51, 234, 0.15)",
            }}
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
                  onClick={() => handleItemClick(index)}
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
