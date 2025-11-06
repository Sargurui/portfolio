import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact from ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\n` +
      `Sent from Portfolio Contact Form`
    );
    
    const mailtoLink = `mailto:sargurui66murugan@gmail.com?subject=${subject}&body=${body}`;
    
    try {
      // Try to open email client
      window.location.href = mailtoLink;
      
      // Show success message after short delay
      setTimeout(() => {
        alert('Email client opened! Please send the email from your email application.\n\nIf the email client didn\'t open, please email directly to: sargurui66murugan@gmail.com');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 500);
      
    } catch (error) {
      // Fallback: show contact info
      alert(
        'Unable to open email client automatically.\n\n' +
        'Please send your message to:\n' +
        'sargurui66murugan@gmail.com\n\n' +
        'Or call: +91 6379032189'
      );
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'sargurui66murugan@gmail.com',
      link: 'mailto:sargurui66murugan@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 6379032189',
      link: 'tel:6379032189'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Salem, Tamil Nadu, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sarguru-i/',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      link: 'https://github.com/Sargurui',
      color: '#ffffff'
    }
  ];

  return (
    <section id="contact" className="contact">
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
        Get In Touch
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project in mind or want to discuss AI solutions? Let's connect!
      </motion.p>

      <div className="contact-container">
        <motion.div
          className="contact-info-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="info-title">Contact Information</h3>
          
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <div className="info-icon">{info.icon}</div>
                <div className="info-details">
                  <h4 className="info-label">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="info-value">{info.value}</a>
                  ) : (
                    <p className="info-value">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="social-section">
            <h4 className="social-title">Connect With Me</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 10px 30px ${social.color}40`
                  }}
                  viewport={{ once: true }}
                >
                  <div className="social-icon" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>© 2025 Sarguru I. All rights reserved.</p>
        <p className="footer-tagline">Built with ❤️ and AI</p>
      </motion.footer>
    </section>
  );
};

export default Contact;

