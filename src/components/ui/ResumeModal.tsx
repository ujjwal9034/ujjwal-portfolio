import { motion } from 'framer-motion';
import './ResumeModal.css';

interface ResumeModalProps {
  pdfPath?: string;
  title?: string;
  subtitle?: string;
  downloadName?: string;
  onClose: () => void;
}

export default function ResumeModal({
  pdfPath = '/resume.pdf',
  title = 'Ujjwal Pratap Singh',
  subtitle = 'Curriculum Vitae',
  downloadName = 'Ujjwal_Pratap_Singh_Resume.pdf',
  onClose,
}: ResumeModalProps) {
  const isImage = /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(pdfPath);
  return (
    <motion.div
      className="resume-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="resume-modal__backdrop"
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
            <h3 id="resume-title" className="resume-modal__title">{title}</h3>
            <p className="resume-modal__subtitle">{subtitle}</p>
          </div>
          
          <div className="resume-modal__actions">
            <a
              href={pdfPath}
              download={downloadName}
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
          {isImage ? (
            <div className="resume-modal__image-container">
              <img src={pdfPath} alt={title} className="resume-modal__image" />
            </div>
          ) : (
            <object
              data={pdfPath}
              type="application/pdf"
              className="resume-modal__viewer"
            >
              <iframe
                src={pdfPath}
                className="resume-modal__viewer"
                title={`${title} PDF Viewer`}
              >
                <p>Your browser does not support PDF viewing. <a href={pdfPath} download>Download the PDF</a> instead.</p>
              </iframe>
            </object>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
