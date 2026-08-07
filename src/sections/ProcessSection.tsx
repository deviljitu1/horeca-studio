import FadeIn from '../components/FadeIn';
import { processSteps } from '../data/content';

const ProcessSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.2rem, 10vw, 120px)' }}
        >
          Our Process
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#0C0C0C]/60 text-center font-light max-w-xl mx-auto
          mt-4 sm:mt-6
          mb-10 sm:mb-16 md:mb-28
          text-sm sm:text-base"
        >
          A seamless journey from your vision to a fully functional, future-ready kitchen.
        </p>
      </FadeIn>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-5 sm:left-6 md:left-10 top-0 bottom-0 w-px bg-[#0C0C0C]/10" />

        {processSteps.map((step, i) => (
          <FadeIn key={step.step} delay={i * 0.12} y={30}>
            <div className="flex items-start gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-12 md:mb-16 relative">
              {/* Step indicator */}
              <div className="flex-shrink-0 w-10 sm:w-12 md:w-20 flex flex-col items-center relative z-10">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0C0C0C] mb-1.5 sm:mb-2" />
                <span className="text-[#0C0C0C]/40 font-bold text-[0.6rem] sm:text-xs uppercase tracking-wider">
                  Step
                </span>
                <span className="text-[#0C0C0C] font-black text-xl sm:text-2xl md:text-3xl">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <div className="pt-0.5">
                <h3
                  className="text-[#0C0C0C] font-semibold uppercase
                    text-base sm:text-lg md:text-xl lg:text-2xl"
                >
                  {step.name}
                </h3>
                <p
                  className="text-[#0C0C0C]/60 font-light mt-1 sm:mt-2
                    text-xs sm:text-sm md:text-base"
                >
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
