
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";

const Home = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Zentex - Premium Account Recovery Services";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zentex-black text-zentex-white min-h-screen"
    >
      <Helmet>
        <title>Zentex - Premium Account Recovery Services</title>
        <meta name="description" content="Professional account recovery and management services by Zentex. Specializing in Instagram and Facebook account services with high success rates." />
        <meta name="keywords" content="account recovery, instagram unban, facebook unban, account services, zentex" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentex-cyber.com/" />
        <meta property="og:title" content="Zentex - Premium Account Recovery Services" />
        <meta property="og:description" content="Professional account recovery and management services with guaranteed results." />
        <meta property="og:image" content="https://zentex-cyber.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zentex-cyber.com/" />
        <meta property="twitter:title" content="Zentex - Premium Account Recovery Services" />
        <meta property="twitter:description" content="Professional account recovery and management services with guaranteed results." />
        <meta property="twitter:image" content="https://zentex-cyber.com/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zentex-cyber.com/" />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </motion.div>
  );
};

export default Home;
