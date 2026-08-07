import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const businessTypes = [
  'Restaurant',
  'Café',
  'Hotel',
  'Cloud Kitchen',
  'Bakery',
  'QSR / Fast Food',
  'Catering',
  'Institutional Kitchen',
  'Bar / Lounge',
  'Other',
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(2.2rem, 10vw, 120px)' }}
        >
          Get in Touch
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/70 text-center font-light max-w-2xl mx-auto
          mb-10 sm:mb-16 md:mb-20
          text-sm sm:text-base">
          Whether you&apos;re starting a café, upgrading a restaurant, or building a high-volume kitchen
          — HORECA Studio is your one-stop destination for innovation, efficiency, and precision.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Contact Info */}
        <FadeIn delay={0.2} y={30}>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D7E2EA]/10
                flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#D7E2EA]" size={18} />
              </div>
              <div>
                <h3 className="text-[#D7E2EA] font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Visit Our Studio</h3>
                <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm leading-relaxed">
                  Horeca Studio, Raipur,<br />
                  Chhattisgarh, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D7E2EA]/10
                flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#D7E2EA]" size={18} />
              </div>
              <div>
                <h3 className="text-[#D7E2EA] font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Call Us</h3>
                <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D7E2EA]/10
                flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#D7E2EA]" size={18} />
              </div>
              <div>
                <h3 className="text-[#D7E2EA] font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Email</h3>
                <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm">info@horecastudio.in</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D7E2EA]/10
                flex items-center justify-center flex-shrink-0">
                <Clock className="text-[#D7E2EA]" size={18} />
              </div>
              <div>
                <h3 className="text-[#D7E2EA] font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Working Hours</h3>
                <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm">
                  Mon – Sat: 10:00 AM – 7:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn delay={0.3} y={30}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm block mb-1.5 sm:mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl sm:rounded-2xl
                  px-4 sm:px-5 py-3 sm:py-3.5 text-[#D7E2EA] font-light text-sm
                  placeholder:text-[#D7E2EA]/30
                  focus:border-[#D7E2EA]/40 focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm block mb-1.5 sm:mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl sm:rounded-2xl
                    px-4 sm:px-5 py-3 sm:py-3.5 text-[#D7E2EA] font-light text-sm
                    placeholder:text-[#D7E2EA]/30
                    focus:border-[#D7E2EA]/40 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm block mb-1.5 sm:mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl sm:rounded-2xl
                    px-4 sm:px-5 py-3 sm:py-3.5 text-[#D7E2EA] font-light text-sm
                    placeholder:text-[#D7E2EA]/30
                    focus:border-[#D7E2EA]/40 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm block mb-1.5 sm:mb-2">Business Type</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl sm:rounded-2xl
                  px-4 sm:px-5 py-3 sm:py-3.5 text-[#D7E2EA] font-light text-sm
                  focus:border-[#D7E2EA]/40 focus:outline-none transition-colors
                  appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23D7E2EA' stroke-opacity='0.5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                }}
              >
                <option value="" className="bg-[#0C0C0C]">Select your business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#0C0C0C]">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm block mb-1.5 sm:mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your kitchen requirements, format, capacity, etc."
                rows={4}
                className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl sm:rounded-2xl
                  px-4 sm:px-5 py-3 sm:py-3.5 text-[#D7E2EA] font-light text-sm
                  placeholder:text-[#D7E2EA]/30
                  focus:border-[#D7E2EA]/40 focus:outline-none transition-colors resize-none"
              />
            </div>

            <ContactButton label="Send Inquiry" className="w-full" />
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
