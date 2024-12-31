import StickyNavbar from "../../components/Navbar";

import React from "react";
import Benefits from "./Benefits";
import Applications from "./Application";
import FutureOfMFCs from "./FutureOfMfc";
import Team from "./TeamMem";

const About = () => {
  return (
    // About Section


   <div>
        <div>
             <StickyNavbar/>  
        </div>
    <div className="bg-gray-50 py-16">

<div className="container mx-auto px-6 lg:px-20">
  {/* Header Section */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-extrabold text-blue-700">
      About Microbial Fuel Cells
    </h1>
    <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
      Microbial Fuel Cells (MFCs) are an innovative clean energy technology
      that transforms organic waste into electricity while purifying wastewater.
      Discover how MFCs can lead us to a sustainable and eco-friendly future.
    </p>
  </div>

  {/* About Details */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Text Content */}
    <div className="text-gray-700 text-lg leading-relaxed">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        What are Microbial Fuel Cells?
      </h2>
      <p>
        Microbial Fuel Cells (MFCs) use microorganisms to convert organic
        waste into electrical energy. This innovative process simultaneously
        generates power and treats wastewater, providing dual environmental
        benefits.
      </p>
      <p className="mt-4">
        MFCs are a breakthrough in clean energy technology, offering a sustainable
        solution to global energy and water challenges. With low emissions and
        high efficiency, they pave the way for a greener future.
      </p>
    </div>

    {/* Image Section */}
    <div>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Microbial Fuel Cell Technology"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>

  {/* Benefits Section */}
  <div className="mt-12">
    <Benefits/>
  </div>

  {/* Call to Action */}
  <div className="mt-12 text-center">
    <h3 className="text-xl font-bold text-blue-700 mb-4">
      Want to Learn More or Place an Order?
    </h3>
    <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition">
      Explore Products
    </button>
  </div>
    {/* Application */}
    <div>
        <Applications/>
    </div>

    {/* Future */}
    <div>
        <FutureOfMFCs/>

    </div>

  {/* Team Members Section */}
  <Team/>
</div>
</div>
   </div>
  );
};

export default About;
