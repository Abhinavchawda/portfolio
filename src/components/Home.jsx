import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaGraduationCap, FaUsers, FaCrown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Stats Card Component
const StatsCard = ({ icon, title, subtitle, color }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className={`p-4 rounded-lg bg-gray-800/50 border border-gray-700 flex flex-col items-center justify-center space-y-2`}
    >
        <span className={`text-${color}-400 text-2xl`}>{icon}</span>
        <div className="text-center">
            <div className="text-white font-bold">{title}</div>
            <div className="text-gray-400 text-sm">{subtitle}</div>
        </div>
    </motion.div>
);

// Social Link Component
const SocialLink = ({ href, icon }) => (
    <motion.a
        whileHover={{ y: -2 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors"
    >
        {icon}
    </motion.a>
);

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        // Scroll indicator visibility
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(currentScrollPos < 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left space-y-8"
                    >
                        {/* Main Heading */}
                        <div className="space-y-4">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm md:text-base text-cyan-400 font-medium"
                            >
                                👋 Hi there, I'm
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-bold text-white"
                            >
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                    Abhinav Chawda
                                </span>
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-gray-400"
                            >
                                Building digital experiences that matter
                            </motion.h2>
                        </div>

                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-300 text-lg leading-relaxed"
                        >
                            A final year <span className="text-cyan-400">Computer Science Engineering</span> student 
                            at NIT Bhopal with a stellar <span className="font-bold text-yellow-400">9.27 CGPA</span>. 
                            Passionate about creating innovative solutions using the <span className="text-cyan-400">MERN stack</span>,{" "}
                            <span className="text-purple-400">Redux Toolkit</span>, and{" "}
                            <span className="text-pink-400">Socket.io</span>.
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6"
                        >
                            <motion.div whileHover={{ scale: 1.08 }} className="relative group">
                                <StatsCard icon={<FaGraduationCap className="animate-bounce" />} title="9.27" subtitle="CGPA" color="cyan" />
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-40 p-2 rounded bg-gray-900 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                    Consistently maintained a high CGPA throughout my engineering journey at NIT Bhopal.
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.08 }} className="relative group">
                                <StatsCard icon={<FaCode className="animate-spin-slow" />} title="MERN" subtitle="Stack Pro" color="blue" />
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-40 p-2 rounded bg-gray-900 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                    Developed multiple full-stack projects using MongoDB, Express, React, and Node.js.
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.08 }} className="relative group">
                                <StatsCard icon={<FaUsers className="animate-pulse" />} title="Vice" subtitle="President" color="purple" />
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-40 p-2 rounded bg-gray-900 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                    Led Evole Club, mentored peers, and organized impactful tech events at NIT Bhopal.
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.08 }} className="relative group">
                                <StatsCard icon={<FaCrown className="animate-bounce" />} title="Tech" subtitle="Leader" color="yellow" />
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-40 p-2 rounded bg-gray-900 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                    Recognized for leadership and innovation in technical projects and hackathons.
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-all"
                                onClick={() => window.location.href = "#projects"}
                            >
                                <FaCode /> View Projects
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center md:justify-start gap-6 pt-4"
                        >
                            <SocialLink href="https://github.com/Abhinavchawda" icon={<FaGithub size={24} />} />
                            <SocialLink href="https://linkedin.com/in/abhinav-chawda" icon={<FaLinkedin size={24} />} />
                        </motion.div>
                    </motion.div>

                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full md:w-1/2 flex justify-center"
                    >
                        {/* Animated Background Circle */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
                        
                        {/* Profile Image */}
                        <div className="relative">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative z-10"
                            >
                                <div className="relative rounded-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                                    <img
                                        src="https://res.cloudinary.com/dpxghbgfa/image/upload/v1737476640/evolve_web/PreFinalYear/MrAbhinavChawda.jpg"
                                        alt="Abhinav Chawda"
                                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;