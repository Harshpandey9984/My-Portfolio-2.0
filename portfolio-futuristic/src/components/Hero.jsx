import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary collision
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, '#00FFF0');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = '#00FFF0';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const floatingIcons = [
    { icon: 'fab fa-js-square', delay: 0 },
    { icon: 'fab fa-react', delay: 1 },
    { icon: 'fab fa-node-js', delay: 2 },
    { icon: 'fab fa-ethereum', delay: 3 },
    { icon: 'fas fa-code', delay: 4 },
  ];

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern bg-white dark:bg-darkBg transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: item.delay * 0.5, duration: 1 }}
          className={`absolute text-4xl text-blue-600 dark:text-neon-cyan/60 floating ${
            index % 2 === 0 ? 'top-20' : 'bottom-20'
          } ${
            index < 2 ? 'left-10' : index < 4 ? 'right-10' : 'left-1/2'
          }`}
          style={{
            animationDelay: `${item.delay}s`,
          }}
        >
          <i className={item.icon} />
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.img
                src="/assets/images/profile.jpg"
                alt="Harsh Pandey"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 dark:border-neon-cyan shadow-lg dark:shadow-neon"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Glowing Ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-blue-400/50 dark:border-neon-cyan/30 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-purple-400/30 dark:border-neon-pink/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>

          {/* Name */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-orbitron font-black holographic-text glitch-effect mb-6"
              data-text="HARSH PANDEY"
            >
              HARSH PANDEY
            </motion.h1>
            
            {/* Glow Effect */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 text-5xl md:text-7xl font-orbitron font-black text-blue-500 dark:text-neon-cyan blur-lg -z-10"
              style={{ animation: 'glow-pulse 2s ease-in-out infinite alternate' }}
            >
              HARSH PANDEY
            </motion.h1>
          </div>

          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hologram-card glass-card bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl mx-auto max-w-3xl mb-8 border border-gray-300/20 dark:border-white/10 neon-border floating-animation"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-blue-600 dark:text-neon-cyan mb-4">
              <i className="fas fa-user-astronaut mr-3"></i>
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-800 dark:text-white/90 font-rajdhani leading-relaxed text-left">
              <span className="text-blue-600 dark:text-neon-cyan">▸</span> I'm a passionate <strong className="text-blue-700 dark:text-neon-cyan">Fourth Year Computer Science Student</strong> 
              with a deep fascination for cutting-edge technology and innovation. My journey in the digital realm spans across 
              <strong className="text-purple-600 dark:text-neon-pink"> full-stack development</strong>, <strong className="text-blue-700 dark:text-neon-cyan">blockchain technology</strong>, 
              and <strong className="text-purple-600 dark:text-neon-pink">creative problem-solving</strong>.
              <br /><br />
              <span className="text-blue-600 dark:text-neon-cyan">▸</span> When I'm not coding, you'll find me exploring the latest tech trends, 
              contributing to open-source projects, or dreaming up the next big innovation that could change the world. 
              I believe in the power of technology to solve real-world problems and create meaningful impact.
            </p>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-4xl font-rajdhani font-semibold text-blue-600 dark:text-neon-cyan min-h-[3rem] flex items-center justify-center"
          >
            <Typewriter
              words={[
                'Full-Stack Developer',
                'Blockchain Enthusiast',
                'Creative Coder',
                'Problem Solver',
                'Tech Innovator'
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-gray-700 dark:text-white/80 font-rajdhani max-w-2xl mx-auto leading-relaxed"
          >
            <span className="text-blue-600 dark:text-neon-cyan">▸</span> Fourth Year Computer Science Student • Future Tech Innovator <span className="text-blue-600 dark:text-neon-cyan">◂</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary cursor-hover"
            >
              <i className="fas fa-paper-plane mr-2" />
              Contact Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary cursor-hover"
            >
              <i className="fas fa-rocket mr-2" />
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/assets/files/Harsh_Pandey_Resume.pdf"
              download="Harsh_Pandey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-500 dark:border-neon-cyan bg-transparent text-blue-600 dark:text-neon-cyan font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-neon-cyan dark:hover:text-black cursor-hover flex items-center shadow-lg dark:shadow-neon cyber-glow data-stream"
            >
              <i className="fas fa-download mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-600 dark:text-neon-cyan text-2xl cursor-pointer"
          onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-chevron-down" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
