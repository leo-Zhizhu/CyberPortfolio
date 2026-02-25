import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import BrickWall from './BrickWall';
import LangAlphaLogo from '../../assets/langalpha_logo.svg';
import CUAUVLogo from '../../assets/cuauv.svg';

const projects = [
    {
        id: 1,
        title: 'Ginlix AI-LangAlpha',
        description: 'An AI-powered investing agent designed to help interpret financial markets and support complex, long-term investment decisions. Unlike traditional AI finance tools that treat investing as a simple one-shot question-and-answer interaction, LangAlpha (Ginlix AI\'s v3 product) treats research as an iterative process where a specialized AI continually refines an investment strategy as new data arrives and currently provides services for 100+ users.',
        tech: ['PostgreSQL', 'Redis', 'LangGraph', 'CI/CD', 'LiteLLM', 'React.js', 'FastAPI', 'MCP', 'Agent workflow', 'Data pipeline', 'Javascript', 'HTML/CSS', 'Git', 'RESTful API', 'RAG', 'Docker', 'Cloud Deployment'],
        size: 'large',
        link: 'https://langalpha.com',
        linkedin: 'https://www.linkedin.com/company/ginlix-ai/posts/?feedView=all',
        github: 'https://github.com/ginlix-ai/LangAlpha',
        logo: LangAlphaLogo,
        role: 'Internship',
        duration: 'December 2025 - Present',
        location: 'Remote'
    },
    {
        id: 2,
        title: 'GroceryManager',
        description: 'A cloud-native online grocery list management platform. Features a layered Spring Boot RESTful API with injected dependencies, PostgreSQL via AWS RDS, session-based Spring Security authentication, and containerized Docker deployment on AWS App Runner.',
        tech: ['Java', 'Spring Boot', 'RESTful API', 'Dependency Injection', 'PostgreSQL', 'AWS', 'Docker'],
        size: 'small',
        github: 'https://github.com/leo-Zhizhu/GroceryManager',
        link: 'https://jfmvpckfgd.us-east-2.awsapprunner.com/'
    },
    {
        id: 3,
        title: 'Pixel Social',
        description: 'An AI-powered social platform for creating and sharing AI-generated artwork. Integrated DALL·E 3 for content generation, built a distributed search infrastructure with ElasticSearch, and developed a secure Golang backend deployed on Google App Engine with JWT-based authentication.',
        tech: ['React.js', 'Golang', 'Google App Engine', 'ElasticSearch', 'JWT middleware'],
        size: 'small',
        github: 'https://github.com/leo-Zhizhu/Pixel-Social'
    },
    {
        id: 4,
        title: 'Edge Compute Node',
        description: 'Low-latency edge worker deployed globally.',
        tech: ['Go', 'Docker'],
        size: 'small'
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
        logo: CUAUVLogo
    },
    {
        id: 5,
        title: 'Cloud Orchestrator',
        description: 'Infrastructure management and auto-scaling tool.',
        tech: ['C++', 'K8s'],
        size: 'small'
    }
];

const Projects = () => {
    const [hoveredProjectId, setHoveredProjectId] = useState(null);

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

                {/* Grid Cluster */}
                <div className="projects-grid-layout">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onHover={setHoveredProjectId}
                            onLeave={() => setHoveredProjectId(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
