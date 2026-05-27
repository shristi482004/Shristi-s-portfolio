export default function StickyNote({ children, color = 'pink', rotate = -3, style = {}, className = '' }) {
  const bgMap = {
    pink: 'var(--accent-pink)',
    yellow: 'var(--accent-yellow)',
    white: 'var(--paper-white)',
    blue: 'var(--accent-blue)',
    purple: 'var(--accent-purple)',
  };
  return (
    <div
      className={`sticky-note ${className}`}
      style={{
        background: bgMap[color] || bgMap.pink,
        transform: `rotate(${rotate}deg)`,
        boxShadow: '3px 4px 0px rgba(0,0,0,0.18)',
        border: '1.5px solid var(--border-ink)',
        borderRadius: '2px',
        padding: '10px 14px',
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
