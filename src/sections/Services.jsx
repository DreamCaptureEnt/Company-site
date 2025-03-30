import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPenNib, FaCubes, FaUsers, FaBoxOpen, FaPaintBrush, FaCube, FaTheaterMasks, FaLightbulb } from "react-icons/fa";

const services = [
  {
    icon: <FaPenNib size={50} className="text-blue-500" />, 
    category: "Pre-Production Services",
    items: [
      { icon: <FaPaintBrush />, name: "Storyboard Development" },
      { icon: <FaTheaterMasks />, name: "Animatics & Previsualization" },
      { icon: <FaLightbulb />, name: "Concept Development" },
      { icon: <FaCube />, name: "Character & Asset Design" },
      { icon: <FaPenNib />, name: "Technical Scale Drawings" },
      { icon: <FaPaintBrush />, name: "Environmental Concept Art" },
      { icon: <FaCubes />, name: "3D Sculpting & Prototyping" }
    ]
  },
  {
    icon: <FaCubes size={50} className="text-blue-500" />, 
    category: "3D Production & Animation",
    items: [
      { icon: <FaCube />, name: "3D Character & Environment Modeling" },
      { icon: <FaPaintBrush />, name: "High-Quality Texturing & Shading" },
      { icon: <FaTheaterMasks />, name: "Advanced Facial & Motion Capture" },
      { icon: <FaCubes />, name: "Rigging & Skinning" },
      { icon: <FaLightbulb />, name: "Cinematic Animation Sequences" },
      { icon: <FaPenNib />, name: "Lighting & Scene Optimization" },
      { icon: <FaCube />, name: "Rendering & Post-Production" }
    ]
  },
  {
    icon: <FaUsers size={50} className="text-blue-500" />, 
    category: "Business & Client Solutions",
    items: [
      { icon: <FaUsers />, name: "Custom 2D & 3D Content Development" },
      { icon: <FaCube />, name: "High-Performance Workstation Rentals" },
      { icon: <FaLightbulb />, name: "Strategic Client Consultation & Support" },
      { icon: <FaUsers />, name: "End-to-End Project Management" },
      { icon: <FaCube />, name: "Industry-Specific Animation Solutions" },
      { icon: <FaLightbulb />, name: "Cross-Platform Content Optimization" }
    ]
  },
  {
    icon: <FaBoxOpen size={50} className="text-blue-500" />, 
    category: "Premium Creative Services",
    items: [
      { icon: <FaPaintBrush />, name: "Innovative Design & Branding Solutions" },
      { icon: <FaLightbulb />, name: "High-Impact Marketing & Visual Materials" },
      { icon: <FaUsers />, name: "Tailored Creative Project Execution" },
      { icon: <FaBoxOpen />, name: "Interactive Media & Experiential Design" },
      { icon: <FaPaintBrush />, name: "Custom Merchandise & Product Design" },
      { icon: <FaLightbulb />, name: "Augmented Reality & Virtual Reality Integration" }
    ]
  }
];


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='services' className="relative w-full pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold pb-10 text-white relative inline-block">Our Services
           <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-white mt-2 mx-auto"
            />
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-6 md:px-12 relative">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
             {/* Glowing Animation Wrapper */}
             <div className="glow-circle">
            <motion.div 
              className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
           
            >
              {service.icon}
            </motion.div>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{service.category}</h3>
            <AnimatePresence>
              {/* {activeIndex === index && ( */}
                <motion.div 
                  className="top-full left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg mt-4 w-60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-700 py-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </motion.div>
              {/* )} */}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
