interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

const ContactButton = ({ label = 'Explore Studio', onClick, className = '' }: ContactButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full font-medium uppercase tracking-widest text-white
        px-5 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 lg:px-12 lg:py-4
        text-[0.65rem] sm:text-xs md:text-sm
        cursor-pointer transition-transform duration-200 hover:scale-105
        ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  );
};

export default ContactButton;
