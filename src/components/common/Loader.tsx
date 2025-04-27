
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-zentex-black z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-8">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-4 rounded-full bg-zentex-accent/20 blur-xl"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zentex-white relative">
            ZENTEX
          </h1>
        </div>
        
        <div className="w-48 h-[2px] bg-zentex-gray-600 relative mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-full h-full bg-zentex-white origin-left"
          />
        </div>
        
        <p className="mt-2 text-zentex-gray-300 text-sm uppercase tracking-widest mb-8">
          CYBER SECURITY SERVICES
        </p>
        
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 rounded-full bg-zentex-accent loading-dot"></div>
          <div className="w-3 h-3 rounded-full bg-zentex-accent loading-dot"></div>
          <div className="w-3 h-3 rounded-full bg-zentex-accent loading-dot"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
