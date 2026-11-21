import { useState, useEffect } from 'react';
import { PageId, CartItem, MenuItem } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { MenuModal } from './components/common/MenuModal';
import { ReservationModal } from './components/common/ReservationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { RESTAURANT_INFO } from './data/restaurantData';
import { MessageCircle, ShoppingBag, Check } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initial demo cart item to show functionality immediately
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Update page title dynamically
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: "Clinton's Restaurant | Gourmet Fast Food & Luxury Dining Experience",
      about: "About Us | The Heritage, Mission & Culinary Story — Clinton's Restaurant",
      services: "Our Services | Dine-In, Delivery, Takeaway & Catering — Clinton's Restaurant",
      contact: "Contact Us | Reserve a Table & Visit Our Doors — Clinton's Restaurant",
    };
    document.title = titles[currentPage] || "Clinton's Restaurant";
  }, [currentPage]);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    setToastMessage(`Added "${item.name}" to cart`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-charcoal-900 text-ivory-100 flex flex-col font-sans selection:bg-gold-500 selection:text-charcoal-950">
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-charcoal-950 border border-gold-500/60 text-ivory-100 px-4 py-3 rounded-xl shadow-gold-glow flex items-center gap-2.5 text-xs animate-slideUp">
          <div className="w-5 h-5 rounded-full bg-gold-500 text-charcoal-950 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Consistent Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openMenuModal={() => setIsMenuModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onAddToCart={handleAddToCart}
            openCart={() => setIsCartOpen(true)}
            openMenuModal={() => setIsMenuModalOpen(true)}
            openReservationModal={() => setIsReservationModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            setCurrentPage={setCurrentPage}
            openCart={() => setIsCartOpen(true)}
            openMenuModal={() => setIsMenuModalOpen(true)}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            setCurrentPage={setCurrentPage}
            openCart={() => setIsCartOpen(true)}
            openMenuModal={() => setIsMenuModalOpen(true)}
            openReservationModal={() => setIsReservationModalOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            setCurrentPage={setCurrentPage}
            openReservationModal={() => setIsReservationModalOpen(true)}
          />
        )}
      </main>

      {/* Consistent Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        openMenuModal={() => setIsMenuModalOpen(true)}
        openReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onBrowseMenu={() => setIsMenuModalOpen(true)}
      />

      {/* Menu Modal */}
      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />

      {/* Floating Action Buttons: WhatsApp & Quick Cart */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Quick Cart Pill if items in cart and drawer closed */}
        {totalCartCount > 0 && !isCartOpen && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 shadow-gold-glow flex items-center justify-center hover:scale-105 active:scale-95 transition-all relative"
            title="Open Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-charcoal-950 text-gold-400 text-[11px] font-bold flex items-center justify-center border border-gold-500">
              {totalCartCount}
            </span>
          </button>
        )}

        {/* Floating WhatsApp Quick Chat Button */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
            "Hello Clinton's Restaurant Concierge! I have a question regarding dining."
          )}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Direct WhatsApp Concierge"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          title="Direct WhatsApp Concierge"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;
