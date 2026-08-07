import { useRef, useEffect, useState, useCallback } from 'react';
import { marqueeImages } from '../data/content';

const MarqueeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const row1 = marqueeImages.slice(0, 11);
  const row2 = marqueeImages.slice(11);

  // Triple arrays for seamless scrolling
  const row1Triple = [...row1, ...row1, ...row1];
  const row2Triple = [...row2, ...row2, ...row2];

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
    setOffset(scrollOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-6 sm:pb-10 overflow-hidden"
    >
      {/* Row 1 — moves right */}
      <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-2 sm:gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Triple.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[200px] h-[130px] sm:w-[260px] sm:h-[170px] md:w-[320px] md:h-[200px] lg:w-[420px] lg:h-[270px]
                rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Row 2 — moves left */}
      <div className="flex gap-2 sm:gap-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-2 sm:gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Triple.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[200px] h-[130px] sm:w-[260px] sm:h-[170px] md:w-[320px] md:h-[200px] lg:w-[420px] lg:h-[270px]
                rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
