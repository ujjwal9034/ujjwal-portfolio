import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Loader from './components/layout/Loader';
import Hero from './components/hero/Hero';
import StoryTransition from './components/story/StoryTransition';
import About from './components/about/About';
import EngineeringMindset from './components/mindset/EngineeringMindset';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Journey from './components/journey/Journey';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';
import Cursor from './components/ui/Cursor';
import ResumeModal from './components/ui/ResumeModal';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setResumeOpen] = useState(false);
  const [modalProps, setModalProps] = useState<{
    pdfPath?: string;
    title?: string;
    subtitle?: string;
    downloadName?: string;
  }>({});
  const { theme, toggleTheme } = useTheme();

  const openResume = useCallback(() => {
    setModalProps({});
    setResumeOpen(true);
  }, []);

  const openDocument = useCallback((pdfPath: string, title: string, subtitle: string, downloadName: string) => {
    setModalProps({ pdfPath, title, subtitle, downloadName });
    setResumeOpen(true);
  }, []);

  const closeResume = useCallback(() => {
    setResumeOpen(false);
  }, []);

  return (
    <>
      <Cursor />
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navigation theme={theme} toggleTheme={toggleTheme} />
          <main id="main-content">
            <Hero onOpenResume={openResume} />
            <StoryTransition />
            <About />
            <EngineeringMindset />
            <Projects />
            <Skills />
            <Journey onOpenDocument={openDocument} />
            <Certifications onOpenDocument={openDocument} />
            <Contact onOpenResume={openResume} />
          </main>
          <Footer onOpenResume={openResume} />

          <AnimatePresence>
            {isResumeOpen && (
              <ResumeModal
                pdfPath={modalProps.pdfPath}
                title={modalProps.title}
                subtitle={modalProps.subtitle}
                downloadName={modalProps.downloadName}
                onClose={closeResume}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
