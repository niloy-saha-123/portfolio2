'use client';

import React from 'react';
import { ExternalLink, Github, Bot, Brain } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const projects = [
  {
    title: "StudyBuddy - AI-Powered Learning Platform",
    period: "Dec. 2023 – Present",
    description: [
      "Designed and launched an AI-powered learning platform that transforms lecture content into structured study materials, integrating live transcription, interactive note-taking, and dynamic demo questions, providing value to 50+ active users.",
      "Engineered a responsive UI with Next.js and TypeScript, implementing real-time AI transcription and summarization, achieving a 98% accuracy rate and enhancing study efficiency for users."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs", "React", "Clerk"],
    link: "https://studybuddy-e7ys.onrender.com/",
    github: "https://github.com/niloy-saha-123/StudyBuddy",
    icon: Bot,
    color: { light: '#3b82f6', dark: '#60a5fa' }
  },
  {
    title: "Automated Sentiment Analysis",
    period: "Nov. 2023 – Dec. 2023",
    description: [
      "Developed a machine learning-based sentiment analysis system using Python for processing movie reviews.",
      "Achieved 82% accuracy on a dataset of 5000+ reviews, with 95% precision for strongly positive/negative sentiments."
    ],
    technologies: ["Python", "Data Processing", "Machine Learning"],
    icon: Brain,
    color: { light: '#8b5cf6', dark: '#a78bfa' }
  }
];

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } mb-16 text-center`}
        >
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:shadow-[0_4px_24px_rgba(255,255,255,0.1)]' 
                  : 'bg-white border-gray-200 hover:shadow-lg'
              } rounded-xl p-8 transition-all duration-300 border`}
            >
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${
                    theme === 'dark' ? project.color.dark : project.color.light
                  }08 0%, transparent 100%)`
                }}
              />

              <div className="relative space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-5">
                    <div 
                      className="p-3 rounded-lg shrink-0"
                      style={{
                        backgroundColor: theme === 'dark' 
                          ? `${project.color.dark}20`
                          : `${project.color.light}10`
                      }}
                    >
                      <project.icon 
                        className="w-6 h-6"
                        style={{
                          color: theme === 'dark' ? project.color.dark : project.color.light
                        }}
                      />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
                        {project.period}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 md:mt-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg ${
                          theme === 'dark' 
                          ? 'hover:bg-gray-700/50' 
                          : 'hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <Github className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg ${
                          theme === 'dark' 
                          ? 'hover:bg-gray-700/50' 
                          : 'hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <ExternalLink className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className={`space-y-4 text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description.map((desc, i) => (
                    <p key={i} className="relative z-10">
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-medium rounded-full"
                      style={{
                        backgroundColor: theme === 'dark' 
                          ? `${project.color.dark}20`
                          : `${project.color.light}10`,
                        color: theme === 'dark' ? project.color.dark : project.color.light
                      }}
                    >
                      {tech}
                    </span>
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

export default ProjectsSection;