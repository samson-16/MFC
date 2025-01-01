import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Message sent:", formData);
    setMessageSent(true);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="py-16 px-6 lg:px-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-blue-700">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions or want to learn more about Microbial Fuel Cells?
            Contact us, and we’ll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            {!messageSent ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
                    placeholder="Enter your message here"
                    rows="5"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="text-3xl font-bold text-blue-700">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="mt-4 text-gray-700">
                    We’ve received your message and will get back to you soon.
                    If you need immediate assistance, feel free to call us.
                  </p>
                </motion.div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">Contact Details</h3>
            <p className="mt-4 text-gray-700">
              <strong>Address:</strong> 123 Clean Energy Blvd, Innovation City,
              EC 12345
            </p>
            <p className="mt-4 text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@mfcsolutions.com"
                className="text-blue-600 hover:underline"
              >
                info@mfcsolutions.com
              </a>
            </p>
            <p className="mt-4 text-gray-700">
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +1 234 567 890
              </a>
            </p>
            <div className="mt-6 space-y-4">
              <p className="text-gray-700">
                We’re here to help you make the most out of Microbial Fuel
                Cells. Don’t hesitate to reach out for any assistance!
              </p>
              <p className="text-gray-700">
                Office Hours: <strong>Mon-Fri, 9 AM - 5 PM</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
