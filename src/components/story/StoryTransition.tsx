import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './StoryTransition.css';

const words = [
  { text: 'Student', sub: 'Learning the fundamentals of computer science' },
  { text: 'Builder', sub: 'Turning ideas into working software' },
  { text: 'Problem Solver', sub: 'Finding elegant solutions to real challenges' },
  { text: 'Engineer', sub: 'Designing systems that work' },
];

export default function StoryTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="story" aria-label="My evolution">
      <div className="story__inner">
        {words.map((word, i) => {
          const start = i / words.length;
          const peak = (i + 0.5) / words.length;
          const end = (i + 1) / words.length;

          return (
            <StoryWord
              key={word.text}
              text={word.text}
              sub={word.sub}
              scrollYProgress={scrollYProgress}
              start={start}
              peak={peak}
              end={end}
            />
          );
        })}
      </div>
    </section>
  );
}

function StoryWord({
  text,
  sub,
  scrollYProgress,
  start,
  peak,
  end,
}: {
  text: string;
  sub: string;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  peak: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, peak - 0.05, peak, end - 0.05, end], [0, 1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, peak, end], [40, 0, -40]);
  const scale = useTransform(scrollYProgress, [start, peak, end], [0.9, 1, 0.9]);

  return (
    <motion.div className="story__word-wrap" style={{ opacity, y, scale }}>
      <h2 className="story__word">{text}</h2>
      <p className="story__sub">{sub}</p>
    </motion.div>
  );
}
