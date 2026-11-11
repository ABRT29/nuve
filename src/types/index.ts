export type MenuCategory = 'all' | 'caliente' | 'fria' | 'frappe' | 'comer';

export interface MenuItem {
  id: string;
  name: string;
  category: 'caliente' | 'fria' | 'frappe' | 'comer';
  description: string;
  price: string;
  badge?: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
