import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import BrickWall from './BrickWall';
import LangAlphaLogo from '../../assets/langalpha_logo.svg';

const projects = [
    {
        id: 1,
        title: 'Ginlix AI-LangAlpha',
        description: 'An AI-powered "vibe investing agent harness" designed to help interpret financial markets and support complex, long-term investment decisions. Unlike traditional AI finance tools that treat investing as a simple one-shot question-and-answer interaction, LangAlpha treats research as an iterative, Bayesian process where a specialized AI continually refines an investment thesis as new data arrives.',
        tech: ['PostgreSQL', 'Redis', 'LangGraph', 'CI/CD', 'LiteLLM', 'React.js', 'FastAPI', 'MCP', 'Agent workflow', 'Data pipeline', 'Javascript', 'HTML/CSS', 'Git', 'RESTful API', 'RAG', 'Docker', 'Cloud Deployment'],
        size: 'large',
        link: 'https://langalpha.com',
        github: 'https://github.com/ginlix-ai/LangAlpha',
        logo: LangAlphaLogo,
        role: 'Internship',
        duration: 'December 2025 - Present',
        location: 'Remote'
    },
    {
        id: 2,
        title: 'Neural Engine',
        description: 'Optimized deep learning inference server.',
        tech: ['Python', 'PyTorch'],
        size: 'small'
    },
    {
        id: 3,
        title: 'Data Pipeline',
        description: 'Real-time ETL data processing pipeline.',
        tech: ['Rust', 'PostgreSQL'],
        size: 'small'
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
        title: 'Interactive Web Playground',
        description: 'An immersive 3D web experience tailored for visual storytelling. Combining seamless physics simulations with modern frontend rendering, creating a deeply engaging user journey that is both functional and performant.',
        tech: ['React', 'Three.js'],
        size: 'large'
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
