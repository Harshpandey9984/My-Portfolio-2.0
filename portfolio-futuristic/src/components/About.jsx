import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { personalInfo, experience, education } from '../utils/data';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Particle Animation for Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 80;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, '#00FFF0');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="floating"
        className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-cyan/30 rotate-45 rounded-lg"
      />
      <motion.div
        variants={floatingVariants}
        animate="floating"
        transition={{ delay: 1 }}
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 rounded-full"
      />
      <motion.div
        variants={floatingVariants}
        animate="floating"
        transition={{ delay: 2 }}
        className="absolute bottom-40 left-20 w-12 h-12 border border-neon-green/40 rounded-full"
      />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Hero Section Integration */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            {/* Main Title with Typewriter Effect */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black gradient-text mb-4">
                HARSH PANDEY
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl font-rajdhani text-neon-cyan mb-6">
                <Typewriter
                  words={['Full-Stack Developer', 'Blockchain Enthusiast', 'Problem Solver', 'Tech Innovator']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </div>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 255, 240, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-semibold rounded-full shadow-lg hover:shadow-neon transition-all duration-300"
              >
                View Projects
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neon-pink text-neon-pink font-semibold rounded-full hover:bg-neon-pink hover:text-dark-bg transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* About Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Profile Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-pink/5 rounded-3xl" />
                
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="relative group mx-auto w-64 h-64">
                    {/* Animated Border */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                    
                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                      <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-orbitron font-bold gradient-text">
                    {personalInfo.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {personalInfo.subtitle}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="flex justify-center space-x-6 pt-4">
                    <div className="flex items-center space-x-2 text-neon-cyan">
                      <i className="fas fa-envelope" />
                      <span className="text-sm">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neon-pink">
                      <i className="fas fa-map-marker-alt" />
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Professional Summary */}
              <div className="glass-card p-8 rounded-3xl">
                <h4 className="text-xl font-orbitron font-bold text-neon-cyan mb-6 flex items-center">
                  <i className="fas fa-user-astronaut mr-3" />
                  Professional Overview
                </h4>
                
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p>
                    Dedicated professional with developing expertise in front-end development and blockchain technology, 
                    skilled in programming and web3 applications. My key achievements include excelling in coursework 
                    related to Data Structures and Algorithms, and Database Management Systems.
                  </p>
                  
                  <p>
                    Seeking opportunities at forward-thinking companies where I can bring my programming 
                    and blockchain skills to support missions of advancing innovative and user-friendly digital solutions.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">15+</div>
                  <div className="text-sm text-white/70">Projects</div>
                  <div className="w-full h-1 bg-gradient-to-r from-neon-cyan to-transparent rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-orbitron font-bold text-neon-pink mb-2">2+</div>
                  <div className="text-sm text-white/70">Years Learning</div>
                  <div className="w-full h-1 bg-gradient-to-r from-neon-pink to-transparent rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-orbitron font-bold text-neon-green mb-2">10+</div>
                  <div className="text-sm text-white/70">Technologies</div>
                  <div className="w-full h-1 bg-gradient-to-r from-neon-green to-transparent rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-orbitron font-bold gradient-text mb-2">100%</div>
                  <div className="text-sm text-white/70">Dedication</div>
                  <div className="w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Tech Stack Preview */}
              <div className="glass-card p-6 rounded-2xl">
                <h5 className="text-lg font-orbitron font-semibold text-white mb-4">Tech Stack</h5>
                <div className="flex flex-wrap gap-3">
                  {['React', 'JavaScript', 'Blockchain', 'Python', 'Node.js', 'Tailwind'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 border border-neon-cyan/30 rounded-full text-xs text-white/90 hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience & Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mt-20"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h3 className="text-4xl font-orbitron font-bold gradient-text mb-4">
                Journey & Milestones
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-2xl font-orbitron font-semibold text-neon-cyan mb-8 flex items-center">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full mr-4" />
                  Experience
                </h4>
                
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-card p-6 rounded-2xl hover:shadow-neon group transition-all duration-300 border-l-4 border-neon-cyan/30"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-neon-cyan rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <div>
                        <h5 className="font-semibold text-white text-lg">{exp.title}</h5>
                        <p className="text-neon-cyan font-medium">{exp.company}</p>
                        <p className="text-white/60 text-sm mb-3">{exp.period}</p>
                        <p className="text-white/80 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-2xl font-orbitron font-semibold text-neon-pink mb-8 flex items-center">
                  <div className="w-3 h-3 bg-neon-pink rounded-full mr-4" />
                  Education
                </h4>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-card p-6 rounded-2xl hover:shadow-neon group transition-all duration-300 border-l-4 border-neon-pink/30"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-neon-pink rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <div>
                        <h5 className="font-semibold text-white text-lg">{edu.degree}</h5>
                        <p className="text-neon-pink font-medium">{edu.institution}</p>
                        <p className="text-white/60 text-sm mb-3">{edu.period}</p>
                        <p className="text-white/80 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
