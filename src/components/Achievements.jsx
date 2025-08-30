import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            title: "Innovation Award",
            event: "Innovate Hackathon 2025",
            icon: <FaTrophy className="text-yellow-500 text-4xl" />
        },
        {
            title: "Finalist",
            event: "JP Morgan Chase Code for Good 2025",
            icon: <FaMedal className="text-blue-500 text-4xl" />
        },
        {
            title: "Top 10",
            event: "IIIT Jabalpur Hackathon 2025",
            icon: <FaStar className="text-purple-500 text-4xl" />
        }
    ];

    return (
        <section id="achievements" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        Achievements
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 border border-blue-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-3 rounded-full bg-gray-700">
                                    {achievement.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-cyan-400">{achievement.title}</h3>
                                <p className="text-gray-300">{achievement.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;