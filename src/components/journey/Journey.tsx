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

interface JourneyProps {
  onOpenDocument: (pdfPath: string, title: string, subtitle: string, downloadName: string) => void;
}

export default function Journey({ onOpenDocument }: JourneyProps) {
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
                {entry.downloadUrl && (
                  <div className="journey__doc-actions">
                    <button
                      className="journey__view-btn"
                      title={`View ${entry.downloadLabel || 'Document'}`}
                      onClick={() =>
                        onOpenDocument(
                          entry.downloadUrl!,
                          entry.title,
                          entry.year,
                          (entry.downloadLabel || 'Document').replace(/\s/g, '_') + '.pdf'
                        )
                      }
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="journey__view-icon">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>View</span>
                    </button>
                    <a
                      href={entry.downloadUrl}
                      download
                      className="journey__download-btn"
                      title={entry.downloadLabel}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="journey__download-icon">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span>Download</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
