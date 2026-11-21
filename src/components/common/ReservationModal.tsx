import React, { useState } from 'react';
import { X, Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import confetti from 'canvas-confetti';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: '',
    time: '19:00',
    specialRequests: '',
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill out all required fields.');
      return;
    }

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-charcoal-900 border border-gold-500/30 rounded-2xl shadow-2xl p-6 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ivory-400 hover:text-gold-400 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border-2 border-gold-500 flex items-center justify-center text-gold-400 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-ivory-100">
              Table Reserved With Honor
            </h3>
            <p className="text-sm text-ivory-300 max-w-sm mx-auto">
              Thank you, <strong className="text-gold-400">{formData.name}</strong>. Your table for{' '}
              <strong className="text-gold-400">{formData.guests} guests</strong> on{' '}
              <strong className="text-gold-400">{formData.date} at {formData.time}</strong> is reserved.
            </p>
            <div className="p-3 rounded-lg bg-charcoal-850 text-xs text-ivory-400 border border-charcoal-700">
              Our maitre d’ will send a confirmation SMS to {formData.phone}. We look forward to welcoming you to Clinton's Restaurant.
            </div>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="font-script text-gold-400 text-2xl">Dine In Elegance</span>
              <h2 className="font-serif font-extrabold text-2xl text-ivory-100 uppercase tracking-wider mt-1">
                Reserve A Table
              </h2>
              <p className="text-xs text-ivory-400 mt-1">
                Experience our intimate luxury dining room and attentive table service.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-ivory-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lord / Lady / Mr. John Doe"
                    className="w-full px-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ivory-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 7946 0888"
                    className="w-full px-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-ivory-300 mb-1">Guests *</label>
                  <div className="relative">
                    <Users className="w-3.5 h-3.5 text-gold-500 absolute left-2.5 top-2.5" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 focus:outline-none focus:border-gold-500 appearance-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6+">6+ Guests (Party)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-ivory-300 mb-1">Date *</label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-gold-500 absolute left-2.5 top-2.5" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-8 pr-2 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-ivory-300 mb-1">Time *</label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-gold-500 absolute left-2.5 top-2.5" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
                    >
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-ivory-300 mb-1">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Anniversary celebration, window table preference, peanut allergies, etc."
                  className="w-full px-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-sm tracking-wide shadow-gold-glow hover:brightness-105 transition-all mt-2"
              >
                Confirm Table Reservation
              </button>

              <p className="text-center text-[11px] text-ivory-400">
                Prefer immediate booking over the phone? Call our host directly at{' '}
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-gold-400 underline font-medium">
                  {RESTAURANT_INFO.displayPhone}
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
