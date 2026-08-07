import { trustItems } from '../data/content';

const TrustMarquee = () => {
  const items = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <section className="bg-[#0C0C0C] py-12 sm:py-16 overflow-hidden border-y border-[#D7E2EA]/10">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span
            key={`m-${i}`}
            className="text-[#D7E2EA]/40 font-medium uppercase tracking-widest
              text-lg sm:text-xl md:text-2xl mx-6 sm:mx-8 flex-shrink-0
              flex items-center gap-6 sm:gap-8"
          >
            {item}
            <span className="text-[#D7E2EA]/20 text-sm">•</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustMarquee;
