'use client';

import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const courses = [
  "Introduction to Python",
  "Introduction to Java and OOP",
  "Data Structures and Problem Solving",
  "Tools and Techniques for Software Development",
  "Large-scale and Open Source Software Development",
  "Discrete Mathematics",
  "Introduction to Data Science"
];

const EducationSection = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="education" 
      className={`section-padding ${
        theme === 'dark' ? 'bg-[#0B1121]' : 'bg-gray-50'
      } transition-colors duration-300`}
    >
      <div className="container-width">
        <h2 className={`text-3xl md:text-4xl font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        } mb-12 transition-colors duration-300`}>
          Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <div className="flex items-start space-x-4">
              <div className={`p-3 ${
                theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
              } rounded-xl`}>
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Dickinson College
                </h3>
                <p className="text-blue-500 font-medium mt-1">
                  Bachelor of Science in Computer Science and Data Analytics
                </p>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                } mt-1`}>
                  Carlisle, PA • Aug 2023 - June 2027
                </p>
              </div>
            </div>
          </div>

          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <div className="flex items-start space-x-4">
              <div className={`p-3 ${
                theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
              } rounded-xl`}>
                <School className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Maple Leaf International School
                </h3>
                <p className="text-purple-500 font-medium mt-1">
                  O&apos;levels and A&apos;Levels
                </p>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                } mt-1`}>
                  2019-2022
                </p>
              </div>
            </div>
          </div>

          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <div className="flex items-start space-x-4 mb-6">
              <div className={`p-3 ${
                theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
              } rounded-xl`}>
                <BookOpen className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Relevant Coursework
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;