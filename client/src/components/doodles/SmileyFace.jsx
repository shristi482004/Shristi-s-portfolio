export default function SmileyFace({ size = 28, style = {} }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      style={style}
    >
      <circle cx="14" cy="14" r="12" stroke="#111111" strokeWidth="1.8" fill="none" />
      <circle cx="10" cy="11" r="1.5" fill="#111111" />
      <circle cx="18" cy="11" r="1.5" fill="#111111" />
      <path d="M9 17 Q14 22 19 17" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}
