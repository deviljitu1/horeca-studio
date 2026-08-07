import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import { testimonials } from '../data/content';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setCurrentIndex(((index % testimonials.length) + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goTo(currentIndex + 1);
      } else {
        goTo(currentIndex - 1);
      }
    }
  };

  return (
    <section className="bg-[#0C0C0C] px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32 overflow-hidden">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(2.2rem, 10vw, 120px)' }}
        >
          Testimonials
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/50 text-center font-light uppercase tracking-widest
          text-xs sm:text-sm mb-10 sm:mb-16 md:mb-20">
          Trusted by Industry Leaders
        </p>
      </FadeIn>

      {/* Carousel */}
      <div
        className="relative max-w-6xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation arrows (desktop) */}
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="hidden sm:flex absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full bg-[#D7E2EA]/10 backdrop-blur-sm
            items-center justify-center
            hover:bg-[#D7E2EA]/20 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="text-[#D7E2EA]" size={20} />
        </button>
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="hidden sm:flex absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full bg-[#D7E2EA]/10 backdrop-blur-sm
            items-center justify-center
            hover:bg-[#D7E2EA]/20 transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="text-[#D7E2EA]" size={20} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={`t-${i}`}
                className="w-full flex-shrink-0 px-1 sm:px-2"
              >
                <div
                  className="border border-[#D7E2EA]/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
                    bg-[#D7E2EA]/5 backdrop-blur-sm
                    hover:border-[#D7E2EA]/30 transition-all duration-300
                    max-w-2xl mx-auto"
                >
                  <Quote className="text-[#D7E2EA]/20 mb-3 sm:mb-4" size={24} />
                  <p className="text-[#D7E2EA]/80 font-light leading-relaxed mb-4 sm:mb-6
                    text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-600 to-amber-500
                      flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-[#D7E2EA] font-medium text-xs sm:text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-[#D7E2EA]/50 font-light text-[0.65rem] sm:text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer
                ${i === currentIndex ? 'bg-[#D7E2EA] w-6' : 'bg-[#D7E2EA]/30 w-2'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
