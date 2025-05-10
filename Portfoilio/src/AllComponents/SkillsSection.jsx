import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillsData = {
    languages: {
      title: 'Programming Languages',
      description: 'Languages I use to bring ideas to life',
      skills: ['js', 'ts', 'py', 'cpp', 'c', 'java']
    },
    frontend: {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user experiences',
      skills: ['html', 'css', 'tailwind', 'bootstrap', 'react', 'redux', 'nextjs']
    },
    backend: {
      title: 'Backend Development',
      description: 'Building robust server-side applications',
      skills: ['nodejs', 'express', 'mongodb', 'mysql', 'firebase']
    },
    tools: {
      title: 'Development Tools',
      description: 'Tools that enhance my development workflow',
      skills: ['docker', 'aws', 'netlify', 'git', 'github', 'gitlab', 'npm', 'vscode', 'wordpress']
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section 
      id="skills-section" 
      className="min-h-screen bg-[#11071F] py-12 sm:py-16 md:py-24 relative overflow-hidden font-[Preahvihear]"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section heading with animated border */}
        <div className={`text-center mb-10 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="inline-block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative">
            My Technical Skills
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 animate-width-expand"></span>
          </h2>
          <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Technologies and tools I've mastered throughout my development journey
          </p>
        </div>

        {/* 3D Rotating Tabs */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 px-2">
          <div className="bg-gray-900/60 backdrop-blur-sm p-1 sm:p-2 rounded-full inline-flex shadow-lg shadow-blue-900/20 flex-wrap justify-center">
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                className={`px-3 py-2 sm:px-6 md:px-8 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white transform scale-105 shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab === 'languages' && 'Languages'}
                {tab === 'frontend' && 'Frontend'}
                {tab === 'backend' && 'Backend'}
                {tab === 'tools' && 'Tools'}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content with Animation */}
        <div className="max-w-6xl mx-auto">
          {Object.keys(skillsData).map((category) => (
            <div
              key={category}
              className={`transition-all duration-500 ${
                activeTab === category ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <div className="text-center mb-6 sm:mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl text-blue-400 font-medium mb-2 sm:mb-3">
                  {skillsData[category].title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base px-4">
                  {skillsData[category].description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
                {skillsData[category].skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`transform transition-all duration-700 delay-${index * 100} ${
                      activeTab === category ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div
                      className="relative bg-gray-900 rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center transition-transform duration-300 group-hover:transform group-hover:-translate-y-2"
                    >
                      <div className="p-2 sm:p-3 rounded-full bg-gray-800/80 mb-2 sm:mb-4">
                        <img
                          src={`https://skillicons.dev/icons?i=${skill}`}
                          alt={skill}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        />
                      </div>
                      <span className="text-gray-200 font-medium uppercase text-xs sm:text-sm tracking-wider">
                        {skill}
                      </span>
                      <div className="h-1 w-0 group-hover:w-12 sm:group-hover:w-16 bg-blue-500 mt-2 sm:mt-3 transition-all duration-300"></div>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes grow {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes width-expand {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        .animate-width-expand {
          animation: width-expand 1.5s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default SkillsSection;