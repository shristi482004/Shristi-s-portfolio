export default function DashedFrame({ children, style = {}, className = '' }) {
  return (
    <div className={`dashed-frame ${className}`} style={style}>
      {children}
    </div>
  );
}
