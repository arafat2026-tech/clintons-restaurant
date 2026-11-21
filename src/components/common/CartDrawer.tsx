import React, { useState } from 'react';
import { CartItem } from '../../types';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Clock,
  Sparkles,
  Phone,
  CheckCircle,
  Truck,
  Store,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onBrowseMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onBrowseMenu,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);

  // Checkout form state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<{
    orderId: string;
    total: number;
    time: string;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? (subtotal > 40 ? 0 : 3.50) : 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    setPromoMessage(null);

    const code = promoCode.trim().toUpperCase();
    if (code === 'CLINTON10') {
      setDiscountPercent(10);
      setPromoMessage('10% VIP Discount Applied!');
    } else if (code === 'ROYAL20' && subtotal >= 30) {
      setDiscountPercent(20);
      setPromoMessage('20% Royal Feast Discount Applied!');
    } else if (code === 'ROYAL20' && subtotal < 30) {
      setPromoError('ROYAL20 requires a minimum order of £30.00');
    } else {
      setPromoError('Invalid code. Try "CLINTON10" for 10% off.');
    }
  };

  const handleCheckout = (method: 'standard' | 'whatsapp') => {
    if (items.length === 0) return;

    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please provide your name and phone number so our kitchen can reach you.');
      return;
    }

    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      alert('Please enter your delivery address.');
      return;
    }

    setIsSubmitting(true);

    const generatedId = `CR-${Math.floor(100000 + Math.random() * 900000)}`;

    if (method === 'whatsapp') {
      // Format text for WhatsApp
      let message = `*CLINTON'S RESTAURANT — NEW ORDER*\n`;
      message += `*Order Ref:* ${generatedId}\n`;
      message += `*Customer:* ${customerName} (${customerPhone})\n`;
      message += `*Fulfillment:* ${orderType === 'delivery' ? 'Delivery to: ' + deliveryAddress : 'Pickup at Restaurant'}\n\n`;
      message += `*ITEMS:*\n`;
      items.forEach((item, index) => {
        message += `${index + 1}. ${item.item.name} x${item.quantity} — £${(item.item.price * item.quantity).toFixed(2)}\n`;
      });
      message += `\n*Subtotal:* £${subtotal.toFixed(2)}`;
      if (deliveryFee > 0) message += `\n*Delivery Fee:* £${deliveryFee.toFixed(2)}`;
      if (discountAmount > 0) message += `\n*Discount (${discountPercent}%):* -£${discountAmount.toFixed(2)}`;
      message += `\n*TOTAL:* £${finalTotal.toFixed(2)}`;
      if (orderNotes) message += `\n*Notes:* ${orderNotes}`;

      const encoded = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`;
      
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });

      window.open(whatsappUrl, '_blank');
      setOrderSuccess({
        orderId: generatedId,
        total: finalTotal,
        time: orderType === 'delivery' ? '25-30 mins' : '12-15 mins'
      });
      setIsSubmitting(false);
      onClearCart();
    } else {
      // Standard Direct Checkout Simulation with rich confirmation
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E8B923', '#F5F2E9', '#B88A27', '#FDF1B8']
        });

        setOrderSuccess({
          orderId: generatedId,
          total: finalTotal,
          time: orderType === 'delivery' ? '25-30 mins' : '12-15 mins'
        });
        setIsSubmitting(false);
        onClearCart();
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-charcoal-950/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-over panel */}
      <div className="relative z-10 w-full max-w-md bg-charcoal-900 border-l border-gold-500/25 h-full flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-charcoal-800 flex items-center justify-between bg-charcoal-850">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-ivory-100">Your Dining Cart</h2>
              <p className="text-xs text-gold-400 font-medium">
                {items.length} {items.length === 1 ? 'gourmet item' : 'gourmet items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-ivory-400 hover:text-gold-400 hover:bg-charcoal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Screen if Order Placed */}
        {orderSuccess ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-5 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border-2 border-gold-500 flex items-center justify-center text-gold-400 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                Order Confirmed
              </span>
              <h3 className="font-serif font-bold text-2xl text-ivory-100 mt-1">
                Thank You For Dining With Clinton's
              </h3>
              <p className="text-sm text-ivory-300 mt-2">
                Our master culinary team has received your order and is preparing it with passion and care.
              </p>
            </div>

            <div className="w-full p-4 rounded-xl bg-charcoal-850 border border-gold-500/20 space-y-2 text-left text-xs">
              <div className="flex justify-between py-1 border-b border-charcoal-800">
                <span className="text-ivory-400">Order Reference:</span>
                <span className="font-mono font-bold text-gold-400">{orderSuccess.orderId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-charcoal-800">
                <span className="text-ivory-400">Estimated Ready Time:</span>
                <span className="font-semibold text-ivory-100 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-500" />
                  {orderSuccess.time}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-ivory-400">Total Paid/Due:</span>
                <span className="font-bold text-gold-400 text-sm">
                  £{orderSuccess.total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-charcoal-800/60 text-xs text-ivory-400 text-center">
              A copy of your culinary receipt and kitchen updates have been logged. For live tracking questions, feel free to call our concierge.
            </div>

            <button
              onClick={() => {
                setOrderSuccess(null);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-sm tracking-wide transition-all shadow-gold-glow"
            >
              Done & Return to Menu
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty Cart State */
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-charcoal-850 border border-charcoal-700 flex items-center justify-center text-charcoal-500">
              <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-ivory-100">Your Cart is Empty</h3>
              <p className="text-xs text-ivory-400 mt-1 max-w-xs">
                Explore our signature Wagyu burgers, golden 24K crispy poultry, and artisan wood-fired pizzas.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBrowseMenu();
              }}
              className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-all shadow-gold-glow flex items-center gap-2"
            >
              <span>Explore The Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Active Cart Items & Checkout */
          <>
            {/* Fulfillment Type Toggle */}
            <div className="p-3 bg-charcoal-850/60 border-b border-charcoal-800 flex gap-2">
              <button
                onClick={() => setOrderType('delivery')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'delivery'
                    ? 'bg-gold-500 text-charcoal-950 shadow-md'
                    : 'bg-charcoal-800 text-ivory-300 hover:text-gold-300'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Delivery (25-30m)</span>
              </button>
              <button
                onClick={() => setOrderType('pickup')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'pickup'
                    ? 'bg-gold-500 text-charcoal-950 shadow-md'
                    : 'bg-charcoal-800 text-ivory-300 hover:text-gold-300'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>Pickup (12-15m)</span>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-charcoal-800/80">
              {items.map((cartItem) => (
                <div key={cartItem.item.id} className="pt-3 first:pt-0 flex gap-3 items-center">
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-gold-500/20 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-ivory-100 truncate">
                      {cartItem.item.name}
                    </h4>
                    <p className="text-xs text-gold-400 font-semibold mt-0.5">
                      £{cartItem.item.price.toFixed(2)} each
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-charcoal-700 bg-charcoal-800 rounded-md">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                          className="px-2 py-1 text-ivory-300 hover:text-gold-400 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-ivory-100">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                          className="px-2 py-1 text-ivory-300 hover:text-gold-400 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs font-bold text-ivory-200">
                        = £{(cartItem.item.price * cartItem.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(cartItem.item.id)}
                    className="p-1.5 text-charcoal-500 hover:text-rose-400 hover:bg-rose-950/30 rounded-md transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Promo Code Input */}
              <div className="pt-4 pb-1">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-gold-500 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo Code (e.g. CLINTON10)"
                      className="w-full pl-8 pr-2 py-1.5 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 placeholder-ivory-500 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-gold-400 border border-gold-500/30 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Apply
                  </button>
                </form>
                {promoMessage && (
                  <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {promoMessage}
                  </p>
                )}
                {promoError && <p className="text-[11px] text-rose-400 mt-1">{promoError}</p>}
              </div>

              {/* Customer Contact & Delivery Info */}
              <div className="pt-3 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  Contact & Fulfillment Details
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name *"
                    className="w-full px-2.5 py-1.5 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 placeholder-ivory-500 focus:outline-none focus:border-gold-500"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Phone Number *"
                    className="w-full px-2.5 py-1.5 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 placeholder-ivory-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
                {orderType === 'delivery' && (
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Delivery Street Address, Apartment, Postcode *"
                    className="w-full px-2.5 py-1.5 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 placeholder-ivory-500 focus:outline-none focus:border-gold-500"
                  />
                )}
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Kitchen special notes (e.g. sauce on side, extra napkins)"
                  className="w-full px-2.5 py-1.5 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 placeholder-ivory-500 focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            {/* Footer Summary & Checkout Buttons */}
            <div className="p-4 bg-charcoal-850 border-t border-charcoal-800 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-ivory-300">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-ivory-300">
                    <span>Delivery Fee {subtotal > 40 && '(Free over £40)'}</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `£${deliveryFee.toFixed(2)}`}</span>
                  </div>
                )}
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-£{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-ivory-100 pt-2 border-t border-charcoal-700">
                  <span className="font-serif">Total Due</span>
                  <span className="text-gold-400 text-lg">£{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => handleCheckout('whatsapp')}
                  disabled={isSubmitting}
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Order</span>
                </button>
                <button
                  onClick={() => handleCheckout('standard')}
                  disabled={isSubmitting}
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-xs tracking-wide flex items-center justify-center gap-1.5 shadow-gold-glow hover:brightness-105 transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Processing...' : 'Direct Checkout'}</span>
                </button>
              </div>

              <div className="flex justify-between items-center text-[11px] text-ivory-400 pt-1">
                <span>Safe encrypted ordering</span>
                <button
                  onClick={onClearCart}
                  className="text-charcoal-500 hover:text-rose-400 underline"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
