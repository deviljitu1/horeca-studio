import FadeIn from '../components/FadeIn';
import { experienceZones } from '../data/content';

const zoneGradients = [
  'from-amber-500/20 to-orange-600/10',
  'from-emerald-500/20 to-teal-600/10',
  'from-red-500/20 to-rose-600/10',
  'from-violet-500/20 to-purple-600/10',
  'from-yellow-500/20 to-amber-600/10',
  'from-cyan-500/20 to-blue-600/10',
];

const ExperienceZonesSection = () => {
  return (
    <section
      id="zones"
      className="bg-[#0C0C0C] px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(2.2rem, 10vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/70 text-center font-light max-w-xl mx-auto
          mb-10 sm:mb-16 md:mb-28
          text-sm sm:text-base"
        >
          Dedicated zones packed with cutting-edge equipment for every hospitality format.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
        {experienceZones.map((zone, i) => (
          <FadeIn key={zone.number} delay={i * 0.1} y={30}>
            <div
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8
                bg-gradient-to-br ${zoneGradients[i]}
                border border-[#D7E2EA]/10
                hover:border-[#D7E2EA]/30 transition-all duration-500
                group cursor-pointer
                min-h-[120px] sm:min-h-[150px] md:min-h-[180px] flex flex-col justify-between`}
            >
              {/* Big number background */}
              <span
                className="absolute -right-2 sm:-right-4 -top-4 sm:-top-6 font-black text-[#D7E2EA]/5
                  group-hover:text-[#D7E2EA]/10 transition-colors duration-500
                  text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem]"
              >
                {zone.number}
              </span>

              <span className="text-[#D7E2EA]/50 font-light text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 relative z-10">
                {zone.label}
              </span>
              <div className="relative z-10">
                <span className="text-[#D7E2EA]/40 font-medium text-xs sm:text-sm mr-1 sm:mr-2">
                  {zone.number}
                </span>
                <h3
                  className="text-[#D7E2EA] font-semibold uppercase inline
                    text-sm sm:text-base md:text-lg lg:text-[1.8rem]"
                >
                  {zone.name}
                </h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ExperienceZonesSection;
