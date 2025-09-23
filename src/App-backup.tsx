import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import Solutions from "./pages/Solutions";
import ConsultationServices from "./pages/ConsultationServices";
import ProfessionalServices from "./pages/ProfessionalServices";
import CybersecurityAcademy from "./pages/CybersecurityAcademy";

// Debug component to log route changes
const RouteDebugger = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location]);

  return null;
};

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-gradient-contact">
    <h1 className="text-6xl font-bold text-accent-400 mb-4">404</h1>
    <p className="text-xl mb-8">Page Not Found</p>
    <Link
      to="/"
      className="px-6 py-3 bg-accent-500 text-primary-900 rounded-lg hover:bg-accent-400 transition-colors"
    >
      Go Home
    </Link>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-contact text-text-primary overflow-x-hidden relative">
      <Router>
        <RouteDebugger /> {/* Add the debugger */}
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loading" />}
          {!isLoading && (
            <div key="main" className="relative z-10">
              <SmoothScroll />
              <Navbar />

              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route
                    path="/consultation"
                    element={<ConsultationServices />}
                  />
                  <Route
                    path="/professional"
                    element={<ProfessionalServices />}
                  />
                  <Route path="/academy" element={<CybersecurityAcademy />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  {/* Catch-all route for unmatched paths */}
                  <Route path="*" element={<NotFoundPage />} />
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
