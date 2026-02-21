import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import portrait1 from '../../assets/portrait1.jpg';
import portrait2 from '../../assets/portrait2.jpg';

const PortraitStack = () => {
    const [topImage, setTopImage] = useState(1);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Trigger switch on arrow keys
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                // Prevent default scrolling for up/down arrow temporarily to allow clear interaction
                // if it's over the about section, but to keep it simple we just toggle and let event pass
                setTopImage(prev => (prev === 1 ? 2 : 1));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleImage = () => {
        setTopImage(prev => (prev === 1 ? 2 : 1));
    };

    const imageStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid var(--border-color)',
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Image 2 */}
            <motion.img
                src={portrait2}
                alt="Portrait 2"
                onClick={() => { if (topImage !== 2) toggleImage(); }}
                initial={{ top: 30, left: 30, scale: 0.95, zIndex: 1, opacity: 0.7 }}
                animate={{
                    top: topImage === 2 ? 0 : 30,
                    left: topImage === 2 ? 0 : 30,
                    scale: topImage === 2 ? 1 : 0.95,
                    zIndex: topImage === 2 ? 2 : 1,
                    opacity: topImage === 2 ? 1 : 0.7,
                }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}  // Clean easeOutExpo
                style={imageStyle}
            />

            {/* Image 1 */}
            <motion.img
                src={portrait1}
                alt="Portrait 1"
                onClick={() => { if (topImage !== 1) toggleImage(); }}
                initial={{ top: 0, left: 0, scale: 1, zIndex: 2, opacity: 1 }}
                animate={{
                    top: topImage === 1 ? 0 : 30,
                    left: topImage === 1 ? 0 : 30,
                    scale: topImage === 1 ? 1 : 0.95,
                    zIndex: topImage === 1 ? 2 : 1,
                    opacity: topImage === 1 ? 1 : 0.7,
                }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={imageStyle}
            />

            {/* Minimalist decorative elements around the frame */}
            <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '30px', height: '30px', borderTop: '2px solid var(--accent-gold)', borderLeft: '2px solid var(--accent-gold)', zIndex: 3, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '30px', height: '30px', borderBottom: '2px solid var(--accent-gold)', borderRight: '2px solid var(--accent-gold)', zIndex: 3, pointerEvents: 'none' }} />
        </div>
    );
};

export default PortraitStack;
