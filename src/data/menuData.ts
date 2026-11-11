import { MenuItem, SpecialtyItem } from '../types';

// URL du Google Sheet exporté en CSV
export const GOOGLE_SHEET_CSV_URL =
  import.meta.env.VITE_GOOGLE_SHEET_CSV_URL ||
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKgAvHEDrDr-4Us5pNLEw6DDpdRdpYqZXHPpgoT311f0Algor5UkcM9GRk83mXsKSaVeNDO0cUDQQZ/pub?output=csv';

// Articles par défaut SANS PRIX EN DUR (les prix viennent uniquement du Google Sheet en direct)
export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  // Café Caliente
  {
    id: 'cal-americano',
    name: 'Americano',
    category: 'caliente',
    description: 'Expreso con granos 100% mexicanos de especialidad y agua caliente. Cuerpo balanceado con notas achocolatadas.',
    price: '',
    badge: 'Clásico'
  },
  {
    id: 'cal-latte',
    name: 'Latte',
    category: 'caliente',
    description: 'Expreso doble con leche entera o deslactosada vaporizada y una fina capa de microespuma sedosa.',
    price: '',
    popular: true
  },
  {
    id: 'cal-capuchino',
    name: 'Capuchino',
    category: 'caliente',
    description: 'La armonía tradicional de expreso aromático, leche vaporizada y abundante espuma aterciopelada.',
    price: '',
    badge: 'Favorito'
  },
  {
    id: 'cal-moka',
    name: 'Moka',
    category: 'caliente',
    description: 'Café de especialidad fundido con cacao mexicano y leche texturizada. Reconfortante y aromático.',
    price: ''
  },
  {
    id: 'cal-chai',
    name: 'Chai Sugar Free',
    category: 'caliente',
    description: 'Mezcla artesanal de especias (cardamomo, canela, clavo) con leche caliente, libre de azúcares agregados.',
    price: '',
    badge: 'Sin Azúcar'
  },

  // Bebidas Frías
  {
    id: 'fria-iced-coffee',
    name: 'Iced Coffee',
    category: 'fria',
    description: 'Café preparado al momento vertido sobre cubos de hielo. Fresco, limpio y perfecto para el calor de Veracruz.',
    price: '',
    badge: 'Refrescante'
  },
  {
    id: 'fria-latte',
    name: 'Latte Frío',
    category: 'fria',
    description: 'Doble shot de expreso servido sobre leche fría con hielo cristalino. Suave y revitalizante.',
    price: ''
  },
  {
    id: 'fria-latte-caramelo',
    name: 'Latte Caramelo Frío',
    category: 'fria',
    description: 'Café latte sobre hielo con un toque de jarabe de caramelo artesanal y notas tostadas.',
    price: '',
    popular: true,
    badge: 'Top Seller'
  },
  {
    id: 'fria-moka-latte',
    name: 'Moka Latte Frío',
    category: 'fria',
    description: 'Café expreso, salsa de cacao selecto y leche bien fría batida suavemente.',
    price: ''
  },
  {
    id: 'fria-chai',
    name: 'Chai Frío Sugar Free',
    category: 'fria',
    description: 'Infusión especiada con leche fría y hielo, sin endulzantes calóricos. Ligera y deliciosa.',
    price: '',
    badge: 'Sin Azúcar'
  },

  // Frappés
  {
    id: 'frappe-mazapan',
    name: 'Frappé de Mazapán',
    category: 'frappe',
    description: 'Nuestra especialidad insignia. Cremoso frappé con auténtico dulce de cacahuate mexicano, coronado con lluvia de mazapán.',
    price: '',
    popular: true,
    badge: 'Especialidad Nuvé'
  },
  {
    id: 'frappe-oreo',
    name: 'Frappé de Oreo',
    category: 'frappe',
    description: 'Base cremosa con galletas Oreo trituradas, jarabe de chocolate y crema batida.',
    price: '',
    badge: 'Irresistible'
  },
  {
    id: 'frappe-moka',
    name: 'Frappé de Moka',
    category: 'frappe',
    description: 'Intenso café de especialidad licuado con chocolate y hielo estilo frozen.',
    price: ''
  },
  {
    id: 'frappe-nutella',
    name: 'Frappé de Nutella',
    category: 'frappe',
    description: 'Frappé ultra cremoso con generosa crema de avellanas con cacao y toque de café.',
    price: '',
    badge: 'Delicia'
  },

  // Para Comer
  {
    id: 'com-torta-elote',
    name: 'Rebanada de Torta de Elote',
    category: 'comer',
    description: 'Bien suave, húmeda y hecha con mucho amor. Receta tradicional casera con granos tiernos de maíz.',
    price: '',
    popular: true,
    badge: 'Hecho en Casa'
  },
  {
    id: 'com-pay-jamon',
    name: 'Pay de Jamón con Queso',
    category: 'comer',
    description: 'Rebanada dorada de masa crujiente rellena de jamón selecto y abundante queso fundido.',
    price: '',
    badge: 'Salado Calientito'
  },
  {
    id: 'com-torta-nuve',
    name: 'Torta Nuvé',
    category: 'comer',
    description: 'Especialidad de la barra en pan baguette artesanal, ingredientes frescos preparados al momento.',
    price: '',
    badge: 'Para el Antojo'
  },
  {
    id: 'com-croissant',
    name: 'Croissant Mantequilla',
    category: 'comer',
    description: 'Hojaldre ligero y crujiente con aroma a mantequilla dorada. Perfecto acompañamiento para tu latte.',
    price: ''
  }
];

export const DEFAULT_SPECIALTIES: SpecialtyItem[] = [
  {
    name: 'Frappé de Mazapán',
    tag: 'Insignia Nuvé',
    desc: 'Cremoso, con auténtico dulce de cacahuate mexicano.',
    price: ''
  },
  {
    name: 'Torta de Elote Casera',
    tag: 'Receta de Hogar',
    desc: 'Bien suave, húmeda y hecha con mucho amor.',
    price: ''
  },
  {
    name: 'Pay de Jamón con Queso',
    tag: 'Salado Calientito',
    desc: 'Masa crujiente hojaldrada y queso fundido.',
    price: ''
  },
  {
    name: 'Latte Caramelo Frío',
    tag: 'Refrescante',
    desc: 'Espresso selecto, leche fría y caramelo artesanal.',
    price: ''
  }
];

export const CAFE_INFO = {
  name: 'Nuvé Café',
  tagline: 'Café con alma',
  subtagline: 'Café que se disfruta • Tu cafecito de la esquina',
  category: 'Barra de Café xpress & Especialidad',
  address: 'José Azueta 108, El Coyol, Veracruz, Ver., México',
  instagram: 'nuve_cafe',
  instagramUrl: 'https://www.instagram.com/nuve_cafe/',
  whatsappNumber: '+522290000000',
  whatsappMessage: '¡Hola Nuvé Café! Me gustaría consultar el menú del día y hacer un pedido para recoger.',
  googleMapsUrl: 'https://maps.google.com/?q=José+Azueta+108+El+Coyol+Veracruz'
};
