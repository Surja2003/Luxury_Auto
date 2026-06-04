import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { GoldParticles } from "./components/GoldParticles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandMarquee } from "./components/BrandMarquee";
import { FeaturedCars } from "./components/FeaturedCars";
import { StatsBar } from "./components/StatsBar";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoaderComplete = () => {
    setLoading(false);
    setTimeout(() => setContentVisible(true), 100);
  };

  /* Prevent body scroll while loader is showing */
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <div
      style={{
        background: "#050505",
        color: "#F5F5F0",
        fontFamily: "'Jost', sans-serif",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Custom gold cursor — desktop only */}
      <CustomCursor />

      {/* Floating gold particles layer */}
      <GoldParticles />

      {/* Page loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Main site content */}
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: "opacity 0.9s ease",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Navbar />
        <Hero />
        <BrandMarquee />
        <FeaturedCars />
        <StatsBar />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      {/* Always-visible floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
