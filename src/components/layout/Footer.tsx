import { useEffect, useState } from 'react';
import './Footer.css';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const [easterEgg, setEasterEgg] = useState(false);

  // Konami code easter egg
  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let pos = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === konami[pos]) {
        pos++;
        if (pos === konami.length) {
          setEasterEgg(true);
          pos = 0;
          setTimeout(() => setEasterEgg(false), 4000);
        }
      } else {
        pos = 0;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__monogram">UJ</span>
          <p className="footer__tagline">Computer Science · Builder · Learner</p>
        </div>

        <div className="footer__links">
          <a href="https://github.com/ujjwal9034" target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ujjwal-pratap-singh-a50854326/" target="_blank" rel="noopener noreferrer" className="footer__link">
            LinkedIn
          </a>
          <a href="mailto:Ujjwalchauhan671@gmail.com" className="footer__link">
            Email
          </a>
          <button onClick={onOpenResume} className="footer__link">
            Resume
          </button>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Ujjwal Pratap Singh. Built with intention.
          </p>
        </div>

        {easterEgg && (
          <div className="footer__easter-egg" role="alert">
            <p className="footer__easter-text">
              <span className="footer__easter-prompt">&gt;</span> Still curious? Good. That's the most important trait an engineer can have.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
