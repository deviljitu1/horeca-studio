import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.3'],
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className={`${className}`}>
      {words.map((word, i) => (
        <WordSpan
          key={i}
          word={word}
          index={i}
          total={words.length}
          progress={scrollYProgress}
          isLast={i === words.length - 1}
        />
      ))}
    </p>
  );
};

interface WordSpanProps {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  isLast: boolean;
}

const WordSpan = ({ word, index, total, progress, isLast }: WordSpanProps) => {
  const start = index / total;
  const end = Math.min((index + 3) / total, 1);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }}>
      {word}{isLast ? '' : ' '}
    </motion.span>
  );
};

export default AnimatedText;
