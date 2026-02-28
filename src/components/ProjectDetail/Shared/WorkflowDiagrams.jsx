import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, PauseCircle, SkipForward } from 'lucide-react';

const NodeBlock = ({ node, isActive }) => {
    return (
        <motion.div
            animate={{
                scale: isActive ? 1.08 : 1,
                boxShadow: isActive ? '0px 0px 25px rgba(252, 211, 77, 0.4)' : '0px 0px 0px rgba(0,0,0,0)',
                borderColor: isActive ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.1)'
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
                width: '120px',
                height: '110px',
                background: isActive ? 'var(--bg-alt)' : '#0F1115',
                border: '2px solid transparent',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                textAlign: 'center',
                color: isActive ? 'var(--text-main)' : 'var(--text-muted)'
            }}
        >
            <div style={{ color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)', transition: 'color 0.4s' }}>
                {node.icon}
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: isActive ? 600 : 400 }}>{node.label}</span>
        </motion.div>
    );
};

const WorkflowDiagrams = ({ titlePrefix = "Key Feature", titleHighlight = "Workflows", workflows = [] }) => {
    const [activeTab, setActiveTab] = useState(workflows.length > 0 ? workflows[0].id : null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const activeWorkflow = workflows.find(w => w.id === activeTab);
    const currentStep = activeWorkflow ? activeWorkflow.steps[currentStepIndex] : null;

    // Handle Auto-Play Interval
    useEffect(() => {
        let interval;
        if (isPlaying && activeWorkflow && activeWorkflow.steps.length > 0) {
            interval = setInterval(() => {
                setCurrentStepIndex((prev) => (prev + 1) % activeWorkflow.steps.length);
            }, 3000); // Wait 3 seconds per step
        }
        return () => clearInterval(interval);
    }, [isPlaying, activeWorkflow, activeTab]);

    // Handle Tab Switch reset
    const handleTabSwitch = (id) => {
        setActiveTab(id);
        setCurrentStepIndex(0);
        setIsPlaying(true);
    };

    if (!workflows || workflows.length === 0) return null;
    if (!activeWorkflow || !currentStep) return null;

    return (
        <section style={{ padding: '60px 0 100px 0', width: '100%', position: 'relative' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'center' }}>
                {titlePrefix} <span style={{ color: 'var(--accent-gold)' }}>{titleHighlight}</span>
            </h3>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
                {workflows.map(wf => (
                    <motion.button
                        key={wf.id}
                        onClick={() => handleTabSwitch(wf.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: activeTab === wf.id ? 'var(--bg-alt)' : 'transparent',
                            color: activeTab === wf.id ? 'var(--text-main)' : 'var(--text-muted)',
                            border: `1px solid ${activeTab === wf.id ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`,
                            padding: '12px 24px',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {wf.title}
                    </motion.button>
                ))}
            </div>

            <div className="minimal-panel" style={{
                padding: '40px',
                background: 'var(--bg-alt)',
                maxWidth: '900px',
                margin: '0 auto',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '10px' }}>{activeWorkflow.title}</h4>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>{activeWorkflow.description}</p>
                </div>

                {/* Diagram Visualization */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '40px 0',
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    minHeight: '220px',
                    position: 'relative'
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab} // Retrigger animation on tab change
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {activeWorkflow.nodes.map((node, index) => {
                                const isActive = currentStep.activeNodes.includes(node.id);
                                return (
                                    <React.Fragment key={node.id}>
                                        <NodeBlock node={node} isActive={isActive} />
                                        {/* Render subtle connection lines between nodes if not the last node */}
                                        {index < activeWorkflow.nodes.length - 1 && (
                                            <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.1)', position: 'relative' }}>
                                                {/* Animated Pulse traversing line */}
                                                {isActive && (currentStep.from === node.id || currentStep.to === activeWorkflow.nodes[index + 1].id) && (
                                                    <motion.div
                                                        initial={{ left: '0%' }}
                                                        animate={{ left: '100%' }}
                                                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '-3px',
                                                            width: '8px',
                                                            height: '8px',
                                                            borderRadius: '50%',
                                                            background: 'var(--accent-gold)',
                                                            boxShadow: '0 0 10px var(--accent-gold)'
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtext and Controls */}
                <div style={{
                    marginTop: '20px',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '20px 30px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ flex: 1 }}>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 700, marginRight: '10px' }}>STEP {currentStep.id}:</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentStep.id} // Re-animate text change
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.5 }}
                            >
                                {currentStep.text}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Media Controls */}
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: '20px' }}>
                        <motion.button
                            onClick={() => setIsPlaying(!isPlaying)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--accent-gold)' }}
                        >
                            {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
                        </motion.button>

                        <motion.button
                            onClick={() => {
                                setIsPlaying(false);
                                setCurrentStepIndex((prev) => (prev + 1) % activeWorkflow.steps.length);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Next Step"
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                        >
                            <SkipForward size={24} />
                        </motion.button>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                    {activeWorkflow.steps.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                setIsPlaying(false);
                                setCurrentStepIndex(idx);
                            }}
                            style={{
                                width: '30px',
                                height: '4px',
                                borderRadius: '2px',
                                cursor: 'pointer',
                                background: idx === currentStepIndex ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkflowDiagrams;
