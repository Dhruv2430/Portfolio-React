import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import profileImage from './../assets/Me.png'
import Arrow from './../assets/Arrow.png'
import SkillsSection from './SkillsSection'
import Contact from './Contact'
import Footer from './Footer'
import Project from './Project'
import { ArrowDownAz, ArrowDownNarrowWideIcon, ArrowDownWideNarrow } from 'lucide-react'

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='bg-gradient-to-b from-[#11071F] to-[#1a0f29] min-h-screen text-white'>
            {/* Hero Section */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-0.5 pt-20 md:pt-28 lg:pt-20'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-9 md:gap-16'>
                    {/* Profile Image */}
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-36'>
                        <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16'>
                            <div className='lg:pl-48 flex justify-center w-full md:w-auto'>
                                <div className='relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64'>
                                    <div className='z-10 absolute inset-0 overflow-hidden rounded-full'>
                                        <img src={profileImage} alt="Dhruv Panchal" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='h-full w-full bg-blue-600 blur-3xl absolute inset-0 opacity-60 rounded-full'></div>
                                </div>
                            </div>

                           
                            <div className='relative text-center md:text-left max-w-xl w-full'>
                                <img
                                    src={Arrow}
                                    alt=""
                                    className='hidden md:block absolute -left-24 top-4 w-24 rotate-12'
                                />

                                <div>
                                    <h3 className="font-[Preahvihear] text-blue-400 text-lg sm:text-xl md:text-2xl tracking-wide">
                                        Hello! I Am <span className='text-blue-300'>Dhruv Panchal</span>
                                    </h3>

                                    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 font-[Preahvihear] leading-snug'>
                                        You can't judge a book
                                        <span className='block text-blue-300'> by its first chapter</span>
                                    </h1>

                                    <p className='text-gray-300 mt-4 text-sm sm:text-base md:text-lg font-[Preahvihear]'>
                                        If the first impression doesn't catch your eye, what will?
                                    </p>

                                    <div className='mt-6 flex flex-wrap gap-4 justify-center md:justify-start'>
                                        <a href="#projects" className='px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105'>
                                            View Projects
                                        </a>
                                        <a href="#contact" className='px-5 py-2.5 sm:px-6 sm:py-3 border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-md font-medium transition-all duration-300'>
                                            Contact Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>


                {/* About Me Section */}
                <section className="mt-36 md:mt-36  mb-20">
                    <div className="mx-auto max-w-4xl mt-56">
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
                </section>
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
