import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import SectionTransition from "../common/SectionTransition";

const testimonials = [
  {
    name: "David K.",
    role: "Business Owner",
    content: "After my business Instagram account was banned, I tried everything with no success. Zentex was able to recover it within 48 hours. Absolutely worth every penny!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    platform: "Instagram"
  },
  {
    name: "Sarah M.",
    role: "Content Creator",
    content: "I couldn't believe how quickly Zentex restored my account after being wrongfully banned. Their service is incredibly professional and effective.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    platform: "Facebook"
  },
  {
    name: "Michael R.",
    role: "E-commerce Manager",
    content: "When our company page with 500K followers was compromised, we were desperate. Zentex not only recovered our account but also helped improve our security.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    platform: "Instagram"
  },
  {
    name: "Jessica T.",
    role: "Influencer",
    content: "I was skeptical at first, but Zentex proved me wrong. My account was back within days, and their customer service was exceptional throughout the process.",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    platform: "Facebook"
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any, isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
      transition={{ duration: 0.5 }}
      className={`bg-zentex-gray-700/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border ${
        isActive ? "border-zentex-accent" : "border-zentex-gray-700/30"
      } h-full flex flex-col`}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-zentex-accent">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-zentex-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>

      <div className="mt-2 mb-4 text-zentex-gray-300 flex-grow">
        "{testimonial.content}"
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-zentex-gray-700/20">
        <span className="text-zentex-accent text-sm">{testimonial.platform}</span>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-zentex-accent"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  
  useEffect(() => {
    if (!carouselApi) return;
    
    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <SectionTransition id="testimonials" className="py-20 md:py-32 bg-zentex-black relative">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-zentex-accent uppercase text-sm md:text-base tracking-widest mb-3">
            Client Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Success Stories
          </h3>
          <p className="text-zentex-gray-300">
            Don't just take our word for it. See what our clients have to say about 
            Zentex's premium account recovery and management services.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{ align: "center" }}
            className="w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isActive={index === activeIndex} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-zentex-black border-zentex-gray-700" />
            <CarouselNext className="hidden md:flex -right-6 bg-zentex-black border-zentex-gray-700" />
          </Carousel>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-zentex-accent w-6" : "bg-zentex-gray-700"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};

export default TestimonialsSection;
