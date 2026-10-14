// Modelos TypeScript compartilhados pelos dados dos estabelecimentos e componentes.
export interface Theme {
  primary: string;
  primaryDark: string;
  accent: string;
  surface: string;
  background: string;
}
export interface ContactInfo {
  whatsapp?: string;
  address?: string;
  hours?: string;
  instagram?: string;
}
export interface Category {
  id: string;
  name: string;
  description?: string;
}
export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  categoryId: string;
  available: boolean;
}
export interface Establishment {
  id: string;
  name: string;
  tagline: string;
  logo?: string;
  cover?: string;
  theme: Theme;
  contact: ContactInfo;
  categories: Category[];
  products: Product[];
}
