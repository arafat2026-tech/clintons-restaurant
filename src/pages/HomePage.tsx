import React, { useState, useEffect, useRef } from 'react';
import { PageId, MenuItem } from '../types';
import { HERO_SLIDES, FEATURED_DISHES, RESTAURANT_HIGHLIGHTS, RESTAURANT_INFO, TESTIMONIALS } from '../data/restaurantData';
import { GoldFlourishDivider, LuxuryBadge } from '../components/common/GoldOrnament';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ShoppingBag,
  Sparkles,
  Flame,
  HeartHandshake,
  Clock,
  ArrowRight,
  Star,
  CheckCircle,
  Award,
  Plus
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  onAddToCart: (item: MenuItem) => void;
  openCart: () => void;
  openMenuModal: () => void;
  openReservationModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onAddToCart,
  openCart,
  openMenuModal,
  openReservationModal,
}) => {
  // Hero slider state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});
  const timerRef = useRef<number | null>(null);

  const SLIDE_DURATION = 6500; // ms per slide

  // Autoplay progression & progress bar
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = 50; // update progress every 50ms
    const step = (interval / SLIDE_DURATION) * 100;

    timerRef.current = window.setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((old) => (old + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, currentSlideIndex]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setSlideProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setSlideProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setSlideProgress(0);
  };

  const handleHeroAction = (action: string) => {
    if (action === 'menu') {
      openMenuModal();
    } else if (action === 'order') {
      openCart();
    } else if (action === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'contact') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDishAdd = (dish: MenuItem) => {
    onAddToCart(dish);
    setAddedItemMap((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Icon mapping for highlights
  const renderHighlightIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-gold-400" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-gold-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-gold-400" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-gold-400" />;
      default:
        return <Award className="w-8 h-8 text-gold-400" />;
    }
  };

  return (
    <div className="bg-charcoal-900 text-ivory-100 overflow-hidden">
      {/* =========================================================================
          SECTION A: CINEMATIC ANIMATED HERO SECTION (Slider Revolution Caliber)
         ========================================================================= */}
      <section
        className="relative w-full h-[90vh] sm:h-screen min-h-[620px] max-h-[1050px] overflow-hidden flex items-center justify-center bg-charcoal-950"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Slides with Ken Burns Effect */}
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Zoom & Ambient Dark Mask */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              {/* Multi-layer Cinematic Vignette & Dark Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/75 to-charcoal-950/80" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/60 to-charcoal-950/95" />

              {/* Subtle Gold Dust Overlay / Film Grain Accent */}
              <div className="absolute inset-0 bg-[radial-gradient(#E8B923_1px,transparent_1px)] [background-size:48px_48px] opacity-10 pointer-events-none" />
            </div>
          );
        })}

        {/* Hero Content Layer */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Slide Tag / Subtitle with Script Calligraphy */}
          <div className="animate-fadeIn">
            <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-gold-400 drop-shadow-md tracking-wide block mb-2">
              {currentSlide.scriptAccent}
            </span>
          </div>

          {/* Golden Flourish Divider */}
          <div className="my-1 sm:my-2">
            <GoldFlourishDivider />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ivory-100 uppercase leading-[1.08] max-w-4xl drop-shadow-2xl">
            {currentSlide.headline.split('. ').map((part, i) => (
              <span key={i} className="block first:text-ivory-100 last:text-gold-gradient">
                {part}{i === 0 && currentSlide.headline.includes('.') ? '.' : ''}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-ivory-200/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
            {currentSlide.description}
          </p>

          {/* Badges / Micro Details */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <LuxuryBadge>
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{currentSlide.dishBadge}</span>
            </LuxuryBadge>
            <span className="hidden sm:inline-block text-gold-500/60">•</span>
            <span className="text-xs sm:text-sm text-ivory-300 font-medium tracking-wide">
              {currentSlide.prepBadge}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleHeroAction(currentSlide.primaryBtnAction)}
              className="px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-sm sm:text-base uppercase tracking-wider shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5 group"
            >
              <span>{currentSlide.primaryBtnText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleHeroAction(currentSlide.secondaryBtnAction)}
              className="px-8 py-3.5 sm:py-4 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 border border-gold-500/40 text-ivory-100 hover:text-gold-400 font-semibold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span>{currentSlide.secondaryBtnText}</span>
            </button>
          </div>
        </div>

        {/* Hero Slider Controls & Indicators */}
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-charcoal-900/70 hover:bg-gold-500 hover:text-charcoal-950 border border-gold-500/30 text-gold-400 flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-charcoal-900/70 hover:bg-gold-500 hover:text-charcoal-950 border border-gold-500/30 text-gold-400 flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Bar: Slide Indicators & Autoplay Toggle */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 max-w-5xl mx-auto px-4 flex items-center justify-between">
          {/* Autoplay Play/Pause */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 text-xs font-medium text-ivory-400 hover:text-gold-400 bg-charcoal-950/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-charcoal-800 transition-colors"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isAutoPlaying ? 'Pause Slideshow' : 'Resume Slideshow'}</span>
          </button>

          {/* Slide Bars */}
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className="group py-2 flex flex-col items-center focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className="relative w-12 sm:w-20 h-1.5 bg-charcoal-700/80 rounded-full overflow-hidden">
                    {isActive ? (
                      <div
                        className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full transition-all duration-75"
                        style={{ width: `${slideProgress}%` }}
                      />
                    ) : (
                      <div className="h-full w-0 group-hover:w-full bg-gold-500/40 transition-all duration-300" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold mt-1 transition-colors ${
                      isActive ? 'text-gold-400' : 'text-ivory-500 group-hover:text-ivory-300'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-gold-400 font-mono tracking-wider bg-charcoal-950/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-charcoal-800">
            0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: WELCOME SECTION (Two-column layout, luxury storytelling)
         ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Food Imagery with Gold Frame & Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
                alt="Clinton's Signature Wagyu Burger"
                className="w-full h-[460px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent"></div>
              
              {/* Bottom Card Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-gold-500/30">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Culinary Philosophy
                </span>
                <p className="text-sm font-serif italic text-ivory-100 mt-1">
                  "Fast food doesn't mean compromised quality. It means perfection served with swift grace."
                </p>
              </div>
            </div>

            {/* Backing Gold Border Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/20 rounded-2xl -z-0 hidden sm:block"></div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-charcoal-900/95 border border-gold-500 p-4 rounded-2xl shadow-gold-glow flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="font-serif font-black text-2xl text-gold-400 leading-tight">100%</p>
                <p className="text-[11px] text-ivory-300 uppercase tracking-wider font-medium">
                  Prime Certified Ingredients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Welcoming Brand Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[1px] bg-gold-500"></span>
                <span className="font-script text-gold-400 text-2xl sm:text-3xl">Gourmet Experience</span>
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-ivory-100 leading-tight uppercase">
                WELCOME TO <br />
                <span className="text-gold-gradient">CLINTON'S RESTAURANT</span>
              </h2>
            </div>

            <p className="text-ivory-300 text-base sm:text-lg leading-relaxed font-light">
              At Clinton’s Restaurant, we envisioned a sanctuary where the beloved comfort of fast food meets the uncompromising rigor of haute cuisine. Founded with an obsession for extraordinary flavor, every element on our menu is an ode to gastronomic craftsmanship.
            </p>

            <p className="text-ivory-400 text-sm sm:text-base leading-relaxed">
              From our signature dry-aged Wagyu patties flame-broiled over hickory coals, to our 24-karat buttermilk-brined crispy poultry and hand-stretched stone pizzas dusted with fresh buffalo mozzarella, we believe every meal should be a celebratory memory.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-charcoal-800">
              {RESTAURANT_INFO.stats.map((st, i) => (
                <div key={i} className="text-left">
                  <p className="font-serif font-bold text-2xl sm:text-3xl text-gold-400">{st.value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-ivory-400 mt-1">{st.label}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-sm tracking-wide shadow-gold-glow hover:brightness-105 transition-all flex items-center gap-2"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={openReservationModal}
                className="px-7 py-3.5 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 border border-charcoal-700 text-sm font-semibold tracking-wide transition-all"
              >
                Reserve Dine-In Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: FEATURED DISHES (6 Realistic Food Cards)
         ========================================================================= */}
      <section className="py-20 bg-charcoal-950/80 border-y border-charcoal-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-script text-gold-400 text-3xl sm:text-4xl">Chef's Curated Selections</span>
            <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-ivory-100 uppercase tracking-tight mt-1">
              Featured Gastronomic Dishes
            </h2>
            <GoldFlourishDivider />
            <p className="text-sm sm:text-base text-ivory-300 mt-2">
              Crafted in limited daily batches using certified prime meats, organic herbs, and artisanal bakery buns.
            </p>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_DISHES.map((dish) => {
              const isAdded = addedItemMap[dish.id];
              return (
                <div
                  key={dish.id}
                  className="bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 rounded-2xl overflow-hidden shadow-dark-card hover:shadow-gold-glow transition-all duration-300 flex flex-col group"
                >
                  {/* Food Image with Hover Zoom */}
                  <div className="relative h-64 overflow-hidden bg-charcoal-850">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-80" />

                    {/* Badge */}
                    {dish.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500 text-charcoal-950 shadow-md">
                        {dish.badge}
                      </span>
                    )}

                    {/* Calories & Prep Time */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-ivory-300">
                      <span className="bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-charcoal-800">
                        {dish.calories}
                      </span>
                      <span className="bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-charcoal-800 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-400" />
                        {dish.prepTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif font-bold text-xl text-ivory-100 group-hover:text-gold-400 transition-colors">
                          {dish.name}
                        </h3>
                        <span className="font-serif font-bold text-xl text-gold-400 shrink-0">
                          £{dish.price.toFixed(2)}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-ivory-400 mt-2 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(dish.rating || 5)
                                ? 'text-gold-400 fill-gold-400'
                                : 'text-charcoal-600'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-ivory-300 ml-1 font-semibold">
                          {dish.rating}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDishAdd(dish)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gold-500 hover:bg-gold-400 text-charcoal-950 shadow-gold-glow'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Order Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explore Full Menu Button */}
          <div className="mt-14 text-center">
            <button
              onClick={openMenuModal}
              className="px-8 py-3.5 rounded-full bg-charcoal-850 hover:bg-charcoal-800 text-gold-400 border border-gold-500/40 text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>View Complete 35+ Dish Restaurant Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: RESTAURANT HIGHLIGHTS (4 Important Qualities)
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-script text-gold-400 text-3xl">Pillars of Excellence</span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-ivory-100 uppercase tracking-tight mt-1">
            Why Dine With Clinton's
          </h2>
          <GoldFlourishDivider />
          <p className="text-sm text-ivory-300">
            Four promises that distinguish our kitchen from conventional fast-food chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {RESTAURANT_HIGHLIGHTS.map((hl) => (
            <div
              key={hl.id}
              className="bg-charcoal-850/80 border border-charcoal-800 hover:border-gold-500/40 p-8 rounded-2xl text-center space-y-4 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-charcoal-900 border border-gold-500/20 flex items-center justify-center mx-auto group-hover:border-gold-500/60 group-hover:shadow-gold-glow transition-all">
                {renderHighlightIcon(hl.iconName)}
              </div>
              <h3 className="font-serif font-bold text-xl text-ivory-100 group-hover:text-gold-400 transition-colors">
                {hl.title}
              </h3>
              <p className="text-xs sm:text-sm text-ivory-400 leading-relaxed font-light">
                {hl.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CRITICS & TESTIMONIALS SECTION
         ========================================================================= */}
      <section className="py-20 bg-charcoal-950/70 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-script text-gold-400 text-3xl">Epicurean Praise</span>
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight mt-1">
              What Diners Say
            </h2>
            <GoldFlourishDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-2xl space-y-4 relative"
              >
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>

                <p className="text-sm text-ivory-300 italic leading-relaxed">
                  "{t.review}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-charcoal-800">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-gold-500/40"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-ivory-100">{t.name}</h4>
                    <p className="text-[11px] text-gold-400">{t.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: CALL TO ACTION (Full-width promotional section)
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-charcoal-950">
        {/* Background Image with Dark Vignette */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-[1px]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <LuxuryBadge>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Fast Food Redefined With Luxury</span>
          </LuxuryBadge>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-ivory-100 uppercase tracking-tight leading-tight">
            YOUR NEXT FAVOURITE MEAL <br />
            <span className="text-gold-gradient">IS WAITING.</span>
          </h2>

          <p className="text-base sm:text-xl text-ivory-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Make every meal special with the delicious flavours of Clinton's Restaurant. Freshly prepared, exceptionally packaged, and delivered in record time.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openCart}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-base uppercase tracking-wider shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>ORDER NOW</span>
            </button>

            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-charcoal-900/90 hover:bg-charcoal-800 border border-gold-500/40 text-ivory-100 hover:text-gold-400 text-sm font-bold uppercase tracking-wider transition-all"
            >
              Find Location & Hours
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-6 text-xs text-ivory-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              Express Delivery Under 30 Mins
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              100% Satisfaction Guarantee
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
