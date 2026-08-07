interface GhostButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  dark?: boolean;
}

const GhostButton = ({ label = 'Live Project', onClick, className = '', dark = false }: GhostButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full font-medium uppercase tracking-widest
        px-5 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5
        text-[0.65rem] sm:text-xs md:text-sm
        cursor-pointer transition-all duration-200
        ${dark
          ? 'border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C]/10'
          : 'border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10'
        }
        ${className}`}
    >
      {label}
    </button>
  );
};

export default GhostButton;
