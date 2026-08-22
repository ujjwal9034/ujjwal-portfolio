import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progressive load - don't block the user
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 300);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
      >
        <div className="loader__content">
          <motion.span
            className="loader__monogram"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
          >
            UJ
          </motion.span>
          <div className="loader__bar-track">
            <motion.div
              className="loader__bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
            />
          </div>
          <span className="loader__text">Building experience…</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
