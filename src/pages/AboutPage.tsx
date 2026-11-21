import React from 'react';
import { PageId } from '../types';
import { ABOUT_VALUES } from '../data/restaurantData';
import { GoldFlourishDivider, LuxuryBadge } from '../components/common/GoldOrnament';
import {
  ShieldCheck,
  Leaf,
  Heart,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Flame,
  ChefHat
} from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: PageId) => void;
  openCart: () => void;
  openMenuModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  setCurrentPage,
  openCart,
  openMenuModal,
}) => {
  const renderValueIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-gold-400" />;
      case 'Leaf':
        return <Leaf className="w-7 h-7 text-gold-400" />;
      case 'Heart':
        return <Heart className="w-7 h-7 text-gold-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-gold-400" />;
      default:
        return <Award className="w-7 h-7 text-gold-400" />;
    }
  };

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
      title: "Dry-Aged Wagyu Royale",
      subtitle: "Brioche bun with black sesame & truffle relish"
    },
    {
      url: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
      title: "24K Crispy Poultry",
      subtitle: "Triple-brined in organic herb buttermilk"
    },
    {
      url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
      title: "Stone-Baked Artistry",
      subtitle: "San Marzano tomatoes & wild porcini"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      title: "Moody Dining Ambience",
      subtitle: "Bespoke leather banquettes & gold accents"
    },
    {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
      title: "Imperial Flame Kebabs",
      subtitle: "Seared over sweet applewood embers"
    },
    {
      url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
      title: "Truffle Parmesan Cuts",
      subtitle: "Freshly harvested Maris Piper potatoes"
    }
  ];

  return (
    <div className="bg-charcoal-900 text-ivory-100 min-h-screen">
      {/* =========================================================================
          1. PREMIUM PAGE HERO
         ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-charcoal-950 overflow-hidden flex items-center justify-center">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-950/80 to-charcoal-950"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <LuxuryBadge>
            <ChefHat className="w-3.5 h-3.5 text-gold-400" />
            <span>The Heritage & Vision</span>
          </LuxuryBadge>

          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-ivory-100 uppercase tracking-tight">
            ABOUT <span className="text-gold-gradient">CLINTON'S</span>
          </h1>

          <GoldFlourishDivider />

          <p className="text-base sm:text-xl text-ivory-300 max-w-2xl mx-auto font-light leading-relaxed">
            Where casual culinary passions meet fine-dining precision. Learn how we are redefining fast food with unyielding excellence and luxury hospitality.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. OUR STORY — Introduce Clinton's Restaurant and its Journey
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-script text-gold-400 text-3xl">The Origin</span>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight mt-1">
                OUR STORY & JOURNEY
              </h2>
              <div className="w-16 h-1 bg-gold-500 mt-3 rounded-full"></div>
            </div>

            <p className="text-ivory-300 text-base sm:text-lg leading-relaxed font-light">
              Founded by master culinary innovator Clinton Vance in 2018, Clinton's Restaurant began with a singular, provocative question: <em>"Why should fast food ever compromise on culinary integrity?"</em>
            </p>

            <p className="text-ivory-400 text-sm sm:text-base leading-relaxed">
              Disillusioned with hyper-processed ingredients and uninspired assembly-line chains, our founding team set out to marry the exhilarating speed and comfort of casual American & European staples with the meticulous sourcing of Michelin-starred kitchens.
            </p>

            <p className="text-ivory-400 text-sm sm:text-base leading-relaxed">
              What started as a boutique private tasting bar quickly evolved into a beloved culinary destination. Today, Clinton's continues to hand-craft every sauce, age our Wagyu cuts in-house, and source organic produce from boutique local purveyors—all while delivering meals hot and fresh in under thirty minutes.
            </p>

            {/* Quote Block */}
            <div className="p-5 rounded-2xl bg-charcoal-850 border-l-4 border-gold-500 text-ivory-200 italic font-serif text-sm sm:text-base">
              "We didn't just want to serve meals; we wanted to provide moments of pure indulgence that elevate an ordinary lunch or late-night feast into something memorable."
              <span className="block not-italic text-xs text-gold-400 font-sans font-bold uppercase mt-2 tracking-wider">
                — Clinton Vance, Founder & Executive Chef
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Chef preparing meals at Clinton's"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-charcoal-700">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">Artisanal Dedication</p>
                <p className="text-xs text-ivory-300 mt-1">Every burger patty is seasoned by hand; every sauce is simmered for 12 hours.</p>
              </div>
            </div>

            {/* Backing accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/20 rounded-2xl -z-0 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3 & 4. MISSION & VISION SECTION
         ========================================================================= */}
      <section className="py-20 bg-charcoal-950/90 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Our Mission */}
            <div className="bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 p-8 sm:p-10 rounded-2xl relative overflow-hidden group transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                <Flame className="w-7 h-7" />
              </div>
              <span className="font-script text-gold-400 text-2xl">Our Purpose</span>
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-ivory-100 uppercase tracking-tight mt-1">
                OUR MISSION
              </h3>
              <p className="text-ivory-300 text-sm sm:text-base leading-relaxed mt-4 font-light">
                To elevate the standard of casual dining worldwide by delivering world-class gourmet flavors at accessible speed. We are relentlessly committed to ingredient transparency, chef-driven innovation, and creating unforgettable moments for every guest who enters our doors or orders our food.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-ivory-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Zero artificial additives or chemical preservatives
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Ethically sourced meats and sustainable eco-packaging
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Uncompromising warmth and customer satisfaction in every interaction
                </li>
              </ul>
            </div>

            {/* Our Vision */}
            <div className="bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 p-8 sm:p-10 rounded-2xl relative overflow-hidden group transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="font-script text-gold-400 text-2xl">The Ambition</span>
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-ivory-100 uppercase tracking-tight mt-1">
                OUR VISION
              </h3>
              <p className="text-ivory-300 text-sm sm:text-base leading-relaxed mt-4 font-light">
                To become the global benchmark for luxury fast food—proving that culinary grandeur and everyday convenience can coexist in perfect harmony. We envision a world where anyone can savor authentic gourmet dishes, whether relaxing in our golden ambient lounge or dining at their own table.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-ivory-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Pioneering smart digital kitchens for sub-15 minute preparation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Expanding culinary flagships across major capital cities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Cultivating a loyal community of gourmet food aficionados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR VALUES — Quality, Freshness, Hospitality, Customer Satisfaction
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-script text-gold-400 text-3xl">Guiding Principles</span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-ivory-100 uppercase tracking-tight mt-1">
            OUR CORE VALUES
          </h2>
          <GoldFlourishDivider />
          <p className="text-sm sm:text-base text-ivory-300 mt-2">
            The bedrock standards that govern every recipe, employee training, and customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_VALUES.map((v, i) => (
            <div
              key={i}
              className="bg-charcoal-850/70 border border-charcoal-800 hover:border-gold-500/40 p-8 rounded-2xl text-center space-y-4 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 rounded-2xl bg-charcoal-900 border border-gold-500/20 flex items-center justify-center mx-auto shadow-md">
                {renderValueIcon(v.icon)}
              </div>
              <h3 className="font-serif font-bold text-xl text-ivory-100">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-ivory-400 leading-relaxed font-light">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. WHY CHOOSE US
         ========================================================================= */}
      <section className="py-20 bg-charcoal-950/80 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-script text-gold-400 text-3xl">Distinguishing Factors</span>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight">
                WHY DINERS CHOOSE CLINTON'S
              </h2>
              <p className="text-sm sm:text-base text-ivory-300 leading-relaxed">
                When you order from Clinton’s Restaurant, you are not merely purchasing fast food—you are experiencing an elevated lifestyle choice.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 shrink-0 border border-gold-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-ivory-100">Dry-Aged Wagyu & Angus</h4>
                    <p className="text-xs text-ivory-400 mt-0.5">We exclusively grind dry-aged beef cuts daily for unmatched succulence and rich umami.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 shrink-0 border border-gold-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-ivory-100">Sub-30 Minute Express Promise</h4>
                    <p className="text-xs text-ivory-400 mt-0.5">Custom thermal packaging maintains optimal 65°C crispiness from our kitchen to your hands.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 shrink-0 border border-gold-500/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-ivory-100">Luxury Ambiance & Service</h4>
                    <p className="text-xs text-ivory-400 mt-0.5">A moody gold-and-charcoal dining salon designed for romantic dates and celebratory gatherings.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
                alt="Wagyu Burger close up"
                className="w-full h-64 object-cover rounded-2xl border border-gold-500/20 shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop"
                alt="Golden fried chicken"
                className="w-full h-64 object-cover rounded-2xl border border-gold-500/20 shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
                alt="Stone baked pizza"
                className="w-full h-64 object-cover rounded-2xl border border-gold-500/20 shadow-lg -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop"
                alt="Chilled cocktail drink"
                className="w-full h-64 object-cover rounded-2xl border border-gold-500/20 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BEAUTIFUL FOOD & RESTAURANT PHOTOGRAPHY GALLERY
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-script text-gold-400 text-3xl">Visual Feast</span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-ivory-100 uppercase tracking-tight mt-1">
            CULINARY SHOWCASE
          </h2>
          <GoldFlourishDivider />
          <p className="text-sm text-ivory-300">
            A glimpse into the textures, colors, and artful presentation of Clinton's Restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative h-80 rounded-2xl overflow-hidden border border-charcoal-800 hover:border-gold-500/50 shadow-lg cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">
                  Clinton's Showcase
                </span>
                <h3 className="font-serif font-bold text-xl text-ivory-100 mt-0.5">
                  {img.title}
                </h3>
                <p className="text-xs text-ivory-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION — Explore Menu or Place Order
         ========================================================================= */}
      <section className="py-20 bg-charcoal-950 border-t border-gold-500/20 text-center px-4 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="font-script text-gold-400 text-3xl sm:text-4xl">Taste The Difference</span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-ivory-100 uppercase tracking-tight">
            READY TO TASTE THE LUXURY?
          </h2>
          <p className="text-base sm:text-lg text-ivory-300 font-light max-w-xl mx-auto">
            Experience our dry-aged burgers, golden fried chicken, and hand-stretched pizzas today.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openCart}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:brightness-105 transition-all"
            >
              Order Online Now
            </button>
            <button
              onClick={openMenuModal}
              className="px-8 py-3.5 rounded-full bg-charcoal-850 hover:bg-charcoal-800 text-ivory-100 border border-gold-500/40 text-sm font-semibold uppercase tracking-wider transition-all"
            >
              Explore Full Menu
            </button>
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 border border-charcoal-700 text-sm font-semibold uppercase tracking-wider transition-all"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
