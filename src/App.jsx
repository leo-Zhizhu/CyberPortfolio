import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </>
);

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
