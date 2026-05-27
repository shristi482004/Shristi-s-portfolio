import { motion } from 'framer-motion';

export default function PinkStar({ size = 32, style = {} }) {
  return (
    <motion.svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      style={style}
      animate={{ rotate: [-6, 6, -6] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <path
        d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z"
        fill="#FF8FB1"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
