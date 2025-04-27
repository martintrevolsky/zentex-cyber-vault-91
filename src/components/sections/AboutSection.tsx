
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTransition from "../common/SectionTransition";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statItems = [
    { value: "5+", label: "Years Experience" },
    { value: "1000+", label: "Accounts Recovered" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Success Rate" },
  ];

  return (
    <SectionTransition id="about" className="py-20 md:py-32 bg-zentex-black relative">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-zentex-accent uppercase text-sm md:text-base tracking-widest mb-3">
              About Zentex
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Premier Account Specialist in the Industry
            </h3>
            <p className="text-zentex-gray-300 mb-6">
              Zentex is a top-tier specialist in social media account services, 
              focusing on Instagram and Facebook platforms. With years of experience 
              in cyber security and platform policies, Zentex has developed proprietary 
              methods to provide both account recovery and specialized account management.
            </p>
            <p className="text-zentex-gray-300 mb-8">
              Our approach combines technical expertise with an in-depth understanding of 
              platform algorithms and security systems. We operate with precision, 
              discretion, and a commitment to delivering results when others can't.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {statItems.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-zentex-gray-700/10 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-zentex-white">
                    {stat.value}
                  </div>
                  <div className="text-zentex-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-zentex-black/60 backdrop-blur-sm mix-blend-lighten z-10"></div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-zentex-black via-transparent to-zentex-accent/30 z-20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-mono mb-3 text-zentex-gray-300">
                    ZENTEX_
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-zentex-white">
                    CYBER SECURITY
                  </div>
                  <div className="mt-6 h-px w-20 mx-auto bg-zentex-accent"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className="border border-zentex-gray-700/20"
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-zentex-accent/30 rounded-lg"></div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default AboutSection;
