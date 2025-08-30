import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    {
        name: "ArthoScan",
        description: "A deep learning platform revolutionizing arthritis diagnosis through knee X-ray analysis. Features AI-generated diagnostic reports, progression tracking, and comprehensive patient history management.",
        category: "AI/ML",
        date: "March 2025",
        technologies: ["React", "Tailwind", "FastAPI", "PyTorch", "Google Gemini"],
        features: [
            "AI-powered diagnostic reports",
            "User history tracking",
            "Scan comparison for progression monitoring",
            "Machine learning model with 95% accuracy"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        github: "https://github.com/pecee06/manitXthapar_hackathon",
        demo: "https://github.com/pecee06/manitXthapar_hackathon",
        featured: true
    },
    {
        name: "Talk-in",
        description: "Advanced real-time chat application with AI-powered chatbot integration. Features modern UI, real-time messaging, and secure authentication.",
        category: "Full Stack",
        date: "November 2024",
        technologies: ["React", "Express", "Tailwind", "MongoDB", "Socket.io", "Google Gemini"],
        features: [
            "Real-time messaging with Socket.io",
            "AI chatbot integration",
            "JWT-based authentication",
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        github: "https://github.com/Abhinavchawda/talk-in",
        demo: "https://github.com/Abhinavchawda/talk-in",
        featured: true
    },
    {
        name: "Shop-in",
        description: "Full-featured E-commerce platform with comprehensive admin dashboard, product management, and secure payment integration.",
        category: "Full Stack",
        date: "May 2024",
        technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
        features: [
            "Advanced search & filtering",
            "Secure user authentication",
            "Shopping cart & checkout",
            "Admin dashboard with analytics"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
        github: "https://github.com/Abhinavchawda/shop-in",
        demo: "https://shop-in-chi.vercel.app",
        featured: true
    }
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/50 z-10" />
                <img 
                    src={project.image || "https://via.placeholder.com/400x200"} 
                    alt={project.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20">
                    {project.featured && (
                        <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full flex items-center animate-pulse">
                            <FaStar className="mr-1" /> Featured
                        </span>
                    )}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <span className="text-sm text-gray-400">{project.date}</span>
                </div>

                <p className="text-gray-300 text-sm line-clamp-3">
                    {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                        {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex justify-end space-x-4 pt-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-white transition-colors flex items-center font-semibold"
                    >
                        <FaGithub className="mr-2" />
                        Code
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-white transition-colors flex items-center font-semibold"
                    >
                        <FaExternalLinkAlt className="mr-2" />
                        Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectFilters = ({ currentFilter, onFilterChange }) => {
    const filters = ["All", "AI/ML", "Full Stack"];
    
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        currentFilter === filter
                            ? "bg-cyan-500 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default function Projects() {
    const [filter, setFilter] = useState("All");
    
    useEffect(() => {   
        AOS.init({ duration: 500 });
    }, []);

    const filteredProjects = projects.filter(project => 
        filter === "All" ? true : project.category === filter
    );

    return (
        <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                            Featured Projects
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Explore my latest works showcasing a blend of innovation, technical expertise, and creative problem-solving.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <ProjectFilters currentFilter={filter} onFilterChange={setFilter} />
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={project.name} 
                                project={project}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};