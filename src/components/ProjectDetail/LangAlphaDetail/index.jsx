import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import ArchitectureSection from './ArchitectureSection';

const LangAlphaDetail = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '100vh', padding: '30px 20px', background: 'var(--bg-color)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => navigate('/zhuzhi#projects')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    ← Go Back
                </motion.button>

                <HeroSection />
                <ArchitectureSection />
            </div>
        </div>
    );
};

export default LangAlphaDetail;
