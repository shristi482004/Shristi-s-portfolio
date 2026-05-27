import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HighlighterUnderline({ children, color = 'var(--accent-yellow)' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <span
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: '-4px',
          right: '-4px',
          height: '40%',
          background: color,
          borderRadius: '2px',
          zIndex: 0,
          transformOrigin: 'left center',
          transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 300ms ease',
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  );
}
