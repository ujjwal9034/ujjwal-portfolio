import { motion } from 'framer-motion';
import './ResumeModal.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-title">
      {/* Backdrop */}
      <motion.div
        className="resume-modal__backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Content Container */}
      <motion.div
        className="resume-modal__content"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="resume-modal__header">
          <div>
            <h3 id="resume-title" className="resume-modal__title">Ujjwal Pratap Singh</h3>
            <p className="resume-modal__subtitle">Curriculum Vitae</p>
          </div>
          
          <div className="resume-modal__actions">
            <a
              href="/resume.pdf"
              download="Ujjwal_Pratap_Singh_Resume.pdf"
              className="resume-modal__btn resume-modal__btn--primary"
              title="Download PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Download</span>
            </a>
            
            <button className="resume-modal__close" onClick={onClose} aria-label="Close modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="resume-modal__body">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="resume-modal__viewer"
          >
            <iframe
              src="/resume.pdf"
              className="resume-modal__viewer"
              title="Ujjwal Pratap Singh Resume PDF"
            >
              <p>Your browser does not support PDF viewing. <a href="/resume.pdf" download>Download the PDF</a> instead.</p>
            </iframe>
          </object>
        </div>
      </motion.div>
    </div>
  );
}
