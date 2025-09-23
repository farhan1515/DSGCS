import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">DSGCS</h1>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Digital Security Gateway Consulting Services
          </h1>
          <p className="text-xl">Cybersecurity Excellence</p>
        </header>

        <main className="text-center">
          <div className="bg-blue-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome to DSGCS</h2>
            <p className="text-lg">
              Your trusted partner for cybersecurity, infrastructure, and
              digital innovation.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
