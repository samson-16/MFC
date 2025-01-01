import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const TechnologyPage = () => {
  return (
     <div>
        <div>
            <Navbar/>
        </div>
        <div className="bg-gray-100 py-16">
      {/* Page Header */}
      <div className="text-center px-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Microbial Fuel Cell (MFC) Technology
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Dive into the fascinating world of Microbial Fuel Cells, where biology
          meets innovation to revolutionize energy production and waste
          management.
        </motion.p>
      </div>

      
      {/* Section 2: How MFCs Work */}
<div className="mt-16 bg-white py-12 px-6 lg:px-20">
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    How Do Microbial Fuel Cells Work?
  </motion.h2>
  <motion.p
    className="mt-4 text-gray-600 text-lg leading-relaxed"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Microbial Fuel Cells (MFCs) harness the metabolic activities of bacteria that break down organic compounds in the anode chamber. During this process, electrons are released and flow through an external circuit, generating electricity. At the same time, protons pass through a semi-permeable membrane to the cathode chamber, where they combine with oxygen to form water.
  </motion.p>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
    <motion.img
      src="https://via.placeholder.com/500"
      alt="MFC Diagram"
      className="rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
    <motion.p
      className="text-gray-600 text-lg leading-relaxed"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
    >
      This biological process generates electricity sustainably while treating wastewater effectively. By combining energy production with waste treatment, MFCs present a dual-purpose, eco-friendly solution that addresses environmental challenges such as energy scarcity and pollution.
    </motion.p>
  </div>
</div>


      {/* Section 3: Applications */}
      <div className="mt-16 py-12 px-6 lg:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Applications of Microbial Fuel Cells
        </motion.h2>
        <motion.ul
          className="mt-4 list-disc list-inside text-gray-600 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <li>Wastewater treatment and energy recovery.</li>
          <li>Powering small, remote sensors and devices.</li>
          <li>Environmental monitoring and biosensors.</li>
          <li>Educational and research purposes.</li>
        </motion.ul>
      </div>

      {/* Section 4: Advantages */}
      <div className="mt-16 bg-green-100 py-12 px-6 lg:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Microbial Fuel Cells?
        </motion.h2>
        <motion.ul
          className="mt-4 list-disc list-inside text-gray-600 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <li>Sustainable and renewable energy source.</li>
          <li>Reduces dependency on fossil fuels.</li>
          <li>Dual benefits of energy generation and waste management.</li>
          <li>Low operational costs and minimal maintenance.</li>
        </motion.ul>
      </div>

      <section className="mt-16 px-6 lg:px-20">
  <motion.div
    className="bg-white shadow-xl rounded-lg p-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2 inline-block">
      Challenges in MFC Technology
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Challenge 1 */}
      <div className="flex items-start space-x-4">
        <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Low Power Output</h3>
          <p className="text-gray-600 mt-2">
            Current MFCs produce relatively low electricity compared to conventional power sources, limiting their applications to small-scale devices.
          </p>
        </div>
      </div>

      {/* Challenge 2 */}
      <div className="flex items-start space-x-4">
        <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 3v4.25M9.75 17v4.25m4.5-20.5v4.25m0 8.5v4.25"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">High Initial Costs</h3>
          <p className="text-gray-600 mt-2">
            The materials and setup required for efficient MFCs can be expensive, making it challenging for widespread adoption in low-income areas.
          </p>
        </div>
      </div>

      {/* Challenge 3 */}
      <div className="flex items-start space-x-4">
        <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h11m-9 4h9m2 4h1m-4-8h3m2-4h1"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Scaling Issues</h3>
          <p className="text-gray-600 mt-2">
            Scaling MFC systems for industrial or large-scale use remains a challenge due to complex engineering requirements and performance consistency.
          </p>
        </div>
      </div>

      {/* Challenge 4 */}
      <div className="flex items-start space-x-4">
        <div className="bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 20h10M9 8h6m-3-6v6"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Limited Bacterial Efficiency</h3>
          <p className="text-gray-600 mt-2">
            The efficiency of bacteria in converting organic matter to energy varies greatly, requiring further research to optimize and standardize performance.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</section>

      {/* Call to Action */}
      <div className="mt-16 bg-green-500 text-white py-10 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join the Green Energy Revolution!
        </motion.h2>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore the endless possibilities of Microbial Fuel Cells. Order your
          MFCs today and be a part of the clean energy future.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Order Now
        </motion.button>
      </div>
    </div>
     </div>
  );
};

export default TechnologyPage;
