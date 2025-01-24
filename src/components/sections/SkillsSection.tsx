'use client';

import React from 'react';
import { Code2, Wrench, Library } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/ThemeContext';

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "HTML/CSS", "R"],
    color: "blue",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "Visual Studio", "Supabase", "Clerk", "PyCharm", "Docker", "Eclipse", "JUnit", "Command Line"],
    color: "purple",
  },
  {
    title: "Libraries & Frameworks",
    icon: Library,
    skills: ["React", "Tailwind CSS", "Next.js", "NumPy", "Matplotlib", "Pandas"],
    color: "cyan",
  },
];

const SkillsSection = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-padding ${
        theme === 'dark' ? 'bg-[var(--about-bg)]' : 'bg-[var(--about-bg)]'
      } transition-colors duration-300`}
    >
      <div className="container-width">
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } mb-12 transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
              } rounded-2xl p-6 hover:shadow-2xl transition-transform duration-500 transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${category.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-3 bg-${category.color}-500/10 dark:bg-${category.color}-500/20 rounded-xl`}
                  >
                    <category.icon className={`w-6 h-6 text-${category.color}-500`} />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group/skill relative px-3 py-2 ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                      } rounded-lg hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1`}
                    >
                      <div
                        className={`absolute inset-0 bg-${category.color}-500/10 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}
                      />
                      <span
                        className={`relative ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;