import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaWater, FaGlobe } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaLeaf size={40} className="text-green-500 mb-4" />,
      title: "Clean Energy",
      description: `
        Microbial Fuel Cells offer a renewable energy solution by utilizing organic waste. 
        They reduce our dependency on fossil fuels, lower greenhouse gas emissions, 
        and pave the way for a cleaner, more sustainable energy future.
      `,
    },
    {
      icon: <FaWater size={40} className="text-blue-500 mb-4" />,
      title: "Wastewater Treatment",
      description: `
        MFCs not only generate energy but also efficiently purify wastewater. 
        By breaking down organic matter in waste streams, they produce clean water, 
        making them a dual-purpose solution for energy generation and resource recovery.
      `,
    },
    {
      icon: <FaGlobe size={40} className="text-yellow-500 mb-4" />,
      title: "Sustainable Solutions",
      description: `
        With low environmental impact and high efficiency, MFCs contribute to 
        sustainable development. They enable industries and communities to 
        adopt eco-friendly practices, driving a greener and more balanced world.
      `,
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Benefits of Microbial Fuel Cells
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Microbial Fuel Cells (MFCs) provide innovative solutions for energy generation and 
          environmental protection. Learn how MFCs drive sustainability and improve resource 
          management in various industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
