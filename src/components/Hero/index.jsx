import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AWaves from './AWaves';

const Hero = () => {
    return (
        <section className="section hero" id="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* 
              The AWaves interactive effect acts as the immersive background 
              Replacing static minimal shapes with the dynamic tracking SVG 
            */}
            <AWaves />

            <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 style={{ fontFamily: 'Montserrat', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
                        Welcome to my world
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 600, color: 'var(--text-main)' }}
                >
                    Hi, I'm a <br /><span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Creative</span> Engineer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3.5rem auto', lineHeight: 1.8 }}
                >
                    I define and solve problems in a complex world while making technological and human impact in an era of constant change to deliver the ultimate user experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                    style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
                >
                    <a href="#projects" className="btn">
                        View My Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Bouncing arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
            >
                <motion.a
                    href="#about"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ color: 'var(--text-main)', display: 'block', textDecoration: 'none' }}
                >
                    <ArrowDown size={32} strokeWidth={1.5} />
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
