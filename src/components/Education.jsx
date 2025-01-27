import { use, useEffect } from "react";
import AOS from "aos";  
import "aos/dist/aos.css"; 

const EducationData = [
  {
    year: '2018 - 2019',
    degree: 'Class 10th', class: 'Class 10th', subject: 'High School Certificate Examination', institute: 'Govt. H. S. Excellence School', location: 'Ujjain, Madhya Pradesh, India', result_name: 'Score', result: '94.60 %'
  },
  {
    year: '2020 - 2021',
    degree: 'Class 12th', class: 'Class 12th', subject: 'Physics, Chemistry, Mathematics', institute: 'Govt. H. S. Excellence School', location: 'Ujjain, Madhya Pradesh, India', result_name: 'Score', result: '95.20 %'
  },
  {
    year: '2022 - 2026', degree: 'Graduation', class: 'Bachelor of Technology', subject: 'Computer Science & Engineering', institute: 'Maulana Azad National Institute of Technology', location: 'Bhopal, Madhya Pradesh, India', result_name: 'Score', result: '9.46 CGPA'
  }
];

export default function Education() {
  useEffect(() => {   
    AOS.init({ duration: 500 }); // Initialize AOS
  }, []);

  return (
    <div id="education" className="pt-12 md:pt-24 min-h-screen">
      <div data-aos="fade-down" className='flex justify-center items-center text-5xl font-bold text-white'>Education</div>

      <div className='flex flex-wrap gap-10 justify-center px-6 md:px-16 my-16'>
        {EducationData &&
          EducationData.map((data, index) => (
            <div data-aos="zoom-in-up" key={index} className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto my-0 md:my-8 scale-[0.97] hover:scale-100 transition-transform duration-300 pb-2 min-h-[30vh] lg:min-h-[35vh] rounded-2xl shadow-lg bg-gradient-to-b from-gray-100 to-gray-200">
              {/* Year and Degree */}
              <div className="flex justify-between items-center py-4 px-6 border-b border-gray-300">
                <div className="bg-black text-yellow-500 text-xs md:text-sm font-bold py-2 px-4 rounded-lg">
                  {data.year}
                </div>
                <div className="bg-gray-300 text-black text-xs md:text-sm font-bold py-2 px-4 rounded-lg">
                  {data.degree}
                </div>
              </div>

              {/* Class and Subject */}
              <div className="px-6 py-4 space-y-2">
                <div className="text-lg md:text-xl font-semibold text-gray-800">
                  {data.class}
                </div>
                <div className="text-base md:text-lg font-medium text-gray-600">
                  {data.subject}
                </div>
              </div>

              {/* Institute and Location */}
              <div className="px-6 py-4 space-y-1">
                <div className="text-sm md:text-base font-medium text-gray-700">
                  {data.institute}
                </div>
                <div className="text-sm md:text-base font-medium text-gray-500">
                  {data.location}
                </div>
              </div>

              {/* Result */}
              <div className="flex gap-3 px-6 py-4">
                <div className="bg-gray-400 text-black text-xs md:text-sm font-bold py-1 px-3 rounded-full">
                  {data.result_name}
                </div>
                <div className="bg-gray-400 text-black text-xs md:text-sm font-bold py-1 px-3 rounded-full">
                  {data.result}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};