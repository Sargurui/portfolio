import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master's degree, Computer Science",
      institution: 'Government Arts College, Salem',
      duration: 'Jul 2023 - May 2025',
      grade: 'First Class',
      icon: <FaGraduationCap />,
      activities: [
        'AI and Machine Learning Club: Hackathons and AI research projects',
        'Web Development Society: Open-source contributions and tech workshops',
        'Java Programming Group: Coding challenges and advanced Java seminars',
        'Technical Documentation Team: Created software guides and documentation',
        'Prompt Engineering Workshops: Focused on NLP techniques',
        'Certified Java Programmer Study Group: Collaborated for Java certification'
      ]
    },
    {
      degree: "Bachelor's degree, Computer Science",
      institution: 'Government Arts College, Salem',
      duration: '2020 - 2023',
      grade: 'First Class Distinction',
      icon: <FaTrophy />,
      activities: []
    }
  ];

  return (
    <section id="education" className="education">
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
        Education
      </motion.h2>

      <div className="education-container">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)'
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="edu-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              {edu.icon}
            </motion.div>

            <div className="edu-content">
              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <h4 className="edu-institution">{edu.institution}</h4>
                </div>
                <motion.div
                  className="grade-badge"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaAward className="award-icon" />
                  <span>{edu.grade}</span>
                </motion.div>
              </div>

              <p className="edu-duration">{edu.duration}</p>

              {edu.activities.length > 0 && (
                <div className="activities-section">
                  <h5 className="activities-title">Activities and Societies:</h5>
                  <ul className="activities-list">
                    {edu.activities.map((activity, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {activity}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

