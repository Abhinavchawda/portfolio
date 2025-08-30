import { FaBriefcase, FaTools } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        Professional Experience
                    </span>
                </h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>

                    {/* Experience Card */}
                    <div className="relative mb-8">
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-blue-500 p-3 rounded-full z-10">
                                <FaBriefcase className="text-2xl text-white" />
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-blue-500 max-w-3xl mx-auto transform transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <h3 className="text-2xl font-bold text-cyan-400">Technical Intern</h3>
                                <div className="text-yellow-500 font-semibold">
                                    <span>June 2025 – August 2025</span>
                                </div>
                            </div>
                            <h4 className="text-xl text-blue-400 mb-4">Cisco Systems | Bengaluru, India</h4>
                            
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Integrated and tested support for BACnet, CoAP, and DICOM protocols in Cisco IOS XE operating system for switches.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Extended switch functionality with C/C++ modules, enabling secure and standards-compliant Industrial IoT communication.
                                </li>
                            </ul>

                            <div className="mt-6">
                                <h5 className="text-lg font-semibold text-blue-400 flex items-center mb-3">
                                    <FaTools className="mr-2" /> Technologies Used
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'C/C++',
                                        'Cisco IOS XE',
                                        'Wireshark',
                                        'tcpdump',
                                        'Git',
                                        'GitHub',
                                        'Industrial Switches',
                                        'PuTTY',
                                        'IoT Protocols'
                                    ].map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;