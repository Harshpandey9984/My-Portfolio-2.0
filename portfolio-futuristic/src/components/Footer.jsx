import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home', icon: 'fas fa-home' },
    { name: 'About', href: '#about', icon: 'fas fa-user' },
    { name: 'Skills', href: '#skills', icon: 'fas fa-code' },
    { name: 'Projects', href: '#projects', icon: 'fas fa-folder' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
  ];

  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-dark-bg to-dark-surface overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-pink/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-orbitron font-bold gradient-text mb-2">
                  Harsh Pandey
                </h3>
                <p className="text-neon-cyan font-rajdhani text-lg">
                  Full Stack Developer & Blockchain Enthusiast
                </p>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed max-w-md">
                Creating innovative digital solutions that merge cutting-edge blockchain technology with modern web development. 
                Let's build the decentralized future together, one smart contract at a time.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-full text-sm font-semibold border border-neon-cyan/30 hover:bg-neon-cyan/30 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
                <p className="text-white/60 text-sm mb-3">
                  Get notified about new projects and tech insights
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-black/20 border border-neon-cyan/30 rounded-lg px-3 py-2 text-white placeholder-white/50 text-sm focus:border-neon-cyan focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-neon transition-all duration-300 cursor-hover"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-orbitron font-bold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 10, color: '#00f5ff' }}
                      className="text-white/70 hover:text-neon-cyan transition-all duration-300 flex items-center space-x-3 cursor-hover group"
                    >
                      <i className={`${link.icon} w-4 text-neon-cyan/60 group-hover:text-neon-cyan transition-colors`} />
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>

              {/* Resume Download */}
              <motion.a
                href="/assets/files/Harsh_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 mt-6 bg-gradient-to-r from-neon-cyan to-neon-pink text-black px-4 py-2 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 cursor-hover"
              >
                <i className="fas fa-download" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-orbitron font-bold text-white mb-6">
                Connect
              </h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-white/70">
                  <i className="fas fa-envelope text-neon-cyan" />
                  <a href="mailto:harshpandey9984@gmail.com" className="hover:text-neon-cyan transition-colors cursor-hover">
                    harshpandey9984@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <i className="fas fa-map-marker-alt text-neon-cyan" />
                  <span>India</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <i className="fab fa-github text-neon-cyan" />
                  <a href="https://github.com/Harshpandey9984" className="hover:text-neon-cyan transition-colors cursor-hover">
                    Harshpandey9984
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 cursor-hover hover:shadow-lg backdrop-blur-sm`}
                  >
                    <i className={social.icon} />
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-6 p-3 glass-card rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold text-sm">Available for hire</span>
                </div>
                <p className="text-white/60 text-xs">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                <p>
                  © {currentYear} Harsh Pandey. All rights reserved. |{' '}
                  <span className="text-neon-cyan">Crafted with</span>{' '}
                  <i className="fas fa-heart text-red-400 animate-pulse" />{' '}
                  <span className="text-neon-cyan">and React</span>
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <button className="text-white/60 hover:text-neon-cyan transition-colors cursor-hover">
                  Privacy Policy
                </button>
                <button className="text-white/60 hover:text-neon-cyan transition-colors cursor-hover">
                  Terms of Service
                </button>
                <motion.button
                  onClick={handleScrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black p-2 rounded-full hover:shadow-neon transition-all duration-300 cursor-hover"
                  aria-label="Scroll to top"
                >
                  <i className="fas fa-arrow-up" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
