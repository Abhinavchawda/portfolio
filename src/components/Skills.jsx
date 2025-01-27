// import AOS from "aos";
// import "aos/dist/aos.css";

// import React, { useEffect } from "react";
// import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa"; // Importing icons
// import { SiExpress, SiMongodb, SiRedux } from "react-icons/si"; // Importing additional icons

// const skills = [
//     { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, url: "https://www.mongodb.com/" },
//     { name: "Express.js", icon: <SiExpress className="text-gray-300" />, url: "https://expressjs.com/" },
//     { name: "React", icon: <FaReact className="text-cyan-400" />, url: "https://reactjs.org/" },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, url: "https://nodejs.org/" },
//     { name: "SQL", icon: <FaDatabase className="text-blue-500" />, url: "https://www.w3schools.com/sql/" },
//     { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" />, url: "https://git-scm.com/" },
//     // { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, url: "https://tailwindcss.com/" },
//     { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" />, url: "https://redux-toolkit.js.org/" },
//     { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
// ];

// const Skills = () => {
//     useEffect(() => {
//         AOS.init({ duration: 500 }); // Initialize AOS
//     }, []);

//     return (
//         <div id="skills" className="skills py-24 bg-black">
//             <h2 data-aos="fade-down" className="text-center text-5xl font-bold text-white">
//                 Technical Skills
//             </h2>

//             <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-20">
//                 {skills.map((skill, index) => (
//                     <span
//                         data-aos="flip-left"
//                         key={index}
//                     >
//                         <a
//                             href={skill.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="group flex flex-col items-center text-center text-white transition transform hover:scale-105 hover:shadow-lg p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500"
//                         >
//                             {/* Skill Icon */}
//                             <div className="text-5xl bg-gray-800 rounded-full p-4 flex items-center justify-center mb-4">
//                                 {skill.icon}
//                             </div>
//                             {/* Skill Name */}
//                             <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
//                                 {skill.name}
//                             </h3>
//                         </a>
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Skills;

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaDocker, FaAws } from "react-icons/fa"; 
import { SiTailwindcss, SiExpress, SiMongodb, SiRedux, SiTypescript, SiGraphql, SiJest } from "react-icons/si"; 

const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    // { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, url: "https://www.typescriptlang.org/" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, url: "https://reactjs.org/" },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" />, url: "https://redux-toolkit.js.org/" },
    // { name: "Next.js", icon: <FaReact className="text-black" />, url: "https://nextjs.org/" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, url: "https://nodejs.org/" },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, url: "https://expressjs.com/" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, url: "https://www.mongodb.com/" },
    { name: "SQL", icon: <FaDatabase className="text-blue-500" />, url: "https://www.w3schools.com/sql/" },
    // { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, url: "https://tailwindcss.com/" },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" />, url: "https://git-scm.com/" }
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 500 }); // Initialize AOS
    }, []);

    return (
        <div id="skills" className="skills py-24 bg-black">
            <h2 data-aos="fade-down" className="text-center text-5xl font-bold text-white">
                Technical Skills
            </h2>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-20">
                {skills.map((skill, index) => (
                    <span
                        data-aos="flip-left"
                        key={index}
                    >
                        <a
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center text-center text-white transition transform hover:scale-105 hover:shadow-lg p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500"
                        >
                            {/* Skill Icon */}
                            <div className="text-5xl bg-gray-800 rounded-full p-4 flex items-center justify-center mb-4">
                                {skill.icon}
                            </div>
                            {/* Skill Name */}
                            <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                                {skill.name}
                            </h3>
                        </a>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;