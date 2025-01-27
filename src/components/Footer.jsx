import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className="bg-gradient-to-b from-gray-900 to-black text-white py-6 md:py-10 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-16">
        <div className="flex-1">
          <h2 className="font-bold text-3xl text-blue-500 leading-tight">
            Abhinav Chawda
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Showcasing my projects and skills with a touch of creativity.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/Abhinavchawda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://in.linkedin.com/in/abhinav-chawda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-blue-400" />
            <p className="text-gray-300">
              <span className="font-medium text-white">Phone:</span> +91 9516510552
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400" />
            <p className="text-gray-300">
              <span className="font-medium text-white">Email:</span> abhinavchawda23@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="1"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Divider and Bottom Note */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2024 Portfolio Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;