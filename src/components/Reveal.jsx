import { motion } from 'framer-motion';

/**
 * Wraps children in a scroll-triggered fade-up reveal, matching the
 * `.reveal-on-scroll` / `.reveal-up` behavior from the original mockups.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div', ...props }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
