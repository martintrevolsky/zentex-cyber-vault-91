
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <p className="text-zentex-gray-400 text-xs uppercase tracking-widest mb-2">
        Scroll Down
      </p>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-[1px] h-8 bg-zentex-gray-400"
      />
    </motion.div>
  );
};

export default ScrollIndicator;
