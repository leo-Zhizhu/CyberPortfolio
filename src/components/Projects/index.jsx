import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import BrickWall from './BrickWall';
import LangAlphaLogo from '../../assets/langalpha_logo.svg';
import CUAUVLogo from '../../assets/cuauv.svg';

export const projects = [
    {
        id: 1,
        title: 'Ginlix AI-LangAlpha',
        description: 'An AI-powered investing agent designed to help interpret financial markets and support complex, long-term investment decisions. Unlike traditional AI finance tools that treat investing as a simple one-shot question-and-answer interaction, LangAlpha (Ginlix AI\'s v3 product) treats research as an iterative process where a specialized AI continually refines an investment strategy as new data arrives and currently provides services for 100+ users.',
        tech: ['PostgreSQL', 'Redis', 'LangGraph', 'CI/CD', 'LiteLLM', 'React.js', 'FastAPI', 'MCP', 'Agent workflow', 'Data pipeline', 'Javascript', 'HTML/CSS', 'Git', 'RESTful API', 'RAG', 'Docker', 'Cloud Deployment', 'Python'],
        size: 'large',
        link: 'https://langalpha.com',
        linkedin: 'https://www.linkedin.com/company/ginlix-ai/posts/?feedView=all',
        github: 'https://github.com/ginlix-ai/LangAlpha',
        logo: LangAlphaLogo,
        role: 'Full Stack Software Engineer & Product Manager',
        duration: 'December 2025 - Present',
        location: 'Remote'
    },
    {
        id: 6,
        title: 'Cornell Autonomous Underwater Vehicle',
        description: 'Enhance vehicle performance through the intersection of machine learning and robotics control. Designed and implemented an automated data pipeline to collect and preprocess real-world pool test data for machine learning. Reduced control error by 80%, optimizing the vehicle’s robustness in varying underwater conditions.',
        tech: ['Data pipeline', 'PID control', 'Non-linear optimization', 'Docker', 'Python', 'Git'],
        size: 'large',
        link: 'https://cuauv.org',
        linkedin: 'https://www.linkedin.com/company/cornell-university-autonomous-underwater-vehicle/posts/?feedView=all',
        instagram: 'https://www.instagram.com/cornell_auv/?hl=en',
        logo: CUAUVLogo,
        role: 'Software Engineer & Control Specialist',
        duration: 'October 2025 - Present',
        location: 'Ithaca, NY'
    },
    {
        id: 2,
        title: 'GroceryManager',
        description: 'A cloud-native online grocery list management platform. Features a layered Spring Boot RESTful API with injected dependencies, PostgreSQL via AWS RDS, session-based Spring Security authentication, and containerized Docker deployment on AWS App Runner.',
        tech: ['Java', 'Spring Boot', 'RESTful API', 'Dependency Injection', 'PostgreSQL', 'AWS', 'Docker'],
        size: 'small',
        github: 'https://github.com/leo-Zhizhu/GroceryManager',
        link: 'https://jfmvpckfgd.us-east-2.awsapprunner.com/',
        role: 'Solo Project'
    },
    {
        id: 3,
        title: 'Pixel Social',
        description: 'An AI-powered social platform for creating and sharing AI-generated artwork. Integrated DALL·E 3 for content generation, built a distributed search infrastructure with ElasticSearch, and developed a secure Golang backend deployed on Google App Engine with JWT-based authentication.',
        tech: ['React.js', 'Golang', 'Google App Engine', 'ElasticSearch', 'JWT middleware'],
        size: 'small',
        github: 'https://github.com/leo-Zhizhu/Pixel-Social',
        role: 'Solo Project'
    },
    {
        id: 4,
        title: 'MiniSpotify',
        description: 'A lightweight Android music streaming application built natively. Engineered a robust MVVM state machine with Jetpack Compose for declarative UI, alongside Hilt Dependency Injection. Features a complete ExoPlayer integration for dynamic audio streams and seamless persistent caching using Room.',
        tech: ['Kotlin', 'Android', 'MVVM', 'Dependency Injection', 'Room', 'Retrofit'],
        size: 'small',
        github: 'https://github.com/leo-Zhizhu/MiniSpotify',
        role: 'Solo Project'
    },
    {
        id: 5,
        title: 'PaperChat',
        description: 'A full-stack AI chatbot platform. It features a RAG pipeline utilizing LangChain, GPT, and external web searches via MCP to produce context-aware, tool-verified responses with reduced hallucination risk. The system employs a Node.js/Express backend coupled with a responsive React and Ant Design interface.',
        tech: ['RAG', 'LangChain', 'MCP', 'Node.js', 'Express.js', 'React.js', 'Ant Design'],
        size: 'small',
        github: 'https://github.com/leo-Zhizhu/PaperChat',
        role: 'Solo Project'
    }
];

const Projects = () => {
    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(() => {
        return Number(sessionStorage.getItem('portfolio_carousel_idx')) || 0;
    });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        sessionStorage.setItem('portfolio_carousel_idx', currentIndex);
        setHoveredProjectId(null);
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 700);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
            } else if (e.key === 'ArrowRight') {
                setCurrentIndex((prev) => (prev + 1) % projects.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section className="section" id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Brick Wall */}
            <BrickWall hoveredProjectId={hoveredProjectId} />

            {/* Foreground Content arranged to the right corner */}
            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingTop: '50px' }}>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '4rem', width: '100%', textAlign: 'right' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                        My <span style={{ color: 'var(--accent-gold)', fontStyle: 'normal' }}>Experiences & Projects</span>
                    </h2>
                    <div style={{ width: '60px', height: '2px', background: 'var(--text-main)', marginLeft: 'auto' }} />
                </motion.div>

                {/* Carousel Cluster */}
                <div style={{ position: 'relative', width: '100%', height: '550px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1200px' }}>
                    {projects.map((project, index) => {
                        const n = projects.length;
                        const leftIndex = (currentIndex - 1 + n) % n;
                        const rightIndex = (currentIndex + 1) % n;

                        let isCenter = index === currentIndex;
                        let isLeft = index === leftIndex;
                        let isRight = index === rightIndex;

                        let positionStyle = { x: '0%', rotateY: '0deg', scale: 0.6, opacity: 0, zIndex: -1 };
                        let isVisible = false;

                        if (isCenter) {
                            positionStyle = { x: '0%', rotateY: '0deg', scale: 1, opacity: 1, zIndex: 10 };
                            isVisible = true;
                        } else if (isLeft) {
                            positionStyle = { x: '-25%', rotateY: '20deg', scale: 0.85, opacity: 1, zIndex: 5 };
                            isVisible = true;
                        } else if (isRight) {
                            positionStyle = { x: '25%', rotateY: '-20deg', scale: 0.85, opacity: 1, zIndex: 5 };
                            isVisible = true;
                        }

                        // Add a slight box shadow to distinguish overlapping cards
                        const filterStyle = isCenter
                            ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            : 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))';

                        return (
                            <motion.div
                                key={project.id}
                                animate={positionStyle}
                                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    maxWidth: '650px',
                                    height: '90%',
                                    pointerEvents: isVisible ? 'auto' : 'none',
                                    cursor: isCenter ? 'default' : 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    filter: filterStyle
                                }}
                                onClick={() => {
                                    if (!isCenter) setCurrentIndex(index);
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    onHover={(!isAnimating && isCenter) ? setHoveredProjectId : undefined}
                                    onLeave={(!isAnimating && isCenter) ? () => setHoveredProjectId(null) : undefined}
                                    styleOverride={{ width: '100%', height: '100%', pointerEvents: (isCenter && !isAnimating) ? 'auto' : 'none' }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
