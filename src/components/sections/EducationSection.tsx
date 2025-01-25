'use client';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School } from 'lucide-react';

const EducationSection = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <section ref={ref} id="education" className="py-32 px-6 lg:px-12 bg-[var(--background)] transition-colors">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-center">
          <h2 className={`text-7xl font-bold mb-20 lg:-ml-20 transform transition-all duration-1000 ${
            inView ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`group h-auto w-full rounded-2xl p-6 bg-[var(--card-bg)] shadow-lg 
            hover:shadow-[0_0_30px_8px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_30px_8px_rgba(59,130,246,0.15)]
            border dark:border-gray-200 
            transform transition-all duration-1000 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
            hover:-translate-y-2`}>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Dickinson College</h3>
                <p className="text-blue-500 font-medium mt-2">Computer Science & Data Analytics</p>
                <p className="text-[var(--text-secondary)] mt-2">Carlisle, PA • Aug 2023 - June 2027</p>
              </div>
            </div>
          </div>

          <div className={`group h-auto w-full rounded-2xl p-6 bg-[var(--card-bg)] shadow-lg 
            hover:shadow-[0_0_30px_8px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_0_30px_8px_rgba(139,92,246,0.15)]
            border dark:border-gray-200 
            transform transition-all duration-1000 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            hover:-translate-y-2`}>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                <School className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Maple Leaf International</h3>
                <p className="text-purple-500 font-medium mt-2">O&apos;levels and A&apos;Levels</p>
                <p className="text-[var(--text-secondary)] mt-2">Dhaka, Bangladesh • 2019-2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;