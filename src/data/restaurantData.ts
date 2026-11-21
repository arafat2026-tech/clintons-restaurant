import { MenuItem, HeroSlide, RestaurantService, ReviewItem } from '../types';

export const RESTAURANT_INFO = {
  name: "Clinton's Restaurant",
  tagline: "Good Food. Great Moments.",
  description: "Clinton's Restaurant elevates the fast-food experience into an exquisite culinary journey. We blend artisanal gourmet craftsmanship with high-speed convenience, delivering unforgettable flavours in an ambiance of pure luxury.",
  address: "42 King's Boulevard, Gourmet District, London, W1S 2PB",
  phone: "+44 (0) 20 7946 0888",
  displayPhone: "+44 20 7946 0888",
  whatsapp: "+447946088880",
  email: "concierge@clintonsrestaurant.com",
  openingHours: {
    weekdays: "Monday – Friday: 10:00 AM – 11:00 PM",
    weekends: "Saturday – Sunday: 10:00 AM – 12:00 Midnight",
    delivery: "Express Delivery available until 11:30 PM daily",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    tiktok: "https://tiktok.com",
  },
  stats: [
    { label: "Culinary Creations", value: "35+" },
    { label: "Satisfied Diners", value: "85K+" },
    { label: "Fresh Daily Ingredients", value: "100%" },
    { label: "Avg Delivery Time", value: "24 Min" },
  ]
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    headline: "GOOD FOOD. GREAT MOMENTS.",
    scriptAccent: "A Taste Worth Remembering",
    description: "Discover delicious flavours, freshly prepared meals and unforgettable experiences at Clinton's Restaurant.",
    primaryBtnText: "Explore Our Menu",
    primaryBtnAction: "menu",
    secondaryBtnText: "Order Now",
    secondaryBtnAction: "order",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop", // Gourmet burger with gold ambient glow
    dishBadge: "Signature Wagyu Burger",
    prepBadge: "Artisanal Brioche & Smoked Truffle Mayo"
  },
  {
    id: 2,
    headline: "FLAVOUR IN EVERY BITE.",
    scriptAccent: "Freshly Prepared, Perfectly Served",
    description: "From delicious burgers to irresistible meals, every bite is made to satisfy your cravings.",
    primaryBtnText: "Discover Our Menu",
    primaryBtnAction: "menu",
    secondaryBtnText: "Contact Us",
    secondaryBtnAction: "contact",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop", // Golden crispy fried chicken feast
    dishBadge: "Royal 24K Crispy Fried Chicken",
    prepBadge: "Buttermilk-brined & Dusted with Garlic Herb"
  },
  {
    id: 3,
    headline: "SATISFY EVERY CRAVING.",
    scriptAccent: "Your Favourite Food Destination",
    description: "Enjoy exceptional fast food, quality ingredients and the taste you will always come back for.",
    primaryBtnText: "Order Your Favourite",
    primaryBtnAction: "order",
    secondaryBtnText: "Explore More",
    secondaryBtnAction: "about",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop", // Gourmet artisan pizza with fire blistered crust
    dishBadge: "Artisanal Wood-Fired Pizza",
    prepBadge: "San Marzano Plum Tomatoes & Fresh Buffalo Mozzarella"
  }
];

export const FEATURED_DISHES: MenuItem[] = [
  {
    id: "dish-1",
    name: "Clinton's Signature Wagyu Royale",
    description: "Dry-aged Wagyu beef patty, melted aged English cheddar, caramelized shallot jam, black truffle aioli, toasted brioche.",
    price: 18.50,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    calories: "780 kcal",
    prepTime: "12-15 mins",
    rating: 4.9,
    badge: "Chef's Signature",
    isFeatured: true,
    spicyLevel: 1,
  },
  {
    id: "dish-2",
    name: "Golden Imperial Fried Chicken Platter",
    description: "Triple-crisp buttermilk fried chicken tenders & wings, smoked paprika honey glaze, house secret dips, pickles.",
    price: 16.90,
    category: "chicken",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop",
    calories: "690 kcal",
    prepTime: "10-14 mins",
    rating: 4.95,
    badge: "Most Popular",
    isFeatured: true,
    spicyLevel: 2,
  },
  {
    id: "dish-3",
    name: "Artisan Truffle & Wild Fungi Pizza",
    description: "Stone-baked hand-stretched crust, sautéed wild porcini, fior di latte, white truffle oil drizzle, fresh oregano.",
    price: 19.50,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop",
    calories: "820 kcal",
    prepTime: "15 mins",
    rating: 4.85,
    badge: "House Specialty",
    isFeatured: true,
  },
  {
    id: "dish-4",
    name: "Clinton's Deluxe Double Smash Burger",
    description: "Twin seared Prime Black Angus patties with crispy lacy edges, double American cheese, secret relish, potato bun.",
    price: 15.50,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop",
    calories: "740 kcal",
    prepTime: "10 mins",
    rating: 4.9,
    badge: "Best Seller",
    isFeatured: true,
  },
  {
    id: "dish-5",
    name: "Imperial Skewered Mixed Grill Platter",
    description: "Flame-kissed marinated tenderloin kebabs, glazed lamb kofta, rosemary herb potatoes, garlic saffron flatbread.",
    price: 24.00,
    category: "platters",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    calories: "890 kcal",
    prepTime: "18 mins",
    rating: 4.95,
    badge: "Feast Favorite",
    isFeatured: true,
    spicyLevel: 1,
  },
  {
    id: "dish-6",
    name: "Truffle Parmesan Hand-Cut Fries",
    description: "Triple-cooked Maris Piper potatoes tossed in black winter truffle oil, 24-month aged Parmigiano-Reggiano, fresh herbs.",
    price: 7.50,
    category: "sides",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop",
    calories: "380 kcal",
    prepTime: "8 mins",
    rating: 4.9,
    badge: "Must Try Side",
    isFeatured: true,
  }
];

export const FULL_MENU: MenuItem[] = [
  ...FEATURED_DISHES,
  {
    id: "dish-7",
    name: "Spicy Diablo Crispy Chicken Burger",
    description: "Crispy chicken breast dunked in Nashville chili butter, sweet honey coleslaw, jalapeño ranch, brioche bun.",
    price: 14.95,
    category: "chicken",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=1200&auto=format&fit=crop",
    calories: "710 kcal",
    prepTime: "12 mins",
    rating: 4.88,
    badge: "Spicy Kick",
    spicyLevel: 3,
  },
  {
    id: "dish-8",
    name: "Classic Pepperoni & Hot Honey Pizza",
    description: "Hand-pinched spicy soppressata pepperoni, rich San Marzano marinara, chili-infused golden blossom honey drizzle.",
    price: 18.00,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1200&auto=format&fit=crop",
    calories: "850 kcal",
    prepTime: "15 mins",
    rating: 4.92,
    badge: "Customer Love",
    spicyLevel: 1,
  },
  {
    id: "dish-9",
    name: "Golden Crispy Loaded Onion Rings",
    description: "Colossal beer-battered sweet Spanish onions with smoked chipotle crema and fresh chopped chives.",
    price: 6.50,
    category: "sides",
    image: "https://images.unsplash.com/photo-1639024471287-035186f55b1c?q=80&w=1200&auto=format&fit=crop",
    calories: "320 kcal",
    prepTime: "8 mins",
    rating: 4.75,
  },
  {
    id: "dish-10",
    name: "Clinton's Smoked Bourbon Cola (Craft Mocktail)",
    description: "Cold-pressed Madagascar vanilla bean, dark caramel, smoked oak bitters, botanical sparkling water, orange twist.",
    price: 5.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    calories: "140 kcal",
    prepTime: "3 mins",
    rating: 4.8,
    badge: "House Beverage",
  },
  {
    id: "dish-11",
    name: "Gold Leaf Passionfruit Citrus Fizz",
    description: "Fresh passionfruit pulp, lime juice, elderflower cordial, sparkling spring water, dusted with edible gold shimmer.",
    price: 6.95,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    calories: "120 kcal",
    prepTime: "3 mins",
    rating: 4.95,
    badge: "Gold Shimmer",
  },
  {
    id: "dish-12",
    name: "Artisan Churros & Belgian Dark Ganache",
    description: "Warm golden churros rolled in Saigon cinnamon sugar, served with warm 70% Belgian chocolate fondue.",
    price: 8.50,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1200&auto=format&fit=crop",
    calories: "450 kcal",
    prepTime: "8 mins",
    rating: 4.9,
    badge: "Sweet Finale",
  }
];

export const RESTAURANT_HIGHLIGHTS = [
  {
    id: "fresh",
    title: "Fresh Ingredients",
    description: "Farm-to-kitchen daily deliveries of 100% Prime Black Angus, organic vegetables, and fresh artisan brioche baked at dawn.",
    iconName: "Sparkles",
  },
  {
    id: "flavours",
    title: "Delicious Flavours",
    description: "Curated spice blends, 48-hour slow marination, and house-crafted sauces designed by master chefs to tantalise your palate.",
    iconName: "Flame",
  },
  {
    id: "service",
    title: "Excellent Customer Service",
    description: "Warm, attentive white-glove hospitality that treats every guest like royalty, whether dining in or ordering at home.",
    iconName: "HeartHandshake",
  },
  {
    id: "ordering",
    title: "Convenient Food Ordering",
    description: "Lightning-fast digital ordering, live real-time preparation tracking, and thermal-sealed rapid delivery straight to your door.",
    iconName: "Clock",
  }
];

export const SERVICES_DATA: RestaurantService[] = [
  {
    id: "dine-in",
    title: "Dine-In Experience",
    subtitle: "Atmospheric Luxury Dining",
    description: "Immerse yourself in our moody, gold-accented dining room with bespoke leather booths, mood lighting, and attentive table service for a memorable culinary retreat.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    iconName: "UtensilsCrossed",
    highlights: ["Chic intimate seating", "Personal sommelier & beverage service", "Ambient acoustic soundtrack", "Private VIP booths available"],
    actionText: "Reserve a Table",
    actionTarget: "reserve"
  },
  {
    id: "takeaway",
    title: "Takeaway Services",
    subtitle: "Speed Without Compromise",
    description: "On the move? Experience priority takeout prepared in under 15 minutes. Picked up in our signature gold-embossed thermal bags to keep your meal piping hot.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop",
    iconName: "ShoppingBag",
    highlights: ["Express counter pickup", "Custom thermal insulated packaging", "Ready within 12-15 minutes", "Curbside handoff option"],
    actionText: "Order Takeaway",
    actionTarget: "order"
  },
  {
    id: "delivery",
    title: "Food Delivery",
    subtitle: "Gourmet Delivered To Your Doorstep",
    description: "Enjoy restaurant-grade luxury in the comfort of your living room. Our dedicated fleet ensures swift delivery in temperature-controlled carriers within 30 minutes.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    iconName: "Truck",
    highlights: ["Real-time GPS tracking", "Tamper-evident luxury seals", "Delivered hot in under 30 mins", "Contactless delivery guarantee"],
    actionText: "Order Delivery",
    actionTarget: "order"
  },
  {
    id: "online-ordering",
    title: "Online Food Ordering",
    subtitle: "Seamless Digital Experience",
    description: "Our bespoke digital ordering platform offers frictionless menu browsing, personalized dietary filters, instant live cart checkout, and direct WhatsApp receipting.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    iconName: "Smartphone",
    highlights: ["Live order status updates", "Multiple safe payment methods", "Loyalty rewards & perks", "Direct WhatsApp confirmations"],
    actionText: "Start Online Order",
    actionTarget: "order"
  },
  {
    id: "catering",
    title: "Catering Services",
    subtitle: "Celebrations & Corporate Banquets",
    description: "Make your weddings, private galas, and corporate summits extraordinary with Clinton's catering. Custom slider stations, fried chicken bars, and chef live cooking.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    iconName: "Award",
    highlights: ["Customized gourmet menus", "Professional service staff & equipment", "Can accommodate 20 to 500+ guests", "On-site live cooking stations"],
    actionText: "Inquire Catering",
    actionTarget: "contact"
  },
  {
    id: "special-packages",
    title: "Special Food Packages",
    subtitle: "Curated Feasts For Groups",
    description: "Specially packaged bundles for family weekends, game nights, and celebratory gatherings with generous portions of our top burgers, sides, and signature drinks.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    iconName: "Gift",
    highlights: ["Family Feast Box (Serves 4-6)", "Matchday Game Pack", "Late Night Bites bundle", "Up to 25% bundled savings"],
    actionText: "View Packages",
    actionTarget: "order"
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Alexander Sterling",
    designation: "Michelin Guide Reviewer & Epicurean",
    rating: 5,
    review: "Clinton's has completely rewritten what fast food can be. The Wagyu Royale burger matches the depth and refinement of Mayfair fine dining, yet served with unpretentious passion.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    favoriteDish: "Wagyu Royale Burger"
  },
  {
    id: "rev-2",
    name: "Victoria Chen",
    designation: "Food & Lifestyle Journalist",
    rating: 5,
    review: "The golden crispy chicken is transcendental—crunchy, fragrant, yet impossibly juicy on the inside. Pair it with the truffle fries and you are in culinary heaven.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    favoriteDish: "24K Golden Crispy Chicken"
  },
  {
    id: "rev-3",
    name: "Marcus Vance",
    designation: "Creative Director & Frequent Diner",
    rating: 5,
    review: "From the dramatic dark & gold interior to the lightning-fast delivery at midnight, Clinton's Restaurant is consistently five-star in every single dimension.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    favoriteDish: "Truffle & Porcini Pizza"
  }
];

export const ABOUT_VALUES = [
  {
    title: "Uncompromising Quality",
    description: "We source certified 100% grass-fed Angus beef, free-range poultry, and organic herbs with zero compromises on ingredients.",
    icon: "ShieldCheck"
  },
  {
    title: "Freshness Daily",
    description: "Every patty is hand-pressed, every potato hand-cut, and every bun baked fresh every single morning before our doors open.",
    icon: "Leaf"
  },
  {
    title: "Genuine Hospitality",
    description: "Whether you stop by for a 5-minute takeaway or host a celebration banquet, our warm staff welcomes you like family.",
    icon: "Heart"
  },
  {
    title: "Continuous Innovation",
    description: "We constantly reinvent comfort classics with luxury ingredients like black summer truffles, hot infused honeys, and smoked brioche.",
    icon: "Sparkles"
  }
];
