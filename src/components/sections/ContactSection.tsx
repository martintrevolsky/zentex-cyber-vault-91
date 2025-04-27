
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTransition from "../common/SectionTransition";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { Telegram, Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate form submission (replace with your actual form submission)
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you shortly.");
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
    
    // Uncomment below to use EmailJS (requires proper setup)
    /*
    if (form.current) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then((result) => {
        toast.success("Message sent successfully! We'll get back to you shortly.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, (error) => {
        toast.error("Failed to send message. Please try again.");
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
    */
  };

  const contactOptions = [
    {
      name: "Telegram",
      value: "@zentex_official",
      icon: <Telegram className="w-5 h-5" />,
      link: "https://t.me/zentex_official"
    },
    {
      name: "Discord",
      value: "zentex#1337",
      icon: <MessageSquare className="w-5 h-5" />,
      link: "https://discord.gg/zentex"
    },
    {
      name: "Email",
      value: "contact@zentex.com",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:contact@zentex.com"
    }
  ];

  return (
    <SectionTransition id="contact" className="py-20 md:py-32 bg-zentex-black relative">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-zentex-accent uppercase text-sm md:text-base tracking-widest mb-3">
            Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-zentex-gray-300">
            Reach out to Zentex for professional account services. We guarantee 
            confidentiality and a rapid response to your inquiry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            
            <div className="space-y-6 mb-8">
              {contactOptions.map((option, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zentex-gray-700/20 text-zentex-accent">
                    {option.icon}
                  </div>
                  <div>
                    <p className="text-sm text-zentex-gray-400">{option.name}</p>
                    <a 
                      href={option.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zentex-white hover:text-zentex-accent transition-colors"
                    >
                      {option.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 border border-zentex-gray-700/30 rounded-lg backdrop-blur-sm">
              <h4 className="text-lg font-bold mb-4">Operating Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zentex-gray-400">Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM UTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zentex-gray-400">Saturday</span>
                  <span>10:00 AM - 6:00 PM UTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zentex-gray-400">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 text-zentex-gray-300 text-sm">
                * Emergency services available 24/7 for premium clients
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Send a Message</h4>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-zentex-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zentex-gray-700/20 border border-zentex-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zentex-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-zentex-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zentex-gray-700/20 border border-zentex-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zentex-accent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-zentex-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zentex-gray-700/20 border border-zentex-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zentex-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-zentex-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zentex-gray-700/20 border border-zentex-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zentex-accent"
                />
              </div>
              
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-zentex-accent text-zentex-white font-medium rounded hover:bg-zentex-accent/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default ContactSection;
