import React from 'react';
import { motion, useInView } from 'framer-motion';
import ShowProjectCard from './ShowProjectCard';
import pro from './../assets/ProjectReact.jpeg';
import pro1 from './../assets/Project2.png';


const ShowProject = () => {
    const features = ["Coin Detail Page","Search & Filter Coins","Price Chart with Timeframes"];
    const techStack = ['React', 'Tailwind CSS', 'API', 'Shadcn', 'Clerk'];

    const features1 = ["Freehand Drawing","Shape Tools","Color Picker","Undo/Redo","Save & Share"];
    const techStack1 = ['HTML', 'CSS', 'JavaScript'];

    return (
        <div className="bg-[#11071F] py-16 min-h-screen flex items-center justify-center flex-col gap-20">

            <h1 className='text-6xl text-white'> - PROJECT -</h1>

            <ProjectCardWithAnimation
                title="Crypto Data"
                description="Displays up-to-the-minute prices of major cryptocurrencies using a public API. Users can monitor coins like Bitcoin, Ethereum, and more. Prices auto-refresh at regular intervals for the latest data"
                features={features}
                techStack={techStack}
                image={pro}
                githubLink="https://github.com/Dhruv2430/Crypto_Data"
                demoLink="https://spotify-analytics-demo.vercel.app"
                detailsLink="/projects/spotify-analytics"
            />

            <ProjectCardWithAnimation
                title="Paint Clone"
                description="The Paint Clone is a lightweight, browser-based drawing application that replicates the core features of classic Microsoft Paint. Designed for simplicity and speed, it allows users to create freehand drawings, shapes, and annotations directly on a digital canvas."
                features={features1}
                techStack={techStack1}
                image={pro1}
                githubLink="https://github.com/Dhruv2430/Paint-clone"
                demoLink="https://spotify-analytics-demo.vercel.app"
                detailsLink="/projects/spotify-analytics"
            />
        </div>
    );
};


const ProjectCardWithAnimation = (props) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <ShowProjectCard {...props} />
        </motion.div>
    );
};

export default ShowProject;