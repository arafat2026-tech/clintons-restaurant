# CLINTON'S RESTAURANT — Luxury Fast Food Web Platform

> **"Good Food. Great Moments."**  
> An ultra-premium, responsive, 4-page restaurant web application built with React 18, TypeScript, Tailwind CSS, and Lucide Icons.

---

## 🌟 Overview & Key Highlights

Clinton's Restaurant elevates the fast-food dining experience into high-end gastronomy. Designed with a luxury dark charcoal and metallic gold aesthetic extracted directly from the restaurant menu reference, this platform features:

1. **Cinematic Hero Section (Slider Revolution Caliber)**:
   - Full-screen imagery with smooth Ken Burns zoom effect.
   - 3 curated slides with distinct gourmet showcases, script typography accents, and gold flourish dividers.
   - Interactive controls: progress bar, thumbnail indicators, pause/play autoplay, previous/next arrows.
2. **Four Complete Pages**:
   - **Home**: Welcome storytelling, 6 featured dish cards, 4 pillars of excellence, epicurean reviews, and promotional CTA.
   - **About Us**: Founder's journey, mission, vision, core values, differentiators, and 6-piece culinary gallery.
   - **Our Service**: 6 services (Dine-In, Takeaway, Food Delivery, Online Ordering, Catering, Special Packages) and dedicated online ordering app showcase.
   - **Contact Us**: Address, concierge phone, email, opening hours, interactive Google Maps embed, direct WhatsApp chat, and validated contact form with celebratory feedback.
3. **Interactive Ordering & Booking System**:
   - **Slide-Over Dining Cart**: Live item quantities (`+` / `-`), delivery vs. takeaway fulfillment toggle, promo code engine (`CLINTON10` for 10% off, `ROYAL20` for 20% off), free delivery calculation, direct checkout simulation, and WhatsApp order formatting.
   - **Complete Digital Menu Modal**: Categorized filtering across Burgers, Chicken, Pizza, Platters, Sides, Drinks, and Desserts.
   - **Table Reservation Modal**: Reserve dine-in seating with date, time, party size, and dietary preferences.
   - **Floating WhatsApp Concierge**: Instant direct chat button for customer service.

---

## 🎨 Color Palette & Typography

| Color | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Charcoal Black** | `#10110D` | Primary luxury background and canvas |
| **Rich Charcoal Surface** | `#151712` | Card surfaces and slide-over panels |
| **Elegant Golden Yellow** | `#E8B923` | High-impact buttons, highlights, badges |
| **Deep Metallic Gold** | `#B88A27` | Ornate scroll dividers, border gradients |
| **Warm Ivory White** | `#F5F2E9` | Crisp headlines, readable body text |
| **Muted Ivory** | `#C5C2BA` | Subtitles, ingredients, and micro-copy |

### Fonts
- **Headings & Serif**: *Playfair Display* & *Cormorant Garamond*
- **Calligraphic Script**: *Alex Brush*
- **Body & Controls**: *Inter* & *DM Sans*

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18+ or v20+ recommended.
- **npm** or **pnpm** installed.

### 2. Development Server
To start the live development server with hot-module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Production Build
To run TypeScript checks and build the optimized production assets:
```bash
npm run build
```
Output files will be generated in `dist/`.

### 4. Local Preview Server
To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

All restaurant details, dishes, pricing, and contact info are centrally managed in `src/data/restaurantData.ts`:

- **Restaurant Information**:
  ```typescript
  export const RESTAURANT_INFO = {
    name: "Clinton's Restaurant",
    tagline: "Good Food. Great Moments.",
    address: "42 King's Boulevard, Gourmet District, London, W1S 2PB",
    phone: "+44 (0) 20 7946 0888",
    whatsapp: "+447946088880", // International format without '+'
    email: "concierge@clintonsrestaurant.com",
    // ...
  };
  ```

- **Menu Items & Pricing**: Add or edit items in `FEATURED_DISHES` and `FULL_MENU`.
- **Promo Codes**: Edit valid promo codes and discount rules in `src/components/common/CartDrawer.tsx`.
- **Google Maps**: Update the embed URL or destination coordinates in `src/pages/ContactPage.tsx`.

---

## 📦 Project Structure

```
├── public/
│   └── favicon.svg              # Luxury gold monogram SVG favicon
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── CartDrawer.tsx       # Slide-over cart & checkout
│   │       ├── Footer.tsx           # Universal footer & newsletter
│   │       ├── GoldOrnament.tsx     # Reusable SVG flourish dividers
│   │       ├── MenuModal.tsx        # 35+ item full menu browser
│   │       ├── Navbar.tsx           # Sticky luxury header & mobile drawer
│   │       └── ReservationModal.tsx # Dine-in table booking
│   ├── data/
│   │   └── restaurantData.ts    # Central restaurant configuration & menu
│   ├── pages/
│   │   ├── HomePage.tsx         # Cinematic hero, featured food, pillars, CTA
│   │   ├── AboutPage.tsx        # Story, mission, vision, values, gallery
│   │   ├── ServicesPage.tsx     # 6 core services & online ordering promo
│   │   └── ContactPage.tsx      # Contact cards, form, Google Maps, WhatsApp
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # Main app container & global modals
│   ├── index.css                # Tailwind base & custom animations
│   └── main.tsx                 # React entry point
├── dist/                        # Optimized production bundle
├── index.html                   # HTML template & Google Fonts
├── tailwind.config.js           # Custom luxury color theme & fonts
└── vite.config.ts               # Vite configuration
```

---

## 🚢 Deployment

This project compiles to static HTML/JS/CSS and can be deployed in seconds to any modern host:

- **Vercel**: Import repository and deploy automatically with zero configuration.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **Cloudflare Pages**: Set build command to `npm run build` and output folder to `dist`.

---

© Clinton's Restaurant. All rights reserved.
