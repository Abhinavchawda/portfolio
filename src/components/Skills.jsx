import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { FaJs, FaReact, FaGitAlt, FaDatabase, FaDocker, FaLinux, FaTools, FaPython } from "react-icons/fa"; 
import { SiTailwindcss, SiExpress, SiMongodb, SiSocketdotio, SiFastapi, SiC, SiCplusplus, SiWireshark } from "react-icons/si"; 

const skillCategories = [
    {
        category: "Languages & Core",
        skills: [
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "C", icon: <SiC className="text-blue-500" /> },
            { name: "C++", icon: <SiCplusplus className="text-purple-500" /> },
            { name: "Python", icon: <FaPython className="text-green-500" /> },
            { name: "HTML/CSS", icon: <FaTools className="text-orange-400" /> }
        ]
    },
    {
        category: "Frameworks & Libraries",
        skills: [
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
            { name: "Socket.io", icon: <SiSocketdotio className="text-black" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> }
        ]
    },
    {
        category: "Databases & Storage",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            { name: "SQL/DBMS", icon: <FaDatabase className="text-blue-500" /> }
        ]
    },
    {
        category: "Tools & Platforms",
        skills: [
            { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "Linux", icon: <FaLinux className="text-yellow-500" /> },
            { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
            { name: "Wireshark", icon: <SiWireshark className="text-cyan-500" /> }
        ]
    }
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 500 }); // Initialize AOS
    }, []);

    return (
        <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        Technical Skills
                    </span>
                </h2>

                <div className="space-y-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-8" data-aos="fade-right">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="group flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
                                        data-aos="flip-left"
                                        data-aos-delay={skillIndex * 100}
                                    >
                                        <div className="text-4xl bg-gray-700 rounded-full p-4 mb-4 group-hover:bg-gray-600 transition-colors">
                                            {skill.icon}
                                        </div>
                                        <h4 className="text-lg font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                                            {skill.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;