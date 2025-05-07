
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTransition from "../common/SectionTransition";

const ServiceCard = ({ title, description, icon, price, popular = false, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-6 rounded-lg backdrop-blur-sm ${
        popular ? "border-2 border-zentex-accent" : "border border-zentex-gray-700/30"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zentex-accent px-3 py-1 rounded text-xs font-semibold">
          MOST POPULAR
        </div>
      )}
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-zentex-gray-700/20 text-zentex-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zentex-gray-300 mb-5">{description}</p>
      <div className="flex justify-between items-end">
        <div>
          <span className="block text-zentex-gray-400 text-sm">Starting from</span>
          <span className="text-2xl font-bold">{price}</span>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-sm bg-zentex-gray-700/30 hover:bg-zentex-gray-700/50 rounded transition-colors"
        >
          Get Started
        </motion.a>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Instagram Account Recovery",
      description: "Expert service to regain access to banned or suspended Instagram accounts with a high success rate.",
      icon: <span className="text-2xl">🔓</span>,
      price: "xxxx$",
      popular: true,
      delay: 0.1
    },
    {
      title: "Facebook Unban Service",
      description: "Specialized Facebook account recovery for personal profiles and business pages facing restrictions.",
      icon: <span className="text-2xl">🛡️</span>,
      price: "xxxx$",
      delay: 0.2
    },
    {
      title: "Account Takedown Service",
      description: "Premium service to takedown specific accounts for removal using proprietary methods.(100% based on tos)",
      icon: <span className="text-2xl">🎯</span>,
      price: "xxxx$",
      delay: 0.3
    },
    {
      title: "Platform Security Audit",
      description: "Comprehensive audit of your social media accounts to identify and patch security vulnerabilities.",
      icon: <span className="text-2xl">🔍</span>,
      price: "xx$",
      delay: 0.4
    },
  ];

  return (
    <SectionTransition id="services" className="py-20 md:py-32 bg-zentex-black relative">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-zentex-accent uppercase text-sm md:text-base tracking-widest mb-3">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Premium Account Solutions
          </h3>
          <p className="text-zentex-gray-300">
            Zentex offers specialized services tailored to your account needs, 
            whether you're seeking recovery or targeted management. Our premium 
            solutions come with a satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 p-6 md:p-8 border border-zentex-gray-700/30 rounded-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-2">Need a Custom Solution?</h4>
              <p className="text-zentex-gray-300">
                We offer tailored services for unique account situations and specialized requirements.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-zentex-white text-zentex-black font-medium rounded hover:bg-zentex-gray-100 transition-colors whitespace-nowrap"
            >
              Request Custom Quote
            </motion.a>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default ServicesSection;
