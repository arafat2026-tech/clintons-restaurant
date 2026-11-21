import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/restaurantData';
import { GoldFlourishDivider, LuxuryBadge } from '../components/common/GoldOrnament';
import {
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  Smartphone,
  Award,
  Gift,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage: (page: PageId) => void;
  openCart: () => void;
  openMenuModal: () => void;
  openReservationModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  setCurrentPage,
  openCart,
  openMenuModal,
  openReservationModal,
}) => {
  const renderServiceIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-gold-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-gold-400" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-gold-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-gold-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-gold-400" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-gold-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold-400" />;
    }
  };

  const handleServiceAction = (target: string) => {
    if (target === 'order') {
      openCart();
    } else if (target === 'reserve') {
      openReservationModal();
    } else if (target === 'contact') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      openMenuModal();
    }
  };

  return (
    <div className="bg-charcoal-900 text-ivory-100 min-h-screen">
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-charcoal-950 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-950/80 to-charcoal-950"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <LuxuryBadge>
            <UtensilsCrossed className="w-3.5 h-3.5 text-gold-400" />
            <span>Excellence In Every Dimension</span>
          </LuxuryBadge>

          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-ivory-100 uppercase tracking-tight">
            OUR <span className="text-gold-gradient">SERVICES</span>
          </h1>

          <GoldFlourishDivider />

          <p className="text-base sm:text-xl text-ivory-300 max-w-2xl mx-auto font-light leading-relaxed">
            From intimate golden dining room seatings to express thermal delivery and lavish corporate banquets, discover how Clinton's serves you with distinction.
          </p>
        </div>
      </section>

      {/* =========================================================================
          THE 6 CORE SERVICES GRID
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-script text-gold-400 text-3xl">Comprehensive Hospitality</span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight mt-1">
            SIX WAYS WE SERVE YOU
          </h2>
          <GoldFlourishDivider />
          <p className="text-sm text-ivory-300">
            Every service is executed with high-standard precision, thermal temperature control, and white-glove care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-charcoal-850/80 border border-charcoal-800 hover:border-gold-500/50 rounded-2xl overflow-hidden shadow-dark-card hover:shadow-gold-glow transition-all duration-300 flex flex-col group"
            >
              {/* Photo with subtle zoom */}
              <div className="relative h-56 overflow-hidden bg-charcoal-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent"></div>

                {/* Index & Icon */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-950/80 border border-gold-500/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-gold-400 bg-charcoal-950/80 px-2 py-1 rounded-md border border-charcoal-700">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-ivory-100 group-hover:text-gold-400 transition-colors mt-0.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-400 mt-2.5 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-charcoal-800">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-ivory-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleServiceAction(service.actionTarget)}
                    className="w-full py-2.5 px-4 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/30 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-gold-500"
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          DEDICATED PROMOTIONAL SECTION: ONLINE FOOD ORDERING
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-charcoal-950 border-y border-gold-500/20 relative overflow-hidden">
        {/* Glow circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-charcoal-850 via-charcoal-900 to-charcoal-950 border border-gold-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Promo Copy */}
              <div className="lg:col-span-7 space-y-6">
                <LuxuryBadge>
                  <Smartphone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Next-Gen Digital Gastronomy</span>
                </LuxuryBadge>

                <h2 className="font-serif font-black text-3xl sm:text-5xl text-ivory-100 uppercase tracking-tight leading-tight">
                  LUXURY DINING, <br />
                  <span className="text-gold-gradient">DELIVERED TO YOUR DOOR.</span>
                </h2>

                <p className="text-ivory-300 text-sm sm:text-base leading-relaxed font-light">
                  Experience frictionless ordering straight from your browser or mobile phone. Our custom digital platform lets you customize your meals, apply VIP promo codes, choose between priority delivery or quick takeaway, and receive live kitchen updates via WhatsApp.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-ivory-100">25-30 Min Delivery</h4>
                      <p className="text-xs text-ivory-400">Guaranteed swift dispatch in thermal sealed cases.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-ivory-100">Live WhatsApp Status</h4>
                      <p className="text-xs text-ivory-400">Direct instant confirmation with your kitchen team.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={openCart}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-sm uppercase tracking-wider shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Open Digital Ordering</span>
                  </button>

                  <div className="flex items-center gap-2 text-xs text-gold-400 bg-charcoal-950/70 border border-gold-500/20 px-3.5 py-2.5 rounded-full">
                    <span>Use code:</span>
                    <span className="font-mono font-bold tracking-wider text-ivory-100 bg-charcoal-800 px-2 py-0.5 rounded border border-gold-500/40">
                      CLINTON10
                    </span>
                    <span>for 10% OFF</span>
                  </div>
                </div>
              </div>

              {/* Right Mockup Graphic */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-charcoal-900 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
                    alt="Mobile food preview"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="mt-4 p-4 rounded-xl bg-charcoal-850 border border-charcoal-700 space-y-2 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gold-400 font-bold uppercase tracking-wider">Live Tracker</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        On the way (8 mins)
                      </span>
                    </div>
                    <p className="font-serif font-bold text-sm text-ivory-100">
                      Order #CR-88291 • Clinton's Wagyu Royale & Truffle Fries
                    </p>
                    <div className="w-full bg-charcoal-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gold-500 h-full w-4/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CATERING & SPECIAL EVENTS BANNER
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-charcoal-850/60 border border-charcoal-800 p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto space-y-4">
          <span className="font-script text-gold-400 text-3xl">Private Banquets</span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-ivory-100 uppercase">
            Planning a Wedding, Gala, or Corporate Feast?
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300 max-w-xl mx-auto leading-relaxed">
            Our private catering team customizes artisanal live slider grills, golden fried chicken bars, and woodfired pizza stations for events of 20 to 500+ guests.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-charcoal-800 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/40 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Event Concierge</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
