import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skills, softSkills } from '../utils/data';
import { fadeUp } from '../utils/animations';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          skills.forEach(category => {
            category.items.forEach(skill => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, Math.random() * 1000);
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold holographic-text glitch-effect mb-4" data-text="Skills & Expertise">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto rounded-full" />
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-6 flex items-center">
                <i className="fas fa-code mr-3" />
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <i className={`${skill.icon} text-neon-cyan text-lg`} />
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-neon-cyan font-bold">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    
                    <div className="skill-bar group-hover:scale-y-125 transition-transform duration-300">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: '0%' }}
                        animate={{ 
                          width: isVisible ? `${animatedSkills[skill.name] || 0}%` : '0%' 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-orbitron font-bold text-center gradient-text mb-12"
          >
            Professional Skills
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-6 rounded-2xl text-center cursor-hover group"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-neon transition-all duration-300">
                    <i className={`${skill.icon} text-2xl text-black`} />
                  </div>
                  <h4 className="text-xl font-orbitron font-semibold text-white mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-6">
              Technology Stack
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {skills.flatMap(category => category.items).map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 backdrop-blur-sm border border-neon-cyan/30 rounded-full px-4 py-2 text-sm font-semibold text-neon-cyan hover:border-neon-cyan hover:shadow-neon transition-all duration-300 cursor-hover"
                >
                  <i className={`${skill.icon} mr-2`} />
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
