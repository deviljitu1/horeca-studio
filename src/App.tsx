import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ExperienceZonesSection from './sections/ExperienceZonesSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import ProjectsSection from './sections/ProjectsSection';
import StatsSection from './sections/StatsSection';
import CTASection from './sections/CTASection';
import TestimonialsSection from './sections/TestimonialsSection';
import TrustMarquee from './sections/TrustMarquee';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceZonesSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <StatsSection />
      <CTASection />
      <TestimonialsSection />
      <TrustMarquee />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
