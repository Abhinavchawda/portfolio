import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmitStatus("success");
        setIsSubmitting(false);
        
        // Reset form after success
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitStatus(null);
        }, 3000);
    };
    return (
        <footer id="footer" className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    Abhinav Chawda
                                </span>
                            </h2>
                            <p className="mt-2 text-gray-400 max-w-md">
                                Transforming ideas into reality through innovative software solutions.
                            </p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-200">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="https://github.com/Abhinavchawda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <FaGithub size={24} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="https://linkedin.com/in/abhinav-chawda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <FaLinkedin size={24} />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-200 mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a href="tel:+919516510552" className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaPhoneAlt />
                                    <span>+91 9516510552</span>
                                </a>
                                <a href="mailto:abhinavchawda23@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaEnvelope />
                                    <span>abhinavchawda23@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-gray-200 mb-4">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    isSubmitting 
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                                }`}
                            >
                                <FaPaperPlane className={isSubmitting ? 'animate-bounce' : ''} />
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            </motion.button>
                            
                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-400 text-center"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Abhinav Chawda. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;