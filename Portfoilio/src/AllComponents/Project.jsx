import React from 'react';
import { motion, useInView } from 'framer-motion';
import ShowProjectCard from './ShowProjectCard';
import pro from './../assets/pro1.png';

const ShowProject = () => {
    const features = ['Top Artists', 'Track Analysis', 'Playlist Generation', 'Genre Insights', 'Music Recommendations'];
    const techStack = ['React', 'Tailwind CSS', 'Spotify API', 'Chart.js', 'Firebase'];

    return (
        <div className="bg-[#11071F] py-16 min-h-screen flex items-center justify-center flex-col gap-20">

            <h1 className='text-6xl text-white'> - PROJECT -</h1>

            <ProjectCardWithAnimation
                title="Spotify Analytics"
                description="A web app for visualizing personalized Spotify data. Get insights about your listening habits, discover patterns in your music taste, and generate custom playlists based on your preferences."
                features={features}
                techStack={techStack}
                image={pro}
                githubLink="https://github.com/yourusername/spotify-analytics"
                demoLink="https://spotify-analytics-demo.vercel.app"
                detailsLink="/projects/spotify-analytics"
            />

            <ProjectCardWithAnimation
                title="Spotify Analytics"
                description="A web app for visualizing personalized Spotify data. Get insights about your listening habits, discover patterns in your music taste, and generate custom playlists based on your preferences."
                features={features}
                techStack={techStack}
                image={pro}
                githubLink="https://github.com/yourusername/spotify-analytics"
                demoLink="https://spotify-analytics-demo.vercel.app"
                detailsLink="/projects/spotify-analytics"
            />
        </div>
    );
};

// Wrapper component that adds animation to ShowProjectCard
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