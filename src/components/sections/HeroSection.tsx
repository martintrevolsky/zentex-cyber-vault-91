
import { motion } from "framer-motion";
import HeroScene from "../three/HeroScene";
import ScrollIndicator from "../common/ScrollIndicator";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      <div className="absolute inset-0 bg-gradient-to-b from-zentex-black/80 via-zentex-black/50 to-zentex-black/80 z-10" />
      
      <div className="container mx-auto px-4 md:px-6 z-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-zentex-gray-300 uppercase text-sm md:text-base tracking-[0.2em] mb-3"
          >
            Elite Security Services
          </motion.h2>
          
          <motion.h1
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-zentex-white"
          >
            PROFESSIONAL ACCOUNT
            <br />
            <span className="bg-gradient-to-r from-zentex-white via-zentex-gray-300 to-zentex-white bg-clip-text text-transparent">
              MANAGEMENT SERVICES
            </span>
          </motion.h1>
          
          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-zentex-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-mono"
          >
            Account Recovery • Security Enhancement • Strategic Management
          </motion.p>
          
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-zentex-gray-700 text-zentex-white font-medium rounded hover:bg-zentex-gray-600 transition-all duration-300 shadow-lg shadow-zentex-black/20 font-display tracking-wider"
            >
              View Services
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-zentex-gray-700 text-zentex-white font-medium rounded hover:bg-zentex-gray-700/10 transition-all duration-300 font-display tracking-wider"
            >
              Contact Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
