import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Github, ExternalLink, ShieldCheck, Activity, Database, GitBranch, ChevronDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section style={{
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            marginTop: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ width: '100%' }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: 'rgba(252, 211, 77, 0.1)',
                        border: '1px solid var(--accent-gold)',
                        borderRadius: '20px',
                        color: 'var(--accent-gold)',
                        fontFamily: 'Montserrat',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        marginBottom: '25px'
                    }}
                >
                    ENTERPRISE PRODUCT
                </motion.div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: 1.1,
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    color: 'var(--text-main)'
                }}>
                    LangAlpha: <br />
                    <span style={{ color: 'var(--accent-gold)' }}>Multi-Agent Financial Research</span> Platform
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    maxWidth: '800px',
                    marginBottom: '2rem'
                }}>
                    An end-to-end Agentic AI workspace serving 100+ active users. Built with Python, LangGraph, React, and PostgreSQL.
                </p>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="minimal-panel"
                    style={{
                        padding: '25px',
                        borderLeft: '4px solid var(--accent-gold)',
                        background: 'var(--bg-alt)',
                        marginBottom: '3rem',
                        maxWidth: '800px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}
                >
                    <Activity size={32} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                    <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                        <strong>Managed the production lifecycle</strong> to handle 110+ daily API calls, integrating 30+ tools for real-time market data retrieval.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <motion.a
                        href="https://www.youtube.com/watch?v=QfvLExWn78M"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="minimal-panel"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 28px',
                            background: 'var(--accent-gold)',
                            borderColor: 'var(--accent-gold)',
                            color: '#111111',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            textDecoration: 'none',
                            borderRadius: '8px'
                        }}
                    >
                        <PlayCircle size={24} color="#111111" />
                        View Live Demo
                    </motion.a>

                    <motion.a
                        href="https://github.com/ginlix-ai/LangAlpha"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, borderColor: 'var(--text-main)' }}
                        whileTap={{ scale: 0.95 }}
                        className="minimal-panel"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 28px',
                            background: 'transparent',
                            color: 'var(--text-main)',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            textDecoration: 'none',
                            borderRadius: '8px'
                        }}
                    >
                        <Github size={24} />
                        GitHub / Code Snippets
                    </motion.a>

                    <motion.a
                        href="https://langalpha.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, borderColor: 'var(--text-main)' }}
                        whileTap={{ scale: 0.95 }}
                        className="minimal-panel"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 28px',
                            background: 'transparent',
                            color: 'var(--text-main)',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            textDecoration: 'none',
                            borderRadius: '8px'
                        }}
                    >
                        <ExternalLink size={24} />
                        Public Website
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    bottom: '-2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'var(--text-muted)'
                }}
            >
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '8px', opacity: 0.6 }}>SCROLL</span>
                <ChevronDown size={20} style={{ opacity: 0.6 }} />
            </motion.div>
        </section>
    );
};

export default HeroSection;
