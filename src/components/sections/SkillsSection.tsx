'use client';

import React from 'react';
import { Code2, Wrench, Library } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "HTML/CSS", "R"],
    color: "blue",
    glow: "#3b82f6"
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "Visual Studio", "Supabase", "Clerk", "PyCharm", "Docker", "Eclipse", "JUnit", "Command Line"],
    color: "purple",
    glow: "#8b5cf6"
  },
  {
    title: "Libraries & Frameworks",
    icon: Library,
    skills: ["React", "Tailwind CSS", "Next.js", "NumPy", "Matplotlib", "Pandas"],
    color: "cyan",
    glow: "#00f0ff"
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
      className="py-28 px-6 lg:px-12 bg-[var(--background)] transition-colors duration-300"
    >
      <style jsx>{`
        .skill-item:hover {
          box-shadow: 0 0 12px var(--glow-color);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } mb-12`}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
              } rounded-2xl p-5 transition-all duration-300 border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
              }`}
            >
              <div className="relative space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 ${
                      category.color === 'cyan' 
                        ? 'bg-cyan-500/10 dark:bg-cyan-500/20' 
                        : `bg-${category.color}-500/10 dark:bg-${category.color}-500/20`
                    } rounded-lg`}
                  >
                    <category.icon className={`w-5 h-5 ${
                      category.color === 'cyan' 
                        ? 'text-cyan-500' 
                        : `text-${category.color}-500`
                    }`} />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-item relative px-2 py-1.5 rounded-md text-sm transition-all duration-300"
                      style={{ 
                        backgroundColor: theme === 'dark' ? '#1f2937' : '#f9fafb',
                        '--glow-color': `${category.glow}80`,
                      } as React.CSSProperties}
                    >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;