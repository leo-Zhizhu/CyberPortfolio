import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import images directly
import img1 from '../../../assets/langalpha1.png';
import img2 from '../../../assets/langalpha2.png';
import img3 from '../../../assets/langalpha3.png';
import img4 from '../../../assets/langalpha4.png';
import img5 from '../../../assets/langalpha5.png';
import img6 from '../../../assets/langalpha6.png';

const images = [img1, img2, img3, img4, img5, img6];

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <section style={{ padding: '60px 0', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                    Interface <span style={{ color: 'var(--accent-gold)' }}>Gallery</span>
                </h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Visual walkthrough of the LangAlpha dynamic web interface.
                </p>
            </div>

            {/* Main Carousel Display */}
            <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', background: '#0F1115', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', aspectRatio: '16/9' }}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`LangAlpha UI Screenshot ${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        onClick={() => openLightbox(currentIndex)}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'zoom-in' }}
                    />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(4px)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(252, 211, 77, 0.8)'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'; e.currentTarget.style.color = 'white'; }}
                >
                    <ChevronLeft size={28} />
                </button>

                <button
                    onClick={nextImage}
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(4px)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(252, 211, 77, 0.8)'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'; e.currentTarget.style.color = 'white'; }}
                >
                    <ChevronRight size={28} />
                </button>

                {/* Indicators */}
                <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                width: currentIndex === idx ? '24px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                background: currentIndex === idx ? 'var(--accent-gold)' : 'rgba(255,255,255,0.4)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnail Strip */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px', justifyContent: 'center', overflowX: 'auto', paddingBottom: '10px' }}>
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        onClick={() => setCurrentIndex(idx)}
                        style={{
                            width: '120px',
                            height: '80px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: `2px solid ${currentIndex === idx ? 'var(--accent-gold)' : 'transparent'}`,
                            opacity: currentIndex === idx ? 1 : 0.6,
                            transition: 'opacity 0.3s ease, border-color 0.3s ease'
                        }}
                    >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                ))}
            </div>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)'
                        }}
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                zIndex: 10000
                            }}
                        >
                            <X size={40} />
                        </button>

                        <img
                            src={images[currentIndex]}
                            alt={`Fullscreen ${currentIndex + 1}`}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                objectFit: 'contain',
                                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            onClick={prevImage}
                            style={{
                                position: 'absolute',
                                left: '5%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                padding: '20px'
                            }}
                        >
                            <ChevronLeft size={60} />
                        </button>

                        <button
                            onClick={nextImage}
                            style={{
                                position: 'absolute',
                                right: '5%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                padding: '20px'
                            }}
                        >
                            <ChevronRight size={60} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ImageGallery;
