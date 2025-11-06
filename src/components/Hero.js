import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const roles = [
    'AI/ML Engineer',
    'Multi-Agent & RAG Developer',
    'Voice AI Specialist',
    'Workflow Automation Expert',
    'AI Video Creator',
    'Prompt Engineer',
    'Vibe Coder'
  ];

  return (
    <section id="home" className="hero">
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-image-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="image-border"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/profile.png`}
              alt="Sarguru I" 
              className="hero-image"
            />
          </motion.div>
        </motion.div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              <span className="hi-text">Hi, I'm</span>
              <span className="name-text">Sarguru I</span>
            </h1>
          </motion.div>

          <motion.div
            className="roles-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {roles.map((role, index) => (
              <motion.span
                key={role}
                className="role-badge"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I'm an AI/ML Engineer and Prompt Engineer passionate about building intelligent, 
            interactive, and automated systems that bridge human creativity with machine precision.
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            From developing Multi-Agent AI systems and RAG (Retrieval-Augmented Generation) 
            architectures to integrating voice-based conversational processes, I focus on creating 
            real-world AI solutions that think, speak, and act.
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            As a traditional coder turned vibe coder, I blend technical depth with creative flow — 
            whether it's automating workflows in n8n, crafting smart prompts, or experimenting with 
            AI-driven video editing that tells stories in a new way.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a
              href="#projects"
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-button secondary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/sarguru-i/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Sargurui"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:sargurui66murugan@gmail.com"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="tel:6379032189"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPhone />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <div className="mouse"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

