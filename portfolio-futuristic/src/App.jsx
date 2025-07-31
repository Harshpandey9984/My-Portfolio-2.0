import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FuturisticBackground from './components/FuturisticBackground';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-darkBg dark:text-white transition-colors duration-500 font-sans relative overflow-hidden">
      <FuturisticBackground />
      <MatrixBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
