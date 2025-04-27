
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";

const Home = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Zentex - Premium Account Services";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zentex-black text-zentex-white min-h-screen"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </motion.div>
  );
};

export default Home;
