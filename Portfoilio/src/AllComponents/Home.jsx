import React from 'react'
import Navbar from './Navbar'
import item from './../assets/Me.png'
import Arrow from './../assets/Arrow.png'
import SkillsSection from './SkillsSection'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='bg-[#11071F] min-h-screen'>
            <Navbar />

            <div className='pt-20 md:pt-28 lg:pt-36 pl-0 md:pl-72'>
                <main className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-center md:items-start'>

                    <div className='relative w-48 h-48 sm:w-56 sm:h-56 mx-auto md:mx-0'>
                        <div className='z-10 absolute inset-0'>
                            <img src={item} alt="Me" className='w-full h-full object-cover' />
                        </div>
                        <div className='h-full w-full bg-blue-700 blur-3xl absolute inset-0'></div>
                    </div>


                    <div className='relative text-center md:text-left mt-8 md:mt-0'>

                        <img
                            src={Arrow}
                            alt=""
                            className='hidden md:block absolute -left-10 top-4 lg:top-0 w-8 lg:w-auto transform -translate-x-1/2'
                        />

                        <h1 className="font-[Preahvihear] text-white text-lg sm:text-xl">
                            Hello! I Am <span className='text-blue-500'>Dhruv Panchal</span>
                        </h1>

                        <h2 className='text-white text-2xl sm:text-3xl md:text-4xl mt-4 md:mt-10 font-[Preahvihear]'>
                            You can't judge a book
                            <span className='block'> by its first chapter</span>
                        </h2>

                        <h6 className='text-white mt-4 md:mt-6 text-sm sm:text-base font-[Preahvihear]'>
                            If the first impression doesn't catch your eye, what will?
                        </h6>
                    </div>
                </main>

                <section className="mt-16 md:mt-24 font-[Preahvihear]">
                    <div className="px-4 md:px-8 lg:px-16">
                        <h1 className="text-white font text-3xl sm:text-4xl md:text-5xl">I'm a Full-stack developer.</h1>
                        <p className="text-white mt-8 sm:text-base md:text-lg lg:text-s pr-0 sm:pr-4 md:pr-16 lg:pr-64">
                            Hi! I'm Dhruv Panchal — a full-stack developer who loves building modern, responsive web interfaces using React, Tailwind CSS, and ShadCN UI.
                            I’m currently pursuing my B.Tech at Silver Oak University and working with JWT authentication and Docker for backend development.
                            I enjoy creating complete web applications, from frontend to backend, and turning ideas into real experiences.
                        </p>
                    </div>
                </section>

            </div>
            <SkillsSection/>
            <Contact/>
        <Footer/>
        </div>
    )
}

export default Home