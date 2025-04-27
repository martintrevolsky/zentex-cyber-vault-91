
import { motion } from "framer-motion";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-zentex-black border-t border-zentex-gray-700/30 relative">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              ZENTEX<span className="text-zentex-accent">.</span>
            </a>
            <p className="text-zentex-gray-400 mt-2 text-sm">
              Premium Account Management Services
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <motion.a
              href="#hero"
              whileHover={{ color: "#FFFFFF" }}
              className="text-zentex-gray-400 hover:text-zentex-white transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ color: "#FFFFFF" }}
              className="text-zentex-gray-400 hover:text-zentex-white transition-colors"
            >
              About
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ color: "#FFFFFF" }}
              className="text-zentex-gray-400 hover:text-zentex-white transition-colors"
            >
              Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: "#FFFFFF" }}
              className="text-zentex-gray-400 hover:text-zentex-white transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-zentex-gray-700/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zentex-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Zentex. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ color: "#FFFFFF" }}
                className="text-zentex-gray-400 hover:text-zentex-white transition-colors text-sm"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
