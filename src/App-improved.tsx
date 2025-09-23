import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import working components
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import working pages
import HomePage from "./pages/HomePage-simple";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Simple fallback pages for problematic ones
const SolutionsPage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center pt-24">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Solutions</h1>
      <p className="text-lg">Our comprehensive cybersecurity solutions</p>
    </div>
  </div>
);

const ConsultationPage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center pt-24">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Consultation Services</h1>
      <p className="text-lg">Expert cybersecurity consultation</p>
    </div>
  </div>
);

const ProfessionalPage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center pt-24">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Professional Services</h1>
      <p className="text-lg">Professional cybersecurity services</p>
    </div>
  </div>
);

const AcademyPage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center pt-24">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Cybersecurity Academy</h1>
      <p className="text-lg">Learn cybersecurity with us</p>
    </div>
  </div>
);

// Route debugger
const RouteDebugger = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-contact text-text-primary overflow-x-hidden relative">
      <Router>
        <RouteDebugger />
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loading" />}
          {!loading && (
            <div key="main" className="relative z-10">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  <Route path="/professional" element={<ProfessionalPage />} />
                  <Route path="/academy" element={<AcademyPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
