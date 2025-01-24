// src/app/page.tsx
'use client';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
 return (
   <main className="flex min-h-screen flex-col">
     <HeroSection />
     <AboutSection />
     <EducationSection />
     <ExperienceSection />
     <SkillsSection />
     <ProjectsSection />
     <ContactSection />
   </main>
 );
}