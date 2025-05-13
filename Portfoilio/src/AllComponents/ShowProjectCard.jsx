import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

// ShowProjectCard Component: This displays a project with an image, description, features, tech stack, and demo link.
const ShowProjectCard = ({ title, description, features, techStack, image, githubLink, demoLink, detailsLink }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto transition-all duration-700 ease-in-out">
      {/* Image Section */}
      <div className="relative w-full lg:w-3/5 h-80 md:h-96 group">
        <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
        
        <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 z-10 transition-opacity duration-300 group-hover:opacity-40"></div>
          
          <img
            src={image || "/api/placeholder/800/600"} // Using placeholder if no image is provided
            alt={`${title} Screenshot`}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <a 
              href={githubLink || "#"}
              className="bg-white/90 text-blue-900 rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="View source code on GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={demoLink || "#"}
              className="bg-white/90 text-blue-900 rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Visit live project"
            >
              <ExternalLink size={24} />
            </a>
            <a 
              href={detailsLink || "#"}
              className="bg-white/90 text-blue-900 rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="View project details"
            >
              <Eye size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center py-4">
        <p className="text-blue-400 font-medium mb-2 tracking-wider uppercase text-sm">Featured Project</p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h3>
        
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg p-4 md:p-6 transition-all duration-300 hover:bg-white/15">
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">{description}</p>
          
          {/* Display Features */}
          <div className="mt-4 md:mt-6 space-y-2">
            <p className="text-gray-300 text-sm">Key features:</p>
            <div className="text-gray-300 text-sm flex flex-wrap gap-2">
              {features && features.map((feature, idx) => (
                <span key={idx} className="bg-blue-900/50 px-3 py-1 rounded-full">{feature}</span>
              ))}
            </div>
          </div>
          
          {/* Display Tech Stack */}
          <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
            {techStack && techStack.map((tech, idx) => (
              <span key={idx} className="text-xs font-medium text-blue-300 px-2 py-1 bg-blue-900/30 rounded">{tech}</span>
            ))}
          </div>
        </div>
        
        {/* Demo Button */}
        <div className="mt-6">
          <a
            href={demoLink || "#"}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            View Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowProjectCard;