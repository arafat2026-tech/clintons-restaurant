import React, { useState } from 'react';
import { MenuItem } from '../../types';
import { FULL_MENU } from '../../data/restaurantData';
import { X, Plus, Star, Flame, Check } from 'lucide-react';
import { GoldFlourishDivider } from './GoldOrnament';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'burgers', label: 'Wagyu Burgers' },
    { id: 'chicken', label: 'Golden Poultry' },
    { id: 'pizza', label: 'Stone-Fired Pizza' },
    { id: 'platters', label: 'Feast Platters' },
    { id: 'sides', label: 'Truffle Sides' },
    { id: 'drinks', label: 'Craft Drinks' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? FULL_MENU
    : FULL_MENU.filter((item) => item.category === selectedCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-charcoal-900 border border-gold-500/30 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-charcoal-800 bg-charcoal-850/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-script text-gold-400 text-2xl sm:text-3xl">Gourmet Selection</span>
            </div>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-ivory-100 uppercase tracking-wider">
              Clinton's Restaurant Menu
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-ivory-400 hover:text-gold-400 hover:bg-charcoal-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="px-5 py-3 border-b border-charcoal-800 bg-charcoal-900 flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-800 text-ivory-300 hover:text-gold-300 hover:bg-charcoal-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-charcoal-850/70 border border-charcoal-700 hover:border-gold-500/40 rounded-xl p-3 sm:p-4 flex gap-4 transition-all hover:bg-charcoal-850 group"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 border border-gold-500/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-gold-500 text-charcoal-950 uppercase tracking-tight shadow">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif font-bold text-base text-ivory-100 group-hover:text-gold-400 transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-serif font-bold text-gold-400 text-base shrink-0">
                          £{item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-ivory-400 line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-charcoal-800">
                      <div className="flex items-center gap-3 text-[11px] text-ivory-400">
                        {item.calories && <span>{item.calories}</span>}
                        {item.rating && (
                          <span className="flex items-center gap-0.5 text-gold-400">
                            <Star className="w-3 h-3 fill-gold-400" />
                            {item.rating}
                          </span>
                        )}
                        {item.spicyLevel && item.spicyLevel > 0 && (
                          <span className="flex items-center text-amber-500">
                            <Flame className="w-3 h-3 fill-amber-500" />
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gold-500/15 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/40'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-charcoal-800 text-center">
            <GoldFlourishDivider subtitle="Freshly Prepared Daily" />
            <p className="text-xs text-ivory-400 mt-2">
              All dishes are prepared to order in our state-of-the-art kitchen. Please let us know if you have specific dietary allergies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
