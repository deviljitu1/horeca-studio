import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import { stats } from '../data/content';

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="overflow-hidden">
      <span
        className="font-black text-[#D7E2EA] leading-none block"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 5rem)' }}
      >
        {count.toLocaleString()}{suffix}
      </span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-[#0C0C0C] px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.2rem, 10vw, 120px)' }}
        >
          HORECA
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-20">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.15} y={30}>
            <div className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-[#D7E2EA]/60 font-light uppercase tracking-wider
                text-[0.6rem] sm:text-xs md:text-sm mt-1.5 sm:mt-3">
                {stat.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
