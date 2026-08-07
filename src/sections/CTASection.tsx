import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import GhostButton from '../components/GhostButton';

const CTASection = () => {
  return (
    <section className="bg-[#0C0C0C] px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0} y={30}>
          <p className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6">
            Touch. Try. Learn.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6 sm:mb-8"
            style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
          >
            Experience Before You Invest
          </h2>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p className="text-[#D7E2EA]/70 font-light max-w-2xl mx-auto mb-8 sm:mb-12
            text-sm sm:text-base">
            Live demos, hands-on trials, and expert workshops help you experience real-time performance
            before you decide. Visit our 10,000 sq. ft. experience studio in Raipur.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <ContactButton label="Schedule a Visit" />
            <GhostButton label="Call Us Now" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
