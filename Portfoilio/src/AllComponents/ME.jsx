import React from 'react'
import myImage from './../assets/Dummy.jpeg'
import { Github, Linkedin, Mail } from 'lucide-react'

const ME = () => {
  return (
    <div className='bg-[#11071F] min-h-screen relative flex items-center justify-center p-6'>
      {/* Enhanced gradient background with smoother animation */}
      <div className='h-80 w-72 bg-gradient-to-r from-blue-700 to-purple-700 blur-2xl rounded-full opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse'></div>

      <div className='max-w-5xl w-full bg-[#1a0f2e]/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-600/20 z-10 transition-all duration-300 hover:shadow-purple-500/20'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Enhanced image container */}
          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300'></div>
            <div className='relative overflow-hidden rounded-3xl'>
              <img
                src={myImage}
                alt="Dhruv Panchal"
                className='h-72 w-72 object-cover rounded-3xl transition-all duration-300 hover:scale-105 hover:rotate-2 group-hover:shadow-lg'
              />
              {/* Subtle overlay on hover */}
              <div className='absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          </div>

          <div className='flex-1 text-white space-y-6'>
            {/* Enhanced heading with animation */}
            <div className='transform transition-all duration-300 hover:translate-x-2'>
              <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent'>
                Dhruv Panchal
              </h1>
              <p className='text-xl text-purple-300 mt-2'>Full Stack Developer | B.Tech @ Silver Oak University</p>
            </div>

            {/* Enhanced bio section */}
            <p className='text-gray-300 leading-relaxed'>
              I'm a passionate full-stack developer focused on building scalable, responsive web applications.
              Skilled in React, Node.js, and Docker with a growing interest in DevOps and cloud infrastructure.
              Currently learning AWS and enhancing backend architecture.
            </p>

            {/* Enhanced social links */}
            <div className='flex gap-4'>
              <a
                href="https://github.com/dhruvpanchal897"
                target="_blank"
                rel="noopener noreferrer"
                className='p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/40 transition-all duration-300 hover:scale-110'
                aria-label="GitHub Profile"
              >
                <Github className='text-purple-400' />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruvpanchal897/"
                target="_blank"
                rel="noopener noreferrer"
                className='p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/40 transition-all duration-300 hover:scale-110'
                aria-label="LinkedIn Profile"
              >
                <Linkedin className='text-purple-400' />
              </a>
              <a
                href="mailto:dhruvpanchal897@gmail.com"
                className='p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/40 transition-all duration-300 hover:scale-110'
                aria-label="Email Contact"
              >
                <Mail className='text-purple-400' />
              </a>
            </div>

            {/* Enhanced skills section with hover effects */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
              <div className='bg-purple-500/10 p-4 rounded-xl hover:bg-purple-500/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 group'>
                <h3 className='text-purple-400 font-semibold group-hover:translate-x-1 transition-transform duration-300'>Frontend</h3>
                <p className='text-sm text-gray-300'>React, Next.js, Tailwind CSS, ShadCN</p>
              </div>
              <div className='bg-purple-500/10 p-4 rounded-xl hover:bg-purple-500/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 group'>
                <h3 className='text-purple-400 font-semibold group-hover:translate-x-1 transition-transform duration-300'>Backend</h3>
                <p className='text-sm text-gray-300'>Node.js, Express, MongoDB, Strapi</p>
              </div>
              <div className='bg-purple-500/10 p-4 rounded-xl hover:bg-purple-500/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 group'>
                <h3 className='text-purple-400 font-semibold group-hover:translate-x-1 transition-transform duration-300'>Tools & DevOps</h3>
                <p className='text-sm text-gray-300'>Docker, GitHub Actions, AWS (Learning)</p>
              </div>
              <div className='bg-purple-500/10 p-4 rounded-xl hover:bg-purple-500/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 group'>
                <h3 className='text-purple-400 font-semibold group-hover:translate-x-1 transition-transform duration-300'>Projects</h3>
                <p className='text-sm text-gray-300'>E-commerce, AI Resume Builder, MedInfo App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ME