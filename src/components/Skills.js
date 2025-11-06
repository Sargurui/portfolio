import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaDatabase, FaMicrophone, FaComments, FaCog, FaVideo } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: <FaBrain />,
      title: 'AI/ML Engineering',
      description: 'Building, fine-tuning, and deploying AI models for real-world applications',
      techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face']
    },
    {
      icon: <FaRobot />,
      title: 'Multi-Agent Systems',
      description: 'Designing AI agents that collaborate intelligently to solve complex problems',
      techs: ['LangChain', 'AutoGen', 'CrewAI', 'Agent Protocols']
    },
    {
      icon: <FaDatabase />,
      title: 'RAG Development',
      description: 'Connecting large data sources with LLMs for domain-specific AI solutions',
      techs: ['Vector DBs', 'FAISS', 'Pinecone', 'ChromaDB']
    },
    {
      icon: <FaMicrophone />,
      title: 'Voice Process AI',
      description: 'Enabling voice-driven interaction and real-time AI responses',
      techs: ['Whisper', 'Speech Recognition', 'TTS', 'Voice Agents']
    },
    {
      icon: <FaComments />,
      title: 'Prompt Engineering',
      description: 'Structuring prompts for optimal AI performance and accuracy',
      techs: ['GPT-4', 'Claude', 'Gemini', 'LLaMA']
    },
    {
      icon: <FaCog />,
      title: 'Workflow Automation (n8n)',
      description: 'Low-code/no-code automation for AI pipelines and integrations',
      techs: ['n8n', 'Zapier', 'Make', 'API Integration']
    },
    {
      icon: <FaVideo />,
      title: 'AI Video Creation',
      description: 'Fusing creativity and automation for smarter storytelling',
      techs: ['Video AI', 'FFmpeg', 'OpenCV', 'AI Editing']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What I Do
      </motion.h2>

      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        🚀 Always learning. Always building. Always vibing with AI.
      </motion.p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)',
              scale: 1.02
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="skill-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              {skill.icon}
            </motion.div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-techs">
              {skill.techs.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

