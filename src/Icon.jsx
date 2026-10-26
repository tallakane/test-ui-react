export default function Icon({ name, className, style }) {
  return (
    <span
      className={`material-icons${className ? ` ${className}` : ''}`}
      style={{ userSelect: 'none', ...style }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
