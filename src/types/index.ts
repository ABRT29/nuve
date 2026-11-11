export type MenuCategory = 'caliente' | 'fria' | 'frappe' | 'comer';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  badge?: string;
  popular?: boolean;
}

export interface SpecialtyItem {
  name: string;
  tag: string;
  desc: string;
  price: string;
}
