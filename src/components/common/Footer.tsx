import React, { useState } from 'react';
import { PageId } from '../../types';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { GoldFlourishDivider } from './GoldOrnament';
import { MapPin, Phone, Mail, Clock, Send, ArrowUp, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  openMenuModal: () => void;
  openReservationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  openMenuModal,
  openReservationModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-200 pt-16 pb-8 border-t border-gold-500/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-b from-gold-500/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top brand flourish */}
        <div className="text-center mb-12">
          <GoldFlourishDivider subtitle="Artisanal Fast Food" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-charcoal-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-500 bg-charcoal-850 flex items-center justify-center">
                <span className="font-serif font-bold text-xl text-gold-400">C</span>
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-xl tracking-wider text-ivory-100">
                  CLINTON'S
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-semibold">
                  RESTAURANT
                </p>
              </div>
            </div>

            <p className="text-ivory-400 text-sm leading-relaxed">
              Elevating fast food into an exquisite dining affair. Where dry-aged patties, golden crisp poultry, and fire-baked pizzas meet luxury hospitality.
            </p>

            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                Follow Our Culinary Journey
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href={RESTAURANT_INFO.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-charcoal-850 border border-charcoal-700 hover:border-gold-500 text-ivory-300 hover:text-gold-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-charcoal-850 border border-charcoal-700 hover:border-gold-500 text-ivory-300 hover:text-gold-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full bg-charcoal-850 border border-charcoal-700 hover:border-gold-500 text-ivory-300 hover:text-gold-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-ivory-100 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory-300">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    scrollToTop();
                  }}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-charcoal-600 group-hover:bg-gold-400 transition-colors"></span>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    scrollToTop();
                  }}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-charcoal-600 group-hover:bg-gold-400 transition-colors"></span>
                  About Us & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    scrollToTop();
                  }}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-charcoal-600 group-hover:bg-gold-400 transition-colors"></span>
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    scrollToTop();
                  }}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-charcoal-600 group-hover:bg-gold-400 transition-colors"></span>
                  Contact & Location
                </button>
              </li>
              <li>
                <button
                  onClick={openMenuModal}
                  className="hover:text-gold-400 text-gold-300 font-medium transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-400 transition-colors"></span>
                  Full Menu & Prices
                </button>
              </li>
              <li>
                <button
                  onClick={openReservationModal}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-charcoal-600 group-hover:bg-gold-400 transition-colors"></span>
                  Table Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-bold text-ivory-100 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm text-ivory-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-gold-400">
                  {RESTAURANT_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-gold-400">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3 pt-1 border-t border-charcoal-800">
                <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="text-ivory-200 font-medium">Mon - Fri: 10:00 AM – 11:00 PM</p>
                  <p className="text-gold-400/90 font-medium">Sat - Sun: 10:00 AM – Midnight</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / VIP Club */}
          <div>
            <h4 className="font-serif text-lg font-bold text-ivory-100 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              The Gold Club
            </h4>
            <p className="text-xs text-ivory-400 mb-3 leading-relaxed">
              Subscribe for secret chef specials, priority private tasting invitations, and 15% off your first digital order.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-xs text-ivory-100 placeholder-ivory-500 pr-10 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-2.5 rounded-md bg-gold-500 hover:bg-gold-400 text-charcoal-950 flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-2 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Welcome to The Gold Club! Check your inbox.</span>
                </div>
              )}
            </form>

            <div className="mt-4 p-3 rounded-lg bg-charcoal-900 border border-gold-500/10 text-xs text-gold-300/80">
              <span className="font-semibold text-gold-400">WhatsApp Hotline:</span> Instant ordering & live chat available 24/7.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-500 gap-4">
          <p>© {new Date().getFullYear()} Clinton's Restaurant. All rights reserved. Crafted with passion & luxury.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-ivory-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-ivory-300 cursor-pointer">Terms of Hospitality</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-charcoal-850 hover:bg-gold-500 hover:text-charcoal-950 border border-charcoal-700 text-gold-400 transition-all flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
