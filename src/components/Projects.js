import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'HelpDude - AI-Powered Support Assistant',
      description: 'Built an AI-powered ticketing agent using RAG technology that drafts intelligent email responses based on ticket issues. Published on Freshworks Marketplace.',
      tech: ['RAG', 'LangChain', 'FAISS', 'Freshdesk API', 'Python'],
      link: 'https://www.freshworks.com/apps/helpdude_1/',
      github: null,
      type: 'SaaS Application',
      status: 'Published'
    },
    {
      title: 'RAG Voice Agent',
      description: 'A Retrieval-Augmented Generation system with voice interaction, powered by LangChain, Unstructured Loader, FAISS, and LLMs. Features voice-to-text, text-to-speech, and intelligent document querying.',
      tech: ['RAG', 'Voice AI', 'LangChain', 'FAISS', 'Whisper', 'Flask'],
      link: null,
      github: 'https://github.com/Sargurui/RAG-System-With-Voice',
      type: 'AI Agent',
      status: 'Open Source'
    },
    {
      title: 'MySQL Agent',
      description: 'Intelligent agent that interacts with MySQL databases using natural language. Converts human queries into SQL and provides intelligent data analysis.',
      tech: ['LangChain', 'MySQL', 'NLP', 'Python', 'SQL'],
      link: null,
      github: 'https://github.com/Sargurui/MySql_Agent',
      type: 'Database Agent',
      status: 'Open Source'
    },
    {
      title: 'AI-Powered CSV/XLS Analyzer',
      description: 'Advanced data analysis application that uses AI to analyze and visualize data from CSV and Excel files. Provides intelligent insights and recommendations.',
      tech: ['Pandas', 'AI Analysis', 'Data Viz', 'Python', 'Streamlit'],
      link: null,
      github: 'https://github.com/Sargurui/AI-Powered-CSV-XLS-App',
      type: 'Data Analytics',
      status: 'Open Source'
    },
    {
      title: 'LinkedIn Post Automation with n8n',
      description: 'Automated workflow for scheduling and posting content on LinkedIn using n8n. Integrates with AI for content generation and optimal posting times.',
      tech: ['n8n', 'LinkedIn API', 'Workflow Automation', 'AI Integration'],
      link: null,
      github: null,
      type: 'Automation',
      status: 'In Production'
    }
  ];

  return (
    <section id="projects" className="projects">
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
        Featured Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
          >
            <div className="project-header">
              <div className="project-type-badge">{project.type}</div>
              <div className="project-status-badge">{project.status}</div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> Code
                </motion.a>
              )}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

