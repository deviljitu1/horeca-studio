import { footerQuickLinks, footerServices, footerZones } from '../data/content';

const FooterSection = () => {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-[#D7E2EA] font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider mb-3 sm:mb-4">
              Horeca Studio
            </h3>
            <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm leading-relaxed max-w-xs">
              India&apos;s first-of-its-kind Commercial Kitchen Equipment Experience Studio.
              Your one-stop destination for innovation, efficiency, and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm hover:text-[#D7E2EA]
                      transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <span className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Zones */}
          <div>
            <h4 className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
              Experience Zones
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerZones.map((zone) => (
                <li key={zone}>
                  <span className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm">
                    {zone}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D7E2EA]/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[#D7E2EA]/30 font-light text-xs sm:text-sm">
            © 2026 Horeca Studio. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-[#D7E2EA]/30 font-light text-xs sm:text-sm hover:text-[#D7E2EA]/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#D7E2EA]/30 font-light text-xs sm:text-sm hover:text-[#D7E2EA]/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
