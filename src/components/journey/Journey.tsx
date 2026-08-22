import { motion } from 'framer-motion';
import { timeline } from '../../data/projects';
import './Journey.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export default function Journey() {
  return (
    <section id="journey" className="section journey" aria-labelledby="journey-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <span className="section-label">// Timeline</span>
          <h2 id="journey-title" className="section-title">The Journey</h2>
        </motion.div>

        <div className="journey__timeline">
          <div className="journey__line" aria-hidden="true" />
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.year}
              className="journey__entry"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              <div className="journey__dot" aria-hidden="true">
                <div className="journey__dot-inner" />
              </div>
              <div className="journey__content">
                <span className="journey__year">{entry.year}</span>
                <h3 className="journey__entry-title">{entry.title}</h3>
                <p className="journey__entry-desc">{entry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
