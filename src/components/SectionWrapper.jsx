import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionWrapper({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className={`min-h-screen snap-start ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
