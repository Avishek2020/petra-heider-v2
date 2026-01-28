interface DividerProps {
  className?: string;
}

const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-memorial-gold/50" />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-memorial-gold">
        <path
          d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-memorial-gold/50" />
    </div>
  );
};

export default Divider;
