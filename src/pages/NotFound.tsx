
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-zentex-black text-zentex-white p-4"
    >
      <div className="max-w-md w-full text-center relative">
        <div className="absolute inset-0 -z-10 noise-bg"></div>
        
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold mb-4 text-gradient"
        >
          404
        </motion.h1>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-zentex-gray-300 mb-8"
        >
          The page you're looking for doesn't exist.
        </motion.p>
        
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="inline-block px-8 py-3 bg-zentex-white text-zentex-black font-medium rounded hover:bg-zentex-gray-100 transition-colors"
        >
          Return to Home
        </motion.a>
      </div>
    </motion.div>
  );
};

export default NotFound;
