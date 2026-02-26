import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#projects') {
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 100);
    } else if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

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
