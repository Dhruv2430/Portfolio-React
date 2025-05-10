import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#11071F] text-[#f8f8f8] px-6 py-16 font-sans">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 min-w-[250px]">
          <div>
            <h3 className="text-2xl font-bold">Dhruv Panchal</h3>
            <p className="text-gray-400 mt-1">Web Developer & Designer</p>
          </div>
          <p className="mt-6 text-[#d4d4d4] leading-relaxed max-w-sm">
            Creating meaningful digital experiences through thoughtful design and clean code.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold mb-6 relative inline-block after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-[3px] after:bg-[#4a6cf7]">
            Navigation
          </h4>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-[#4a6cf7] text-[#d4d4d4]">Home</a></li>
            <li><a href="#projects" className="hover:text-[#4a6cf7] text-[#d4d4d4]">Projects</a></li>
            <li><a href="#about" className="hover:text-[#4a6cf7] text-[#d4d4d4]">About</a></li>
            <li><a href="#skills" className="hover:text-[#4a6cf7] text-[#d4d4d4]">Skills</a></li>
            <li><a href="#contact" className="hover:text-[#4a6cf7] text-[#d4d4d4]">Contact</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold mb-6 relative inline-block after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-[3px] after:bg-[#4a6cf7]">
            Connect
          </h4>

          <div className="flex gap-4 mb-6">
            <a href="https://github.com/Dhruv2430" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#4a6cf7] text-white flex items-center justify-center transition-transform hover:-translate-y-1">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-panchal-728987286/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#4a6cf7] text-white flex items-center justify-center transition-transform hover:-translate-y-1">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#4a6cf7] text-white flex items-center justify-center transition-transform hover:-translate-y-1">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="mailto:dhruvpanchal897@gmail.com" aria-label="Email"
              className="w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#4a6cf7] text-white flex items-center justify-center transition-transform hover:-translate-y-1">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <div className="space-y-2 text-[#d4d4d4]">
            <p className="flex items-center gap-2"><i className="fa-solid fa-envelope text-gray-400"></i> dhruvpanchal897@gmail.com</p>
            <p className="flex items-center gap-2"><i className="fa-solid fa-location-dot text-gray-400"></i> Ahmedabad, India</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto border-t border-[#2a2a2a] mt-12 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4 text-[#8a8a8a]">
        <p>&copy; {new Date().getFullYear()} Dhruv. All rights reserved.</p>
        <p>Designed and built with <i className="fa-solid fa-heart text-red-500"></i></p>
      </div>
    </footer>
  );
};

export default Footer;
