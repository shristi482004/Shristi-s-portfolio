import { motion } from 'framer-motion';

export default function BlueSparkle({ size = 24, style = {} }) {
  return (
    <motion.svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      style={style}
      animate={{ rotate: [6, -6, 6] }}
      transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
    >
      <path
        d="M15 1 L16.8 13.2 L29 15 L16.8 16.8 L15 29 L13.2 16.8 L1 15 L13.2 13.2 Z"
        fill="#6BA6FF"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
