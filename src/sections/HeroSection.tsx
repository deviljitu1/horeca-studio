import { useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import GhostButton from '../components/GhostButton';
import { navLinks } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <section 
      className="h-screen flex flex-col relative" 
      style={{ overflowX: 'clip' }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/65 z-[1] pointer-events-none"></div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="relative z-50">
        <nav className="flex justify-between items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8">
          {/* Logo */}
          <a
            href="#"
            className="text-[#D7E2EA] font-bold text-base sm:text-lg md:text-xl uppercase tracking-wider"
          >
            Horeca Studio
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider
                  text-sm lg:text-[1.4rem]
                  hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative h-10 w-10 rounded-full bg-white/10 backdrop-blur-lg
              flex items-center justify-center z-[60] cursor-pointer
              border border-white/20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Menu
              className={`absolute text-[#D7E2EA] transition-all duration-300
                ${menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
              size={18}
            />
            <X
              className={`absolute text-[#D7E2EA] transition-all duration-300
                ${menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
              size={18}
            />
          </button>
        </nav>
      </FadeIn>

      {/* ═══════════════════════════════════════════
          Full-Screen Overlay Nav — drops from top
          ═══════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[55] md:hidden flex flex-col
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Blurred dark background */}
        <div
          className={`absolute inset-0 bg-[#0C0C0C]/95 backdrop-blur-2xl
            transition-opacity duration-500
            ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full px-6 pt-5 pb-8">
          
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-[#D7E2EA] font-bold text-base uppercase tracking-wider">
              Horeca Studio
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20
                flex items-center justify-center cursor-pointer
                hover:bg-white/20 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={18} className="text-[#D7E2EA]" />
            </button>
          </div>
          
          {/* Decorative line */}
          <div
            className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-amber-500 mb-8
              transition-all duration-700 ease-out"
            style={{
              width: menuOpen ? '48px' : '0px',
              transitionDelay: menuOpen ? '200ms' : '0ms',
            }}
          />

          {/* Navigation Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between
                  py-4 border-b border-white/8
                  transition-colors duration-200 hover:border-white/25"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
                  transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${150 + index * 80}ms, 
                               transform 400ms cubic-bezier(0.16,1,0.3,1) ${150 + index * 80}ms`,
                }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-white/25 font-light text-xs tabular-nums">
                    0{index + 1}
                  </span>
                  <span className="text-white font-semibold text-2xl uppercase tracking-wide
                    group-hover:text-white/80 transition-colors duration-200">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/0 group-hover:text-white/60
                    -translate-x-2 group-hover:translate-x-0
                    transition-all duration-300"
                />
              </a>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-auto flex flex-col gap-5">
            {/* Contact info */}
            <div
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 400ms 450ms, transform 400ms 450ms',
              }}
            >
              <p className="text-white/30 font-light text-[0.65rem] uppercase tracking-[0.2em] mb-2">
                Get in touch
              </p>
              <p className="text-white/60 font-light text-sm mb-4">
                info@horecastudio.in
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                {[
                  { icon: 'instagram', href: '#', label: 'Instagram' },
                  { icon: 'facebook', href: '#', label: 'Facebook' },
                  { icon: 'youtube', href: '#', label: 'YouTube' },
                  { icon: 'linkedin', href: '#', label: 'LinkedIn' },
                ].map((social, i) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    className="h-9 w-9 rounded-full bg-white/8 border border-white/10
                      flex items-center justify-center
                      hover:bg-white/15 hover:border-white/25
                      transition-all duration-200"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? 'translateY(0)' : 'translateY(8px)',
                      transition: `opacity 300ms ${500 + i * 50}ms, transform 300ms ${500 + i * 50}ms, background-color 200ms, border-color 200ms`,
                    }}
                  >
                    {social.icon === 'instagram' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    )}
                    {social.icon === 'facebook' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 400ms 520ms, transform 400ms 520ms',
              }}
            >
              <ContactButton
                label="Schedule a Visit"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center relative z-10 px-4 sm:px-0">
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden">
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none
                w-full text-center
                text-[8vw] sm:text-[9vw] md:text-[9vw] lg:text-[8.5vw]
                mt-2 sm:mt-4 md:-mt-5"
            >
              A Kitchen Experience
            </h1>
          </div>
        </FadeIn>
        <FadeIn delay={0.25} y={40}>
          <div className="overflow-hidden">
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none
                w-full text-center
                text-[9vw] sm:text-[10vw] md:text-[10vw] lg:text-[9.5vw]
                -mt-1 sm:-mt-2"
            >
              Like No Other
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end
        gap-4 sm:gap-0
        pb-6 sm:pb-8 md:pb-10
        px-4 sm:px-6 md:px-10
        relative z-20"
      >
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[240px] sm:max-w-[280px] md:max-w-[340px]
              text-xs sm:text-sm md:text-base"
          >
            From concept to installation, we deliver premium commercial kitchen equipment
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <ContactButton label="Explore Studio" />
            <GhostButton label="Book a Demo" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
