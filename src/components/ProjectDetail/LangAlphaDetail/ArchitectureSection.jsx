import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureSection = () => {
    return (
        <section style={{
            minHeight: '80vh',
            padding: '100px 0',
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontStyle: 'italic', textAlign: 'center' }}>
                    System <span style={{ color: 'var(--accent-gold)', fontStyle: 'normal' }}>Architecture</span>
                </h2>
                <div style={{ width: '60px', height: '2px', background: 'var(--text-main)', margin: '0 auto 4rem auto' }} />

                <div
                    className="minimal-panel"
                    style={{
                        padding: '60px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderStyle: 'dashed',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        background: 'transparent'
                    }}
                >
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                        [Architecture Diagram Placeholder]
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginTop: '20px', maxWidth: '600px', lineHeight: 1.6 }}>
                        High-level system architecture detailing the agentic AI workflow, multi-agent communication over LangGraph, state persistence in PostgreSQL, and real-time frontend streaming via FastAPI.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default ArchitectureSection;
