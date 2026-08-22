import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4 + i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  }),
};

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <div className="hero__content">
        <div className="hero__statement">
          {['BUILDING', 'SYSTEMS.', 'SOLVING', 'PROBLEMS.', 'LEARNING', 'WHAT\'S NEXT.'].map((word, i) => (
            <motion.span
              key={word + i}
              className={`hero__word ${i % 2 === 1 ? 'hero__word--accent' : ''}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textReveal}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="hero__meta"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="hero__name">Ujjwal Pratap Singh</h1>
          <p className="hero__role">
            B.Tech Computer Science — Building real-world software across web, desktop, cybersecurity & AI.
          </p>
        </motion.div>

        <motion.div
          className="hero__actions"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a href="#projects" className="hero__cta hero__cta--primary">
            <span>Explore Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button onClick={onOpenResume} className="hero__cta hero__cta--secondary">
            Resume
          </button>
        </motion.div>

        <motion.div
          className="hero__social"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a href="https://github.com/ujjwal9034" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hero__social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ujjwal-pratap-singh-a50854326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hero__social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
}
