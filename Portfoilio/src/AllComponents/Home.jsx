import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import profileImage from './../assets/Me.png'
import Arrow from './../assets/Arrow.png'
import SkillsSection from './SkillsSection'
import Contact from './Contact'
import Footer from './Footer'
import Project from './Project'
import { motion } from 'framer-motion'

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='bg-gradient-to-b from-[#11071F] to-[#1a0f29] min-h-screen text-white'>
            <Navbar />

            {/* Hero Section */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-36 '>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16'
                >
                    {/* Profile Image */}
                  <div className='lg:pl-48 flex flex-row'>
                  <div className='relative w-56 h-56 sm:w-64 sm:h-64 flex-shrink-0'>
                        <motion.div 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='z-10 absolute inset-0  overflow-hidden  '
                        >
                            <img src={profileImage} alt="Dhruv Panchal" className='w-full h-full object-cover' />
                        </motion.div>
                        <div className='h-full w-full bg-blue-600 blur-3xl absolute inset-0 opacity-60'></div>
                    </div>

                    {/* Hero Text Content */}
                    <div className='relative text-center md:text-left max-w-2xl ' >
                        <img
                            src={Arrow}
                            alt=""
                            className='hidden md:block absolute -left-16 top-4 w-12 transform rotate-12'
                        />

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="font-[Preahvihear] text-blue-400 text-xl sm:text-2xl tracking-wider">
                                Hello! I Am <span className='text-blue-300'>Dhruv Panchal</span>
                            </h3>

                            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6 font-[Preahvihear] leading-tight'>
                                You can't judge a book
                                <span className='block text-blue-300'> by its first chapter</span>
                            </h1>

                            <p className='text-gray-300 mt-6 text-base sm:text-lg font-[Preahvihear]'>
                                If the first impression doesn't catch your eye, what will?
                            </p>

                            <div className='mt-8 flex flex-wrap gap-4 justify-center md:justify-start'>
                                <a href="#projects" className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105'>
                                    View Projects
                                </a>
                                <a href="#contact" className='px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-md font-medium transition-all duration-300'>
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* About Me Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-28 md:mt-36 mb-20"
                >
                    <div className="mx-auto max-w-4xl mt-50">
                        <h2 className="text-white font-[Preahvihear] text-3xl sm:text-4xl md:text-5xl mb-6">
                            I'm a <span className="text-blue-400">Full-stack developer</span>
                        </h2>
                        
                        <div className="mt-8 p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Hi! I'm <span className="text-blue-300 font-medium">Dhruv Panchal</span> — a full-stack developer who loves building modern, responsive web interfaces using React, Tailwind CSS, and ShadCN UI.
                                I'm currently pursuing my B.Tech at Silver Oak University and working with JWT authentication and Docker for backend development.
                            </p>
                            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                                I enjoy creating complete web applications, from frontend to backend, and turning ideas into real experiences.
                                My passion lies in crafting solutions that combine beautiful design with powerful functionality.
                            </p>
                            
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">MongoDB</span>
                                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Docker</span>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Other Sections */}
            <SkillsSection />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home