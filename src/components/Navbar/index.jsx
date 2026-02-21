import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: scrolled ? '15px 5%' : '25px 5%',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none'
      }}
    >
      <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-main)', letterSpacing: '0.05em' }}>
        <span style={{ color: 'var(--accent-gold)' }}>P</span>ortfolio.
      </div>
      <div style={{ display: 'flex', gap: '30px' }}>
        {['About', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
