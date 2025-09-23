import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Simple pages without complex components
const HomePage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold mb-4">DSGCS</h1>
      <p className="text-xl mb-8">
        Digital Security Gateway Consulting Services
      </p>
      <p className="text-lg">
        Your trusted partner for cybersecurity, infrastructure, and digital
        innovation.
      </p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">About DSGCS</h1>
      <p className="text-lg max-w-2xl">
        Digital Security Gateway Consulting Services (DSGCS) is a premier
        cybersecurity company committed to securing digital landscapes with
        cutting-edge solutions.
      </p>
    </div>
  </div>
);

const SolutionsPage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Solutions</h1>
      <p className="text-lg">Our comprehensive cybersecurity solutions</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-contact flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Get in touch with our cybersecurity experts</p>
    </div>
  </div>
);

// Simple Navigation
const SimpleNavbar = () => (
  <nav className="fixed top-0 w-full bg-primary-900/80 backdrop-blur-sm border-b border-white/10 z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <Link to="/" className="text-white font-bold text-xl">
          DSGCS
        </Link>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-accent-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-accent-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/solutions"
            className="text-white hover:text-accent-400 transition-colors"
          >
            Solutions
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-accent-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

// Simple Loading Screen
const SimpleLoadingScreen = () => (
  <div className="fixed inset-0 bg-gradient-contact flex items-center justify-center z-50">
    <div className="text-center text-white">
      <div className="mb-8">
        <div className="text-6xl font-bold mb-4">DSGCS</div>
        <div className="text-xl">
          Digital Security Gateway Consulting Services (DSGCS)
        </div>
      </div>
      <div className="flex space-x-2 justify-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="mt-4 text-lg">Initializing Security Protocols...</p>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-contact text-white">
      <Router>
        {loading ? (
          <SimpleLoadingScreen />
        ) : (
          <>
            <SimpleNavbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
