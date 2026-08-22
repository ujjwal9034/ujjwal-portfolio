import { motion } from 'framer-motion';
import './About.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const traits = [
  { icon: '⟐', label: 'Curious', desc: 'Explores cybersecurity, compilers, AI, and web systems' },
  { icon: '⟁', label: 'Quick Learner', desc: 'Picks up new technologies by building with them' },
  { icon: '⬡', label: 'Problem Solver', desc: 'Approaches challenges through analysis and iteration' },
  { icon: '◇', label: 'Collaborative', desc: 'Works well in teams and communicates technical ideas clearly' },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <motion.div
        className="container about__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div className="about__text" variants={fadeInUp}>
          <span className="section-label">// About</span>
          <h2 id="about-title" className="section-title">
            Who is Ujjwal?
          </h2>
          <p className="about__bio">
            I'm a B.Tech Computer Science student at <strong>Graphic Era Deemed to Be University</strong>, Dehradun (currently in my 7th semester, graduating in 2027).
            I enjoy building real-world tech projects across web-based and desktop environments.
          </p>
          <p className="about__bio about__bio--secondary">
            Working with C, C++, Python, Java, and JavaScript/TypeScript, I enjoy solving complex problems through code, system design, and collaborative teamwork. I am responsible, curious, and always open to learning.
          </p>
        </motion.div>

        <motion.div className="about__traits" variants={stagger}>
          {traits.map((trait) => (
            <motion.div key={trait.label} className="about__trait" variants={fadeInUp}>
              <span className="about__trait-icon">{trait.icon}</span>
              <div>
                <h3 className="about__trait-label">{trait.label}</h3>
                <p className="about__trait-desc">{trait.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
