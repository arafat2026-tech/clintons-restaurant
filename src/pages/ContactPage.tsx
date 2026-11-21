import React, { useState } from 'react';
import { PageId } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { GoldFlourishDivider, LuxuryBadge } from '../components/common/GoldOrnament';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Instagram,
  Facebook,
  Twitter,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  setCurrentPage: (page: PageId) => void;
  openReservationModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ openReservationModal }) => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Dining Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formState.email.trim() || !formState.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formState.phone.trim()) errs.phone = 'Please provide a contact phone number.';
    if (!formState.message.trim() || formState.message.length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Dining Inquiry',
        message: '',
      });
      setErrors({});
    }, 1200);
  };

  const getGoogleMapsDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      RESTAURANT_INFO.address
    )}`;
  };

  const getWhatsAppChatUrl = () => {
    const text = encodeURIComponent(
      `Hello Clinton's Restaurant Concierge! I'd like to make an inquiry regarding dining / takeaway.`
    );
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="bg-charcoal-900 text-ivory-100 min-h-screen">
      {/* =========================================================================
          CONTACT HERO
         ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-charcoal-950 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-950/80 to-charcoal-950"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <LuxuryBadge>
            <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
            <span>We Welcome You With Open Arms</span>
          </LuxuryBadge>

          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-ivory-100 uppercase tracking-tight">
            LET'S <span className="text-gold-gradient">CONNECT.</span>
          </h1>

          <GoldFlourishDivider />

          <p className="text-base sm:text-xl text-ivory-300 max-w-2xl mx-auto font-light leading-relaxed">
            Have a question about our menu, planning a private dining event, or wish to reserve a VIP booth? Our dedicated hospitality team is at your complete disposal.
          </p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & FORM SECTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-script text-gold-400 text-3xl">Concierge Desk</span>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight mt-1">
                CONTACT INFORMATION
              </h2>
              <div className="w-16 h-1 bg-gold-500 mt-3 rounded-full"></div>
              <p className="text-sm text-ivory-400 mt-4 leading-relaxed font-light">
                Feel free to reach us via phone, email, WhatsApp, or stop by our flagship location in the Gourmet District.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="bg-charcoal-850 border border-charcoal-800 hover:border-gold-500/40 p-5 rounded-2xl flex items-start gap-4 transition-all">
                <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-ivory-100">Restaurant Address</h3>
                  <p className="text-xs sm:text-sm text-ivory-300 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <a
                    href={getGoogleMapsDirectionsUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:underline font-semibold mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Turn-by-Turn Directions</span>
                  </a>
                </div>
              </div>

              {/* Phone & Hotline */}
              <div className="bg-charcoal-850 border border-charcoal-800 hover:border-gold-500/40 p-5 rounded-2xl flex items-start gap-4 transition-all">
                <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-ivory-100">Telephone Concierge</h3>
                  <p className="text-xs text-ivory-400 mt-0.5">Reservations, Takeaway & Immediate Questions</p>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-sm font-bold text-gold-400 hover:underline block mt-1"
                  >
                    {RESTAURANT_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-charcoal-850 border border-charcoal-800 hover:border-gold-500/40 p-5 rounded-2xl flex items-start gap-4 transition-all">
                <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-ivory-100">Email Inquiries</h3>
                  <p className="text-xs text-ivory-400 mt-0.5">Catering Proposals, Media & Feedback</p>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-sm font-bold text-gold-400 hover:underline block mt-1"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-charcoal-850 border border-charcoal-800 hover:border-gold-500/40 p-5 rounded-2xl flex items-start gap-4 transition-all">
                <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-ivory-100">Opening Hours</h3>
                  <div className="text-xs text-ivory-300 mt-1 space-y-1">
                    <p>{RESTAURANT_INFO.openingHours.weekdays}</p>
                    <p className="text-gold-400/90 font-medium">{RESTAURANT_INFO.openingHours.weekends}</p>
                    <p className="text-[11px] text-ivory-500">{RESTAURANT_INFO.openingHours.delivery}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Options: WhatsApp & Socials */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-charcoal-850 to-charcoal-850 border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-ivory-100">
                    Instant WhatsApp Support
                  </h4>
                  <p className="text-xs text-ivory-400 mt-0.5">
                    Connect directly with our manager on duty
                  </p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>

              <a
                href={getWhatsAppChatUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Socials */}
              <div className="pt-2 flex items-center justify-between border-t border-charcoal-800 text-xs">
                <span className="text-ivory-400">Follow Our Socials:</span>
                <div className="flex gap-2">
                  <a
                    href={RESTAURANT_INFO.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-lg bg-charcoal-800 hover:text-gold-400 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={RESTAURANT_INFO.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="p-2 rounded-lg bg-charcoal-800 hover:text-gold-400 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={RESTAURANT_INFO.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="p-2 rounded-lg bg-charcoal-800 hover:text-gold-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-charcoal-850/90 border border-charcoal-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <div className="mb-8">
                <span className="font-script text-gold-400 text-3xl">Send Us A Dispatch</span>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-ivory-100 uppercase tracking-tight mt-1">
                  GET IN TOUCH WITH CLINTON'S
                </h3>
                <p className="text-xs sm:text-sm text-ivory-400 mt-2">
                  Fill in the details below and our concierge team will respond within 2-4 hours.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-ivory-100">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-ivory-300 max-w-md mx-auto">
                    Thank you for reaching out to Clinton's Restaurant. Our hospitality director will review your dispatch and reply promptly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="e.g. Lord Alexander Vance"
                      className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-sm text-ivory-100 placeholder-ivory-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-charcoal-700 focus:border-gold-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-sm text-ivory-100 placeholder-ivory-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-charcoal-700 focus:border-gold-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+44 7946 0888"
                        className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-sm text-ivory-100 placeholder-ivory-500 focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-charcoal-700 focus:border-gold-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-charcoal-700 focus:border-gold-500 text-sm text-ivory-100 focus:outline-none"
                    >
                      <option value="General Dining Inquiry">General Dining Inquiry</option>
                      <option value="Table Reservation Assistance">Table Reservation Assistance</option>
                      <option value="Catering & Private Events">Catering & Private Events</option>
                      <option value="Allergy & Dietary Information">Allergy & Dietary Information</option>
                      <option value="Feedback & Compliments">Feedback & Compliments</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please let us know how we may assist you..."
                      className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-sm text-ivory-100 placeholder-ivory-500 focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-charcoal-700 focus:border-gold-500'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-sm uppercase tracking-wider shadow-gold-glow hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting Message...' : 'Submit Message'}</span>
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-ivory-500 pt-2">
                    Looking to book a table right away? You can also{' '}
                    <button
                      type="button"
                      onClick={openReservationModal}
                      className="text-gold-400 underline font-semibold"
                    >
                      reserve online here
                    </button>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GOOGLE MAPS EMBED SECTION
         ========================================================================= */}
      <section className="py-16 bg-charcoal-950 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-script text-gold-400 text-3xl">Find Our Doors</span>
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-ivory-100 uppercase tracking-tight mt-1">
                OUR PRIME LOCATION
              </h3>
              <p className="text-xs text-ivory-400 mt-1">
                42 King's Boulevard, Gourmet District • Complimentary valet parking available
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getGoogleMapsDirectionsUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-gold-glow"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Styled Map Container */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-2xl">
            <iframe
              title="Clinton's Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2889284242663!2d-0.14446542337989914!3d51.50793741065796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d502268421%3A0x6a7d62889992f961!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay Location Badge */}
            <div className="absolute top-6 left-6 z-10 bg-charcoal-900/95 backdrop-blur-md border border-gold-500/50 p-4 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 text-gold-400">
                <MapPin className="w-4 h-4" />
                <span className="font-serif font-bold text-sm text-ivory-100">Clinton's Restaurant</span>
              </div>
              <p className="text-xs text-ivory-400 mt-1">
                42 King's Boulevard, Gourmet District
              </p>
              <div className="mt-2 pt-2 border-t border-charcoal-700 flex justify-between text-[11px] text-ivory-300">
                <span>Valet: <strong className="text-gold-400">Yes</strong></span>
                <span>Subway: <strong className="text-gold-400">2 Mins Walk</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
