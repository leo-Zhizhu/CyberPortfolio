import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ badge, title, description, metric, links, scrollText = "SCROLL" }) => {
    return (
        <section style={{
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            marginTop: '0'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ width: '100%' }}
            >
                {badge && (
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
                        {badge}
                    </motion.div>
                )}

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: 1.1,
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    color: 'var(--text-main)'
                }}>
                    {title}
                </h1>

                {description && (
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        maxWidth: '800px',
                        marginBottom: '2rem'
                    }}>
                        {description}
                    </p>
                )}

                {metric && (
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
                        {metric}
                    </motion.div>
                )}

                {links && links.length > 0 && (
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {links.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, borderColor: link.primary ? 'var(--accent-gold)' : 'var(--text-main)' }}
                                whileTap={{ scale: 0.95 }}
                                className="minimal-panel"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '16px 28px',
                                    background: link.primary ? 'var(--accent-gold)' : 'transparent',
                                    color: link.primary ? '#111111' : 'var(--text-main)',
                                    borderColor: link.primary ? 'var(--accent-gold)' : 'transparent',
                                    fontWeight: link.primary ? 700 : 600,
                                    fontSize: '1.05rem',
                                    textDecoration: 'none',
                                    borderRadius: '8px'
                                }}
                            >
                                {link.icon}
                                {link.label}
                            </motion.a>
                        ))}
                    </div>
                )}
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
                <span style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '8px', opacity: 0.8, color: 'var(--accent-gold)' }}>{scrollText}</span>
                <ChevronDown size={32} style={{ opacity: 0.8, color: 'var(--accent-gold)' }} />
            </motion.div>
        </section>
    );
};

export default HeroSection;
