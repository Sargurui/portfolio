import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Supporticon Strategies Private Limited',
      logo: '/assets/supporticon.png',
      positions: [
        {
          title: 'AI Expert',
          type: 'Full-time',
          duration: 'Nov 2025 - Present',
          period: '1 mo',
          location: 'Salem, Tamil Nadu, India',
          mode: 'On-site',
          description: 'Building SaaS applications powered by agentic AI technologies. Developed HelpDude - an AI-powered support assistant using RAG technology for automated ticket response generation.'
        },
        {
          title: 'AI Expert - Trainee',
          type: 'Full-time',
          duration: 'May 2025 - Oct 2025',
          period: '6 mos',
          location: 'Salem, Tamil Nadu, India',
          mode: 'On-site',
          description: 'Built enterprise-level AI solutions focusing on multi-agent systems and workflow automation. Specialized in RAG architectures for domain-specific AI applications.'
        }
      ]
    },
    {
      company: 'ADOPLE AI',
      logo: '/assets/adople.png',
      positions: [
        {
          title: 'AI Software Engineer',
          type: 'Internship',
          duration: 'Jun 2024 - May 2025',
          period: '1 yr',
          location: 'Salem, Tamil Nadu, India',
          mode: 'Internship',
          description: 'Hands-on experience building AI agents and RAG systems. Developed enterprise AI agents with advanced capabilities in natural language understanding, document processing, and intelligent automation.'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
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
        Experience
      </motion.h2>

      <div className="experience-container">
        {experiences.map((exp, expIndex) => (
          <motion.div
            key={exp.company}
            className="company-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: expIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="company-header"
              whileHover={{ scale: 1.02 }}
            >
              <div className="company-logo-wrapper">
                <img src={`${process.env.PUBLIC_URL}${exp.logo}`} alt={exp.company} className="company-logo" />
              </div>
              <div className="company-info">
                <h3 className="company-name">{exp.company}</h3>
                <p className="company-duration">
                  {exp.positions[exp.positions.length - 1].duration.split(' - ')[0]} - {exp.positions[0].duration.split(' - ')[1]}
                </p>
              </div>
            </motion.div>

            <div className="positions-list">
              {exp.positions.map((position, posIndex) => (
                <motion.div
                  key={position.title}
                  className="position-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: posIndex * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    boxShadow: '0 10px 30px rgba(255, 215, 0, 0.2)'
                  }}
                  viewport={{ once: true }}
                >
                  <div className="position-timeline">
                    <div className="timeline-dot"></div>
                    {posIndex !== exp.positions.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>

                  <div className="position-content">
                    <div className="position-header">
                      <h4 className="position-title">{position.title}</h4>
                      <span className="position-type">{position.type}</span>
                    </div>
                    
                    <div className="position-meta">
                      <span className="position-duration">{position.duration}</span>
                      <span className="position-period">· {position.period}</span>
                    </div>

                    <div className="position-location">
                      <span>{position.location}</span>
                      <span className="separator">·</span>
                      <span>{position.mode}</span>
                    </div>

                    <p className="position-description">{position.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

