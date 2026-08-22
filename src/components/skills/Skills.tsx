import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/projects';
import './Skills.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <span className="section-label">// Stack</span>
          <h2 id="skills-title" className="section-title">Technical Universe</h2>
          <p className="section-subtitle">
            Technologies and concepts I work with — organized by domain.
          </p>
        </motion.div>

        <div className="skills__layout">
          {/* Category Nav */}
          <div className="skills__categories" role="tablist">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.name}
                role="tab"
                aria-selected={i === activeCategory}
                className={`skills__category ${i === activeCategory ? 'skills__category--active' : ''}`}
                onClick={() => setActiveCategory(i)}
              >
                <span className="skills__category-icon">{cat.icon}</span>
                <span className="skills__category-name">{cat.name}</span>
                {i === activeCategory && (
                  <motion.div
                    className="skills__category-bg"
                    layoutId="skillCategory"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Skill Items */}
          <div className="skills__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="skills__items"
                role="tabpanel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {skillCategories[activeCategory].skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="skills__item"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.04 }}
                  >
                    <span className="skills__item-dot" />
                    <span className="skills__item-name">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
