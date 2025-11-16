import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";   

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Colleges from "./pages/College/Colleges";
import Students from "./pages/Students/Students";
import Services from "./pages/Services/Services";
import Events from "./pages/Events/Events";
import Investors from "./pages/Investors/Investors";
import Resources from "./pages/Resources/Resources";
import Contact from "./pages/Contact/Contact";

import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3500); // 0–100% takes 3000ms, so 3500 is perfect

  return () => clearTimeout(timer);
}, []);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/students" element={<Students />} />
            <Route path="/colleges" element={<Colleges />} />
          </Routes>

          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
