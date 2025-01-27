import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; 
import { FaGraduationCap, FaCrown, FaCode, FaUsers } from "react-icons/fa";

const Home = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS animations
    }, []);

    return (
        <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen py-16 px-6 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Content Section */}
            <div
                className="flex-1 text-center md:text-left space-y-6 mt-10 md:mt-0 ml-0 md:ml-10 lg:ml-20"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
                    Hello! <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        I’m Abhinav Chawda
                    </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-yellow-500">
                    Full-Stack Web Developer
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    I’m a pre-final year <span className="text-cyan-400">Computer Science Engineering</span> student at NIT Bhopal with a stellar{" "}
                    <span className="font-bold text-yellow-400">9.46 CGPA</span>. My expertise spans{" "}
                    <span className="text-cyan-400">MERN stack</span>,{" "}
                    <span className="text-purple-400">Redux Toolkit</span>,{" "}
                    <span className="text-pink-400">Socket.io</span>, and{" "}
                    <span className="text-orange-400">JWT Authentication</span>. Proficient in{" "}
                    <span className="text-green-400">Data Structures and Algorithms (DSA)</span>, I build scalable, efficient, and user-focused solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                    As the <span className="text-green-400 font-semibold">Vice President</span> of Evole: The Interdisciplinary Technical Club of NIT Bhopal, I lead impactful projects, organize events, and mentor peers in cutting-edge technologies, fostering a collaborative and innovative environment.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <button
                        onClick={() => window.location.href = "#projects"}
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 px-6 rounded-full hover:from-cyan-500 hover:to-blue-600 shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => window.location.href = "#footer"}
                        className="bg-black border border-blue-500 text-blue-500 py-3 px-6 rounded-full hover:bg-gray-700 shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Contact Me
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center mt-10 md:mt-0 relative" data-aos="fade-left">
                {/* Profile Image */}
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHnfoe9Cl8EAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729614600525?e=1740614400&v=beta&t=afKsfI5o-5q2XfyfMMSyD10dtYvalr5RT6Y4Rc63yOY"
                    alt="Profile"
                    className="rounded-full w-60 h-60 border-4 border-cyan-400 shadow-lg transform hover:scale-105 transition-transform duration-300"
                />

                {/* Achievements */}
                <div className="achievements grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-center space-y-2">
                        <FaGraduationCap className="text-green-400 text-4xl" />
                        <p className="text-lg font-semibold">9+ CGPA</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <FaCode className="text-cyan-400 text-4xl" />
                        <p className="text-lg font-semibold">MERN Stack Pro</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <FaUsers className="text-purple-400 text-4xl" />
                        <p className="text-lg font-semibold">Vice President</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <FaCrown className="text-yellow-400 text-4xl" />
                        <p className="text-lg font-semibold">Tech Leader</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;