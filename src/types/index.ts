export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'burgers' | 'chicken' | 'pizza' | 'platters' | 'sides' | 'drinks' | 'desserts';
  image: string;
  calories?: string;
  prepTime?: string;
  rating?: number;
  badge?: string;
  isFeatured?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customization?: {
    spiciness?: string;
    extraCheese?: boolean;
    friesUpgrade?: boolean;
    specialNotes?: string;
  };
}

export interface HeroSlide {
  id: number;
  headline: string;
  scriptAccent: string;
  description: string;
  primaryBtnText: string;
  primaryBtnAction: 'menu' | 'order' | 'contact';
  secondaryBtnText: string;
  secondaryBtnAction: 'menu' | 'about' | 'contact' | 'order';
  image: string;
  dishBadge: string;
  prepBadge: string;
}

export interface RestaurantService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
  highlights: string[];
  actionText: string;
  actionTarget: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  designation: string;
  rating: number;
  review: string;
  image: string;
  favoriteDish: string;
}

export type PageId = 'home' | 'about' | 'services' | 'contact';
