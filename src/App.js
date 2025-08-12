import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hotjar from "@hotjar/browser";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/services/[serviceId]";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const siteId = 5304391;
const hotjarVersion = 6;

function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      Hotjar.init(siteId, hotjarVersion);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/services/:id" element={<ServiceDetail />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
