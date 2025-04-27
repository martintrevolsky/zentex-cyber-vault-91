import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import SectionTransition from "../common/SectionTransition";

const testimonials = [
  {
    name: "Anonymous Client",
    role: "Privacy Protection Case",
    content: "This guy literally banned the account that leaked my personal information. Have all the blessings in the world young guy, thank you so much for saving me. If you hadn't taken them down, my privacy would have been compromised all over the internet.",
    avatar: "/lovable-uploads/79fc5e67-9142-4283-abc7-7f97e05718d1.png",
    platform: "Telegram @stwags",
    verified: true
  },
  {
    name: "Trusted MM",
    role: "Long-term Client",
    content: "Vouch @Zentexups - MM'd $25k+ total, quick and easy transactions every time!",
    avatar: "/lovable-uploads/1eacc8c3-5d38-4549-95cf-c0dd48aa8d9f.png",
    platform: "Telegram @stwags",
    verified: true
  },
  {
    name: "Business Partner",
    role: "1+ Year Collaboration",
    content: "Been working with @ZentexUp from more than a year, never disappoints. Multiple successful bans, unbans, and adbot services. Sweet and honest guy. Highly recommend. ⚡️",
    avatar: "/lovable-uploads/79fc5e67-9142-4283-abc7-7f97e05718d1.png",
    platform: "Telegram @stwags",
    verified: true
  },
  {
    name: "VIP Client",
    role: "Celebrity Account Case",
    content: "Fast celebrity account unban after 4 people had failed before. Simply the best in the business!",
    avatar: "/lovable-uploads/1eacc8c3-5d38-4549-95cf-c0dd48aa8d9f.png",
    platform: "Telegram @stwags",
    verified: true
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any, isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br from-zentex-gray-900/90 to-zentex-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border ${
        isActive ? "border-zentex-accent shadow-lg shadow-zentex-accent/10" : "border-zentex-gray-700/30"
      } h-full flex flex-col relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-zentex-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zentex-accent/50">
          <img
            src={testimonial.avatar}
            alt="Client"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-zentex-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>

      <div className="mt-2 mb-6 text-zentex-gray-300 flex-grow font-light leading-relaxed">
        "{testimonial.content}"
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-zentex-gray-700/20">
        <div className="flex items-center gap-2">
          <span className="text-zentex-accent text-sm">{testimonial.platform}</span>
          {testimonial.verified && (
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-zentex-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
        </div>
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
