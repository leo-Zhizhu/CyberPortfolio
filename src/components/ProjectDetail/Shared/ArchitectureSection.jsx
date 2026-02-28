import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ArchitectureSection = ({ title = "Core Infrastructure Patterns", patterns = [] }) => {
    const [expandedPattern, setExpandedPattern] = useState(patterns.length > 0 ? patterns[0].id : null);

    if (!patterns || patterns.length === 0) return null;

    return (
        <section style={{
            padding: '100px 0 60px 0',
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%' }}
            >
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>
                        {title}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {patterns.map((pattern) => {
                            const isExpanded = expandedPattern === pattern.id;

                            return (
                                <motion.div
                                    key={pattern.id}
                                    className="minimal-panel"
                                    style={{ padding: '0', overflow: 'hidden' }}
                                >
                                    <div
                                        onClick={() => setExpandedPattern(isExpanded ? null : pattern.id)}
                                        style={{
                                            padding: '25px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            cursor: 'pointer',
                                            background: isExpanded ? 'rgba(252, 211, 77, 0.05)' : 'transparent'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            {pattern.icon}
                                            <h4 style={{ margin: 0, fontSize: '1.2rem', color: isExpanded ? 'var(--accent-gold)' : 'var(--text-main)', transition: 'color 0.3s ease' }}>
                                                {pattern.title}
                                            </h4>
                                        </div>
                                        <div style={{ color: isExpanded ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                                            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div style={{
                                                    padding: '0 25px 25px 83px',
                                                    color: 'var(--text-muted)',
                                                    lineHeight: 1.7,
                                                    fontSize: '1.05rem'
                                                }}>
                                                    {pattern.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ArchitectureSection;
