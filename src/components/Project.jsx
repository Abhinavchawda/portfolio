import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';

import AOS from "aos"; 
import "aos/dist/aos.css"; 

const projects = [
    {
        name: "Talk-in: A Real-Time Chat Application",
        description:
            "Talk-in is a real-time chat application enabling seamless user communication with features like JWT-based authentication, persistent messaging.",
        category: "Web Application",
        technologies: ["Socket.IO", "React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
        image: "https://via.placeholder.com/300", // Replace with your project image
        link: "https://github.com/Abhinavchawda/talk-in",
        colors: {
            primary: "rgba(23, 23, 74, 0.85)",
            secondary: "rgba(86, 86, 252, 0.85)",
            category: "rgba(51, 51, 123, 0.7)",
            button: "rgba(51, 51, 123, 0.7)",
        },
    },
    {
        name: "Shop-in: Full-Stack E-Commerce Website",
        description:
            "A comprehensive e-commerce platform featuring advanced search, dynamic filtering, product management by admin, and responsive design. Optimized for scalability and performance.",
        category: "Web Application",
        technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Cookies"],
        image: "https://via.placeholder.com/300",
        link: "https://shop-in-chi.vercel.app/",
        colors: {
            primary: "rgba(74, 59, 23, 0.95)",
            secondary: "rgba(252, 202, 86, 0.85)",
            category: "rgba(123, 101, 51, 0.8)",
            button: "rgba(123, 101, 51, 0.9)",
        },
    },
    {
        name: "Nirvana: Mental Wellness Platform",
        description:
            "Developed for ISTE Version Beta Hackathon'24, Nirvana is a mental wellness app offering interactive content, journaling tools, meditation and breathing sessions, mindful games and real-time group discussions using WebSocket technologies.",
        category: "Hackathon Project",
        technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO"],
        image: "https://via.placeholder.com/300",
        link: "https://github.com/Abhinavchawda/beta_15_ps_2",
        colors: {
            primary: "rgba(74, 23, 23, 0.85)",
            secondary: "rgba(252, 86, 86, 0.85)",
            category: "rgba(123, 51, 51, 0.7)",
            button: "rgba(123, 51, 51, 0.7)",
        },
    },
    {
        name: "My-Todo: Productivity Management App",
        description:
            "A minimalistic, yet powerful to-do list application for task management with real-time updates, drag-and-drop sorting, and persistent storage.",
        category: "Web Application",
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        image: "https://via.placeholder.com/300",
        link: "https://github.com/Abhinavchawda/my-todo/",
        colors: {
            primary: "rgba(23, 74, 59, 0.85)",
            secondary: "rgba(86, 252, 202, 0.85)",
            category: "rgba(51, 123, 101, 0.7)",
            button: "rgba(51, 123, 101, 0.7)",
        },
    },
];

export default function ProjectSlider() {
    useEffect(() => {   
        AOS.init({ duration: 500 }); // Initialize AOS
    }, []);

    return (
        <div id='projects' className="py-12 mb-24 md:pt-24 lg:min-h-screen">
            <h2 data-aos="fade-down" className="flex justify-center items-center text-5xl font-bold text-white">Projects</h2>
            <div className='mt-16'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true, // This ensures autoplay continues after interacting with the slider
                    }}
                    // navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Autoplay, Pagination]} // Add modules to Swiper for functionality
                    className="w-[90%] mx-auto"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`project flex flex-col md:flex-row items-center gap-6 p-6 text-white mx-auto mt-10 w-[90%] lg:w-[70%] rounded-3xl shadow-lg`}
                                style={{
                                    background: `linear-gradient(135deg, ${project.colors.primary} 30%, ${project.colors.secondary} 100%)`,
                                }}
                            >
                                {/* Project Image */}
                                <div
                                    className="image rounded-3xl h-[200px] md:h-[300px] w-full md:w-[40%] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>

                                {/* Project Content */}
                                <div className="content flex flex-col justify-between gap-4 w-full">
                                    {/* Project Name */}
                                    <h3 className="font-bold text-2xl text-white">{project.name}</h3>

                                    {/* Project Description */}
                                    <p className="text-gray-100 text-sm md:text-base">{project.description}</p>

                                    {/* Category */}
                                    <div className="text-gray-200 text-sm">
                                        <span
                                            className="inline-block px-3 py-1"
                                            style={{
                                                background: `${project.colors.category}`,
                                                color: "white",
                                                borderRadius: "9999px",
                                            }}
                                        >
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Technologies Used */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-white text-black px-4 py-1 rounded-3xl text-sm font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Project Button */}
                                    <div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-white font-semibold text-center px-5 py-2 rounded-3xl border border-white transition duration-300"
                                            style={{
                                                background: `${project.colors.button}`,
                                                borderColor: "white",
                                            }}
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};