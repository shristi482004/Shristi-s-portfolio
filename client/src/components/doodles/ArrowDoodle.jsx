export default function ArrowDoodle({ label = "that's me!", style = {} }) {
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', ...style }}>
      <span style={{ fontFamily: 'Caveat, cursive', fontSize: '1rem', color: 'var(--ink-black)', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <svg aria-hidden="true" width="38" height="32" viewBox="0 0 38 32" fill="none">
        <path
          d="M4 4 C8 14, 20 22, 34 28"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M28 22 L34 28 L26 30"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
