import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

const Home = () => {
  useEffect(() => {
    const savedScrollPos = sessionStorage.getItem('portfolio_scroll_pos');
    if (savedScrollPos) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedScrollPos, 10), behavior: 'auto' });
      }, 50);
    }

    const handleScroll = () => {
      sessionStorage.setItem('portfolio_scroll_pos', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/zhuzhi" replace />} />
        <Route path="/zhuzhi" element={<Home />} />
        <Route path="/zhuzhi/:projectTitle" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
