import { motion } from 'framer-motion';
import './EngineeringMindset.css';

const steps = [
  {
    number: '01',
    title: 'Problem',
    desc: 'Identify the real challenge — not just symptoms',
    example: 'Homestay owners juggling reviews, pricing, and guest communication manually',
  },
  {
    number: '02',
    title: 'Understand',
    desc: 'Research constraints, users, and existing solutions',
    example: 'Studying role-based access patterns, JWT auth flows, and AI integration points',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Architect the system before writing code',
    example: 'Planning MVC architecture with Dijkstra pathfinding in a warehouse system',
  },
  {
    number: '04',
    title: 'Build',
    desc: 'Write clean, modular, working software',
    example: 'Implementing a compiler front-end with lexical → syntax → semantic → TAC pipeline',
  },
  {
    number: '05',
    title: 'Test',
    desc: 'Verify correctness, security, and edge cases',
    example: 'Validating firewall rules against packet patterns, testing blocked vs. allowed traffic',
  },
  {
    number: '06',
    title: 'Improve',
    desc: 'Iterate based on feedback and new understanding',
    example: 'Adding 8 AI features to StayWise after the core booking system was stable',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export default function EngineeringMindset() {
  return (
    <section className="section mindset" aria-labelledby="mindset-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <span className="section-label">// Process</span>
          <h2 id="mindset-title" className="section-title">How I Think</h2>
          <p className="section-subtitle">
            Every project follows the same engineering discipline — understand the problem deeply, then build the solution methodically.
          </p>
        </motion.div>

        <div className="mindset__grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="mindset__step"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              <span className="mindset__number">{step.number}</span>
              <h3 className="mindset__title">{step.title}</h3>
              <p className="mindset__desc">{step.desc}</p>
              <p className="mindset__example">{step.example}</p>
              {i < steps.length - 1 && <div className="mindset__connector" aria-hidden="true" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
