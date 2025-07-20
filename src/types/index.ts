export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'laptops' | 'phones' | 'cameras' | 'accessories' | 'gaming' | 'audio' | 'soldering' | 'boards' | 'sensor-modules' | 'motor-drivers' | 'motors' | 'batteries' | 'wireless-modules' | 'voltmeters' | 'battery-holders' | 'power-boards';
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: CartItem[];
}

export type SortOption = 'price-low' | 'price-high' | 'rating' | 'newest' | 'popular';
export type FilterOption = 'all' | Product['category'];