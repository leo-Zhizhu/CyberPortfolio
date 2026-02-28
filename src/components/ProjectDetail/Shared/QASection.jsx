import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const QAItem = ({ q, index, isOpen, toggleOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
                marginBottom: '15px',
                background: 'var(--bg-alt)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: `1px solid ${isOpen ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)'}`,
                transition: 'border-color 0.3s ease'
            }}
        >
            <button
                onClick={toggleOpen}
                style={{
                    width: '100%',
                    padding: '20px 25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--accent-gold)' : 'var(--text-main)',
                    textAlign: 'left',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    lineHeight: '1.5'
                }}
            >
                <span style={{ paddingRight: '20px' }}>{q.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ flexShrink: 0, color: isOpen ? 'var(--accent-gold)' : 'var(--text-muted)' }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div style={{
                            padding: '0 25px 25px 25px',
                            color: 'var(--text-muted)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6'
                        }}>
                            <div style={{
                                paddingTop: '15px',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                            }}>
                                {q.answer}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const QASection = ({ titlePrefix = "Engineering", titleHighlight = "Q&A", description, qaData = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!qaData || qaData.length === 0) return null;

    return (
        <section style={{ padding: '60px 0', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                    {titlePrefix} <span style={{ color: 'var(--accent-gold)' }}>{titleHighlight}</span>
                </h3>
                {description && (
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        {description}
                    </p>
                )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {qaData.map((q, index) => (
                    <QAItem
                        key={index}
                        q={q}
                        index={index}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleOpen(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default QASection;
