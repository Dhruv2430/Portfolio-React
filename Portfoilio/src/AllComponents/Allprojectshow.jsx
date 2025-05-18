import React, { useState, useEffect } from 'react';
import { Search, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const AllProjectShow = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: "CryptoMarket",
      category: "Web Development",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Paint Clone",
      category: "Web Development",
      image: "/api/placeholder/400/300",
      technologies: ["JavaScript", "Canvas"]
    },
    {
      id: 3,
      title: "Frontend CryptoMarket",
      category: "Web Development",
      image: "/api/placeholder/400/300",
      technologies: ["React", "API Integration"]
    },
    {
      id: 4,
      title: "College Management System",
      category: "Full Stack",
      image: "/api/placeholder/400/300",
      technologies: ["MERN Stack", "JWT", "MongoDB"]
    }
  ];

  const categories = ['All', 'Web Development', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white relative overflow-hidden">
      <div className="h-80 w-80 bg-gradient-to-r from-blue-700 to-purple-700 blur-3xl rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="h-64 w-64 bg-gradient-to-r from-indigo-700 to-pink-700 blur-3xl rounded-full opacity-20 absolute top-1/4 right-1/4 animate-pulse"></div>
      <div className="h-64 w-64 bg-gradient-to-r from-purple-700 to-blue-700 blur-3xl rounded-full opacity-20 absolute bottom-1/4 left-1/4 animate-pulse"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">My Projects</h1>
            <p className="text-gray-300 max-w-xl">Showcasing my creative work and technical expertise across various domains.</p>
          </div>

          <div className="mt-6 md:mt-0 w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 w-full md:w-64 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mb-10 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium'
                    : 'bg-gray-800/60 backdrop-blur-sm hover:bg-gray-700 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden h-72 animate-pulse">
                <div className="h-40 bg-gray-700/50"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-700/50 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-700/50 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden h-40">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute top-3 right-3 bg-gray-900/70 backdrop-blur-sm text-xs py-1 px-2 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-gray-700/50 px-2 py-1 rounded-md text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <button className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        View details <ArrowUpRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>        
          </>
        )}

      </div>
    </div>
  );
};

export default AllProjectShow;
