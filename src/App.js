import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loader-logo"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="loader-text">AI</span>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!loading && (
        <>
          <Navigation />
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
