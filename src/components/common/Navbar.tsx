import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { ShoppingBag, Menu, X, Phone, Clock, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  cartCount: number;
  openCart: () => void;
  openMenuModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  cartCount,
  openCart,
  openMenuModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Service' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro bar for luxury service info */}
      <div className="bg-charcoal-950/90 text-ivory-300 text-xs py-2 px-4 sm:px-8 border-b border-charcoal-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              Open Today: 10:00 AM – Midnight
            </span>
            <span className="text-charcoal-600">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              {RESTAURANT_INFO.displayPhone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-300/80 italic font-serif">
              "Exquisite fast food crafted with luxury flair"
            </span>
            <button
              onClick={openMenuModal}
              className="text-gold-400 hover:text-gold-300 underline font-medium text-xs tracking-wide"
            >
              Browse Digital Menu
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-900/95 backdrop-blur-md shadow-2xl py-3 border-b border-gold-500/20'
            : 'bg-charcoal-900/70 backdrop-blur-sm py-4 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Crest Emblem */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold-500/60 bg-charcoal-800 flex items-center justify-center p-1 group-hover:border-gold-400 transition-all shadow-gold-glow">
              <div className="w-full h-full rounded-full border border-gold-500/30 flex items-center justify-center bg-gradient-to-br from-charcoal-850 to-charcoal-950">
                <span className="font-serif font-bold text-xl sm:text-2xl text-gold-400 leading-none">
                  C
                </span>
              </div>
              <div className="absolute -top-1 -right-0.5 w-2 h-2 rounded-full bg-gold-400 animate-ping"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-lg sm:text-2xl tracking-wider text-ivory-100 group-hover:text-gold-400 transition-colors leading-tight">
                CLINTON'S
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-gold-500 font-semibold leading-tight">
                RESTAURANT
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                    isActive
                      ? 'text-gold-400 font-semibold'
                      : 'text-ivory-200 hover:text-gold-300 hover:bg-charcoal-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full shadow-gold-glow"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={openCart}
              aria-label="Shopping Cart"
              className="relative p-2.5 rounded-full bg-charcoal-800/80 border border-charcoal-700 hover:border-gold-500/50 text-ivory-100 hover:text-gold-400 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Gold-highlighted "Order Now" Button */}
            <button
              onClick={() => {
                openCart();
              }}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-sm tracking-wide shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-105 active:scale-95 transition-all duration-200"
            >
              <span>Order Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-gold-400 hover:text-gold-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-charcoal-950/90 backdrop-blur-xl flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-charcoal-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-500 bg-charcoal-850 flex items-center justify-center">
                <span className="font-serif font-bold text-xl text-gold-400">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-ivory-100">CLINTON'S</span>
                <span className="text-[10px] uppercase tracking-widest text-gold-500">RESTAURANT</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-charcoal-800 text-gold-400"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 my-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-2xl font-serif py-3 px-4 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-charcoal-800/80 text-gold-400 border-l-4 border-gold-500 pl-4 font-bold'
                      : 'text-ivory-200 hover:text-gold-300'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-gold-500/50" />
                </button>
              );
            })}
          </div>

          <div className="space-y-4 pt-6 border-t border-charcoal-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-950 font-bold text-base tracking-wide flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Order Now ({cartCount} Items)</span>
            </button>
            <div className="text-center text-xs text-ivory-400">
              <p>Mon-Sun 10:00 AM – Midnight</p>
              <p className="mt-1 text-gold-400 font-semibold">{RESTAURANT_INFO.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
