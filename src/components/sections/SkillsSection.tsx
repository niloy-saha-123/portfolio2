'use client';

import React from 'react';
import { Code2, Wrench, Library, Database, TestTube } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const skillCategories = [
  {
    title: "Languages & Core Technologies",
    icon: Code2,
    skills: ["Java", "Python", "TypeScript", "JavaScript", "C", "R", "HTML5", "CSS"],
    color: "blue",
    glow: "#3b82f6"
  },
  {
    title: "Frameworks & Libraries",
    icon: Library,
    skills: ["React", "Next.js", "Vue.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "NumPy", "Pandas", "Matplotlib"],
    color: "cyan",
    glow: "#00f0ff"
  },
  {
    title: "Database & Backend",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Supabase", "Clerk", "JSON Web Tokens", "AWS Lambda"],
    color: "green",
    glow: "#10b981"
  },
  {
    title: "Development & Deployment Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Vite", "Vercel", "Render", "VS Code", "PyCharm", "Eclipse"],
    color: "purple",
    glow: "#8b5cf6"
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Cypress", "Selenium", "JUnit5", "Pytest"],
    color: "orange",
    glow: "#f97316"
  },
];

const SkillsSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="py-28 px-6 lg:px-12 bg-[var(--background)] transition-colors duration-300"
    >
      <style jsx>{`
        .skill-item:hover {
          box-shadow: 0 0 12px var(--glow-color);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } mb-12`}
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
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
                        : category.color === 'green'
                        ? 'bg-green-500/10 dark:bg-green-500/20'
                        : category.color === 'orange'
                        ? 'bg-orange-500/10 dark:bg-orange-500/20'
                        : `bg-${category.color}-500/10 dark:bg-${category.color}-500/20`
                    } rounded-lg`}
                  >
                    <category.icon className={`w-5 h-5 ${
                      category.color === 'cyan' 
                        ? 'text-cyan-500' 
                        : category.color === 'green'
                        ? 'text-green-500'
                        : category.color === 'orange'
                        ? 'text-orange-500'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;