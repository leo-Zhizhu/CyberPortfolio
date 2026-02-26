import React from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare, Target, Users, Lightbulb, Github, Linkedin } from 'lucide-react';
import PortraitStack from './PortraitStack';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="section" id="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '5rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                        About <span style={{ color: 'var(--accent-gold)', fontStyle: 'normal' }}>Me</span>
                    </h2>
                    <div style={{ width: '40px', height: '2px', background: 'var(--text-main)', margin: '0 auto' }} />
                </motion.div>

                <motion.div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Text Content */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--text-main)' }}>From coding to engineering, from engineering to building the world.</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                            Currently pursuing Computer Science at Cornell, I specialize in SWE & MLE. I move beyond 'nerdy' algorithmic exercises to focus on what matters: problem decomposition and maintainable architecture
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                            I believe engineering is the art of navigating the relationship between humans and technology. My approach is rooted in my name, 支(Zhi)柱 (Zhu), meaning 'The Pillar.' I aim to be the foundational support in any team, building robust, traceable systems that serve as the backbone of the next generation of technology.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '2rem' }}>
                            <motion.div className="minimal-panel" style={{ padding: '25px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center' }}>
                                <TerminalSquare color="var(--accent-gold)" size={32} strokeWidth={1.5} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '5px', transition: 'color 0.4s' }}>Controllable Code</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Montserrat', display: 'block', lineHeight: 1.5, transition: 'color 0.4s' }}>Clean & readable, best practices for large scale projects. Vibe coding, but not losing control</span>
                                </div>
                            </motion.div>
                            <motion.div className="minimal-panel" style={{ padding: '25px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center' }}>
                                <Target color="var(--accent-gold)" size={32} strokeWidth={1.5} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '5px', transition: 'color 0.4s' }}>Dedication</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Montserrat', display: 'block', lineHeight: 1.5, transition: 'color 0.4s' }}>Get work down is always the top priority. Trade off is always in mind</span>
                                </div>
                            </motion.div>
                            <motion.div className="minimal-panel" style={{ padding: '25px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center' }}>
                                <Users color="var(--accent-gold)" size={32} strokeWidth={1.5} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '5px', transition: 'color 0.4s' }}>Teamwork</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Montserrat', display: 'block', lineHeight: 1.5, transition: 'color 0.4s' }}>Impact people, not just code. Communication is always the key</span>
                                </div>
                            </motion.div>
                            <motion.div className="minimal-panel" style={{ padding: '25px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center' }}>
                                <Lightbulb color="var(--accent-gold)" size={32} strokeWidth={1.5} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '5px', transition: 'color 0.4s' }}>Eternal Learner</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Montserrat', display: 'block', lineHeight: 1.5, transition: 'color 0.4s' }}>Curiosity as constant, always have the courage to start all over again</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Real Interactive Portraits and Social Links */}
                    <motion.div
                        variants={itemVariants}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div
                            style={{
                                width: '100%',
                                aspectRatio: '3/4',
                                position: 'relative',
                                paddingBottom: '30px',
                                paddingRight: '30px'
                            }}
                        >
                            <PortraitStack />
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '30px',
                            marginTop: '2.5rem',
                            padding: '15px 40px',
                            borderRadius: '50px',
                            background: 'var(--bg-alt)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                            zIndex: 10
                        }}>
                            <motion.a
                                href="https://github.com/leo-Zhizhu"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}
                                whileHover={{ scale: 1.2, color: 'var(--accent-gold)' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={36} strokeWidth={1.5} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/zhu-zhi-506499376/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}
                                whileHover={{ scale: 1.2, color: 'var(--accent-gold)' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={36} strokeWidth={1.5} />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
