'use client';

import { Building2, Briefcase, Code } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "FarmData2",
    location: "Carlisle, Pennsylvania, United States",
    period: "May 2025 – Jul. 2025",
    description: [
      "Developed and refactored a suite of 10+ core UI components using Vue.js and BootstrapVueNext, resolving critical bugs that improved front-end stability and streamlined user workflows.",
      "Engineered a multi-pass logging system that automates the generation of 3+ new farm logs for each user submission, directly enhancing data fidelity for farm staff and USDA certification requirements.",
      "Authored and maintained 15+ Cypress test files, covering both end-to-end and component testing, to guarantee a robust quality assurance pipeline and 75%+ test coverage.",
      "Streamlined developer workflows and enhanced code quality by implementing Git pre-commit hooks that enforced linting rules, preventing the introduction of debug-only code and fostering a more collaborative environment."
    ]
  },
  {
    title: "Software Development Intern",
    company: "Development Initiative for Social Awareness (DISA)", 
    location: "Dhaka, Bangladesh",
    period: "Jul. 2024 – Aug. 2024",
    description: [
      "Built a microfinance management system with Bootstrap and JavaScript, integrating secure authentication and real-time data processing for 500+ users.",
      "Optimized MySQL queries, improving system efficiency by 40% and cutting data retrieval time by 25%, enhancing the Aloghar digital library's performance."
    ]
  },
  {
    title: "Student Researcher",
    company: "84 Lumber",
    location: "Carlisle, PA",
    period: "Nov. 2023 – Mar. 2024", 
    description: [
      "Engineered an ML-driven pipeline modernizing a 10,000+ line legacy C Basic codebase, enhancing processing efficiency and system maintainability.",
      "Translated 30% of a legacy C Basic codebase into Java and Python, improving code readability and system maintenance efficiency, boosting developer productivity."
    ]
  }
];

const ExperienceSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className="py-28 px-6 lg:px-12 bg-[var(--about-bg)] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-6xl font-bold mb-[6rem]">
            <span className="dark:text-purple-400 text-black transition-colors duration-300">
              Work Experience
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-4 bottom-4 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute z-10 left-1/2 w-8 h-8 transform -translate-x-1/2 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-glow-blue">
                  {index === 0 ? (
                    <Code className="w-4 h-4 text-white" />
                  ) : index === 1 ? (
                    <Building2 className="w-4 h-4 text-white" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>

              <div className={`md:w-[52.5%] px-8 mb-8 ${
                index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'
              }`}>
                <div className={`${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-6 shadow-xl transition-all duration-300 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {exp.title}
                  </h3>
                  <div className="text-blue-500 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <span>{exp.location}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li 
                        key={i}
                        className="flex items-start group"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-3 group-hover:scale-125 transition-transform duration-300" />
                        <span className={`${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        } transition-all duration-300 group-hover:[text-shadow:_0_0_6px_#93c5fd] dark:group-hover:[text-shadow:_0_0_8px_#3b82f6]`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;