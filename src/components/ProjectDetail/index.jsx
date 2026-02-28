import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../Projects';
import { motion } from 'framer-motion';

import LangAlphaDetail from './LangAlphaDetail';
import CUAUVDetail from './CUAUVDetail';
import GroceryManagerDetail from './GroceryManagerDetail';
import PixelSocialDetail from './PixelSocialDetail';
import MiniSpotifyDetail from './MiniSpotifyDetail';
import PaperChatDetail from './PaperChatDetail';

const ProjectDetail = () => {
    const { projectTitle } = useParams();
    const navigate = useNavigate();

    // Map URL param to specific custom detail pages
    if (projectTitle === 'Ginlix-AI-LangAlpha') {
        return <LangAlphaDetail />;
    }
    if (projectTitle === 'Cornell-Autonomous-Underwater-Vehicle' || projectTitle === 'CUAUV') {
        return <CUAUVDetail />;
    }
    if (projectTitle === 'GroceryManager') {
        return <GroceryManagerDetail />;
    }
    if (projectTitle === 'Pixel-Social') {
        return <PixelSocialDetail />;
    }
    if (projectTitle === 'MiniSpotify') {
        return <MiniSpotifyDetail />;
    }
    if (projectTitle === 'PaperChat') {
        return <PaperChatDetail />;
    }

    // Generic fallback for any other unexpected project (or if we don't have a custom page yet)
    const formattedTitle = projectTitle ? projectTitle.replace(/-/g, ' ') : '';
    const project = projects.find(p => p.title === formattedTitle) || projects[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectTitle]);

    return (
        <div style={{ minHeight: '100vh', padding: '60px 20px', background: 'var(--bg-color)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ width: '100%', maxWidth: '800px' }}
            >
                <button
                    onClick={() => navigate('/zhuzhi#projects')}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    ← Go Back
                </button>

                <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--accent-gold)' }}>
                    {project.title}
                </h1>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px' }}>
                    {project.description}
                </p>

                <h3 style={{ marginBottom: '15px' }}>Technologies</h3>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', padding: 0 }}>
                    {project.tech.map((t, idx) => (
                        <li key={idx} style={{ padding: '8px 16px', background: 'rgba(252, 211, 77, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: '20px', color: 'var(--accent-gold)', fontSize: '0.9rem' }}>
                            {t}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default ProjectDetail;
