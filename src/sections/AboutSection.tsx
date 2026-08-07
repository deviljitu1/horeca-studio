import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { aboutText, aboutFeatures } from '../data/content';
import { Eye, Users, Wrench, HeadphonesIcon } from 'lucide-react';

const featureIcons = [Eye, Users, Wrench, HeadphonesIcon];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center
        lg:min-h-screen
        px-4 sm:px-6 md:px-10 py-14 sm:py-20"
    >

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.2rem, 10vw, 160px)' }}
          >
            About Us
          </h2>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]
            text-sm sm:text-base"
        />

        {/* Feature cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl w-full">
          {aboutFeatures.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <FadeIn key={feature.title} delay={0.2 + i * 0.1} y={20}>
                <div className="border border-[#D7E2EA]/20 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6
                  bg-[#D7E2EA]/5 backdrop-blur-sm
                  hover:border-[#D7E2EA]/40 transition-colors duration-300 h-full">
                  <Icon className="text-[#D7E2EA] mb-2 sm:mb-3" size={22} />
                  <h3 className="text-[#D7E2EA] font-semibold text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#D7E2EA]/60 font-light text-[0.7rem] sm:text-xs md:text-sm leading-snug">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 sm:mt-16 md:mt-24 z-10">
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Us" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
