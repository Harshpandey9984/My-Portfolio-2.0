import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../utils/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'hp7556513@gmail.com',
      link: 'mailto:hp7556513@gmail.com'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'Harshpandey9984',
      link: 'https://github.com/Harshpandey9984'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'India',
      link: null
    }
  ];

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
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto rounded-full" />
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-6">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/20 border border-neon-cyan/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/20 border border-neon-cyan/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/20 border border-neon-cyan/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-black/20 border border-neon-cyan/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-orbitron font-semibold transition-all duration-300 cursor-hover ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-neon-cyan to-neon-pink text-black hover:shadow-neon'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-xl ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <i className="fas fa-check-circle mr-2" />
                        Message sent successfully! I'll get back to you soon.
                      </>
                    ) : (
                      <>
                        <i className="fas fa-exclamation-triangle mr-2" />
                        Failed to send message. Please try again.
                      </>
                    )}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-full flex items-center justify-center">
                      <i className={`${info.icon} text-black text-lg`} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-neon-cyan transition-colors font-semibold cursor-hover"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-6">
                Follow Me
              </h3>

              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 cursor-hover hover:shadow-lg`}
                  >
                    <i className={`${social.icon} text-xl`} />
                  </motion.a>
                ))}
              </div>

              <p className="text-white/70 mt-6 text-sm">
                Connect with me on social media for updates on my latest projects and tech insights.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-4">
                Availability
              </h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-white/70 text-sm">
                I'm currently accepting new client projects and collaborations. Let's discuss how we can work together to bring your vision to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
