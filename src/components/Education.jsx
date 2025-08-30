import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationData = [
  {
    year: '2022 - 2026',
    icon: <FaUniversity className="text-4xl text-cyan-400" />,
    degree: 'Bachelor of Technology',
    class: 'Computer Science & Engineering',
    institute: 'Maulana Azad National Institute of Technology',
    location: 'Bhopal, Madhya Pradesh, India',
    result: '9.27 CGPA',
    highlights: [
      'Specializing in Computer Science & Engineering',
      'Vice President of Evole Technical Club',
      'Active participant in technical events and hackathons'
    ]
  },
  {
    year: '2020 - 2021',
    icon: <FaGraduationCap className="text-4xl text-blue-400" />,
    degree: 'Class 12th',
    institute: 'Govt. H. S. Excellence School',
    location: 'Ujjain, Madhya Pradesh, India',
    result: '95.20 %',
    highlights: [
      'Physics, Chemistry, Mathematics',
      'Active participation in science exhibitions'
    ]
  },
  {
    year: '2018 - 2019',
    icon: <FaSchool className="text-4xl text-purple-400" />,
    degree: 'Class 10th',
    institute: 'Govt. H. S. Excellence School',
    location: 'Ujjain, Madhya Pradesh, India',
    result: '94.60 %',
    highlights: [
      '99 marks in Mathematics',
      'NCC A certificate'
    ]
  }
];

const EducationCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative w-full md:w-[80%] lg:w-full backdrop-blur-sm"
    >
      <div className="relative p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group">
        {/* Year Badge */}
        <div className="absolute -top-4 left-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          {data.year}
        </div>

        <div className="mt-4 space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-gray-700 transition-colors">
              {data.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {data.degree}
              </h3>
              <p className="text-gray-400">{data.class}</p>
            </div>
          </div>

          {/* Institute Info */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-300">{data.institute}</h4>
            <p className="text-gray-400">{data.location}</p>
          </div>

          {/* Result Badge */}
          <div className="inline-block bg-gray-700/50 text-cyan-400 px-4 py-2 rounded-lg font-medium">
            Score: {data.result}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h5 className="text-sm font-medium text-gray-400">Highlights:</h5>
            <ul className="space-y-1">
              {data.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Education Journey
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My academic path has been marked by consistent excellence and a passion for technology and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {EducationData.map((data, index) => (
              <div key={index} className={`relative flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center justify-center gap-8`}>
                <div className="w-full md:w-1/2 flex justify-end">
                  <EducationCard data={data} index={index} />
                </div>
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;