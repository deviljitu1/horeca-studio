import FadeIn from '../components/FadeIn';
import { services } from '../data/content';

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[60px]
        px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight
            mb-10 sm:mb-16 md:mb-28"
          style={{ fontSize: 'clamp(2.2rem, 10vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className={`flex flex-col sm:flex-row items-start gap-3 sm:gap-6 md:gap-12
                py-6 sm:py-8 md:py-12
                ${i < services.length - 1 ? 'border-b border-[rgba(12,12,12,0.15)]' : ''}`}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0
                  text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[8rem]"
              >
                {service.number}
              </span>

              {/* Content */}
              <div className="flex flex-col justify-center pt-0 sm:pt-2 md:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase
                    text-base sm:text-lg md:text-xl lg:text-2xl"
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60 mt-1 sm:mt-2
                    text-xs sm:text-sm md:text-base"
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
