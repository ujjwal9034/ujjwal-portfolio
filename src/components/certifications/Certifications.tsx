import { motion } from 'framer-motion';
import { certifications } from '../../data/projects';
import './Certifications.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

function CertIcon({ type }: { type: string }) {
  if (type === 'aws') {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.39.39 0 01.064.208c0 .096-.064.192-.192.288l-.64.424a.478.478 0 01-.256.08c-.096 0-.192-.048-.288-.136a2.96 2.96 0 01-.344-.448 7.392 7.392 0 01-.296-.56c-.744.88-1.68 1.32-2.808 1.32-.8 0-1.44-.228-1.904-.684-.464-.456-.7-1.064-.7-1.82 0-.808.288-1.46.872-1.964.584-.504 1.36-.756 2.344-.756.328 0 .664.024 1.016.072.352.048.712.12 1.088.208v-.696c0-.72-.152-1.224-.448-1.52-.304-.296-.816-.44-1.544-.44-.328 0-.672.04-1.024.12-.352.08-.696.192-1.032.328-.152.072-.264.112-.328.128a.57.57 0 01-.144.024c-.128 0-.192-.092-.192-.284v-.496c0-.148.016-.26.056-.328.04-.068.12-.136.248-.204a5.228 5.228 0 011.16-.412 5.38 5.38 0 011.344-.176c1.024 0 1.772.232 2.252.696.472.464.712 1.168.712 2.112v2.784z" fill="currentColor"/>
        <path d="M18.098 11.724a.56.56 0 01-.28.068c-.096 0-.2-.048-.304-.152a3.33 3.33 0 01-.36-.464 7.62 7.62 0 01-.312-.576c-.784.92-1.768 1.38-2.952 1.38-.84 0-1.512-.24-2-.72-.488-.48-.736-1.12-.736-1.912 0-.848.304-1.536.92-2.064.616-.528 1.432-.792 2.464-.792.344 0 .696.024 1.064.072.368.048.744.12 1.136.216v-.728c0-.756-.16-1.284-.472-1.596-.32-.312-.856-.464-1.624-.464-.344 0-.704.04-1.072.128a5.95 5.95 0 00-1.08.344c-.16.076-.28.12-.344.136a.625.625 0 01-.152.024c-.136 0-.2-.096-.2-.296v-.52c0-.156.02-.272.06-.344.04-.072.124-.144.264-.216a5.5 5.5 0 011.216-.432 5.646 5.646 0 011.408-.184c1.076 0 1.864.244 2.368.728.496.484.748 1.22.748 2.216v2.912c0 .176-.096.264-.28.264h-.012z" fill="currentColor"/>
        <path d="M20.762 14.084c-.4.124-.82.188-1.256.188-.652 0-1.168-.18-1.54-.544-.368-.36-.556-.844-.556-1.448 0-.556.196-.984.592-1.288.396-.304.928-.456 1.6-.456.312 0 .636.032.972.096.336.064.684.156 1.044.272v-.612c0-.636-.136-1.084-.404-1.348-.272-.264-.728-.396-1.372-.396-.296 0-.604.036-.92.108-.316.072-.624.172-.924.296-.14.064-.24.1-.304.116a.53.53 0 01-.128.02c-.116 0-.172-.084-.172-.256v-.44c0-.132.016-.232.048-.296.032-.064.104-.128.224-.188.296-.168.652-.308 1.068-.42.416-.116.856-.172 1.32-.172.932 0 1.612.212 2.044.636.424.424.64 1.068.64 1.932v2.536h-.002z" fill="currentColor"/>
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2zm0 2.18l7.36 4.26v7.12L12 19.82l-7.36-4.26V8.44L12 4.18z" fill="currentColor" opacity="0.3"/>
      <path d="M12 7.5l-4.5 2.6v5.2L12 17.9l4.5-2.6v-5.2L12 7.5z" fill="currentColor"/>
    </svg>
  );
}

interface CertificationsProps {
  onOpenDocument: (pdfPath: string, title: string, subtitle: string, downloadName: string) => void;
}

export default function Certifications({ onOpenDocument }: CertificationsProps) {
  return (
    <section className="section certifications" aria-labelledby="certs-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">// Credentials</span>
          <h2 id="certs-title" className="section-title">Certifications</h2>
        </motion.div>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="certs__card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              onClick={() => {
                if (cert.credentialUrl) {
                  onOpenDocument(
                    cert.credentialUrl,
                    cert.title,
                    cert.issuer,
                    cert.title.replace(/\s/g, '_') + '.pdf'
                  );
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && cert.credentialUrl) {
                  e.preventDefault();
                  onOpenDocument(
                    cert.credentialUrl,
                    cert.title,
                    cert.issuer,
                    cert.title.replace(/\s/g, '_') + '.pdf'
                  );
                }
              }}
            >
              <div className="certs__card-icon">
                <CertIcon type={cert.icon} />
              </div>
              <div className="certs__card-info">
                <h3 className="certs__card-title">{cert.title}</h3>
                <p className="certs__card-issuer">{cert.issuer}</p>
              </div>
              <div className="certs__card-shimmer" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
