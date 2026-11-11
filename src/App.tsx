import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Heart,
  MapPin,
  Clock,
  MessageCircle,
  Copy,
  Check,
  Coffee,
  Snowflake,
  Flame,
  Utensils,
  Navigation
} from 'lucide-react';
import { NuveLogo } from './components/NuveLogo';
import { InstagramIcon } from './components/InstagramIcon';
import { MenuItem, SpecialtyItem } from './types';
import { DEFAULT_MENU_ITEMS, DEFAULT_SPECIALTIES, CAFE_INFO, GOOGLE_SHEET_CSV_URL } from './data/menuData';
import { fetchMenuFromGoogleSheet } from './utils/sheetLoader';

export const App: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'caliente' | 'fria' | 'frappe' | 'comer'>('caliente');
  const [copied, setCopied] = useState(false);

  // ZÉRO PRIX EN DUR : départ vide ou squelette opaque, alimenté uniquement par le Google Sheet
  const [menuItems, setMenuItems] = useState<MenuItem[]>(DEFAULT_MENU_ITEMS);
  const [specialties, setSpecialties] = useState<SpecialtyItem[]>(DEFAULT_SPECIALTIES);
  const [isPricesLoaded, setIsPricesLoaded] = useState<boolean>(false);

  // 1. Calcul dynamique Veracruz (UTC-6)
  useEffect(() => {
    const checkStatus = () => {
      try {
        const now = new Date();
        const veracruzStr = now.toLocaleString("en-US", { timeZone: "America/Mexico_City" });
        const veracruzDate = new Date(veracruzStr);
        const day = veracruzDate.getDay(); // 0 = Sun, 1..6 = Mon..Sat
        const hour = veracruzDate.getHours();
        setIsOpenNow(day >= 1 && day <= 6 && hour >= 8 && hour < 20);
      } catch {
        setIsOpenNow(true);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // 2. Chargement direct des prix depuis Google Sheet
  useEffect(() => {
    if (!GOOGLE_SHEET_CSV_URL) return;

    fetchMenuFromGoogleSheet(GOOGLE_SHEET_CSV_URL).then((result) => {
      if (result) {
        if (result.menu.length > 0) {
          setMenuItems(result.menu);
        }
        if (result.specialties.length > 0) {
          setSpecialties(result.specialties);
        }
        setIsPricesLoaded(true);
      }
    });
  }, []);

  // Bloque le défilement quand le menu plein écran est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closeMenuAndScroll = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const categories = [
    { id: 'caliente', label: 'Caliente', icon: <Coffee size={15} /> },
    { id: 'fria', label: 'Frío', icon: <Snowflake size={15} /> },
    { id: 'frappe', label: 'Frappés', icon: <Flame size={15} /> },
    { id: 'comer', label: 'Comer', icon: <Utensils size={15} /> }
  ] as const;

  const currentItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="nuve-layout">
      {/* 1. SEUL BANDEAU MARRON FONCÉ (Spécial iOS Status Bar) */}
      <div className="top-status-bar">
        <Heart
          size={13}
          color={isOpenNow ? '#22C55E' : '#EF4444'}
          fill={isOpenNow ? '#22C55E' : '#EF4444'}
          className="status-heart"
        />
        <span className="status-text">
          {isOpenNow
            ? '¡Listos para recibirte! • Abierto hasta 8:00 PM'
            : 'Cerrado por ahora • Abre a las 8:00 AM'}
        </span>
      </div>

      {/* 2. Barre avec logo, nom et hamburger INTACTE (teinte claire d'origine) */}
      <header className="main-header">
        <div className="container header-container">
          <a href="#" className="header-logo">
            <NuveLogo variant="horizontal" size={38} />
          </a>

          <div className="header-actions">
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-instagram-btn"
              aria-label="Instagram @nuve_cafe"
            >
              <InstagramIcon size={20} color="#C47C49" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="hamburger-btn"
              aria-label="Abrir menú"
            >
              <Menu size={26} color="#2A1810" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Fullscreen Hamburger Menu Overlay */}
      {menuOpen && (
        <div className="fullscreen-menu">
          <div className="fullscreen-menu-header">
            <NuveLogo variant="horizontal" size={36} />
            <button
              onClick={() => setMenuOpen(false)}
              className="close-menu-btn"
              aria-label="Cerrar menú"
            >
              <X size={28} color="#2A1810" />
            </button>
          </div>

          <nav className="fullscreen-nav">
            <button onClick={() => closeMenuAndScroll('carta')} className="nav-link">
              <span>La Carta</span>
              <span className="nav-arrow">&rarr;</span>
            </button>

            <button onClick={() => closeMenuAndScroll('especialidades')} className="nav-link">
              <span>Especialidades del Momento</span>
              <span className="nav-arrow">&rarr;</span>
            </button>

            <button onClick={() => closeMenuAndScroll('horarios')} className="nav-link">
              <span>Horarios</span>
              <span className="nav-arrow">&rarr;</span>
            </button>
          </nav>

          <div className="fullscreen-actions">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gps"
            >
              <Navigation size={18} />
              <span>Abrir en map</span>
            </a>

            <a
              href={`https://wa.me/522290000000?text=${encodeURIComponent(CAFE_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>

          <div className="fullscreen-footer">
            <p>📍 José Azueta 108, El Coyol, Veracruz</p>
            <p>Café con alma • Hecho con amor</p>
          </div>
        </div>
      )}

      {/* Main Single-Column Content */}
      <main className="content-container">
        {/* Bandeau Vert Sauge du stand (1 seule ligne) */}
        <div className="stand-green-banner">
          <div className="banner-item">
            <span className="banner-emoji">🌿</span>
            <span className="banner-text">AL MOMENTO</span>
          </div>
          <span className="banner-sep">•</span>
          <div className="banner-item">
            <span className="banner-emoji">❄️</span>
            <span className="banner-text">BEBIDAS FRÍAS</span>
          </div>
          <span className="banner-sep">•</span>
          <div className="banner-item">
            <span className="banner-emoji">🤍</span>
            <span className="banner-text">HECHO EN CASA</span>
          </div>
        </div>

        {/* Le Menu Express */}
        <section id="carta" className="menu-card">
          <div className="menu-header">
            <h2>La Carta</h2>
            <span className="menu-subtitle">Preparado al momento</span>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Items List */}
          <div className="items-list">
            {currentItems.map((item) => (
              <div key={item.id} className="menu-row">
                <div className="menu-row-info">
                  <div className="menu-row-title">
                    <span className="item-name">{item.name}</span>
                    {item.popular && <span className="item-star">★ Favorito</span>}
                    {item.badge && !item.popular && <span className="item-badge">{item.badge}</span>}
                  </div>
                  <p className="item-desc">{item.description}</p>
                </div>
                {/* Carré opaque de chargement tant que le prix n'est pas reçu de Google Sheet */}
                {isPricesLoaded && item.price ? (
                  <div className="item-price">{item.price}</div>
                ) : (
                  <div className="price-skeleton" aria-label="Cargando precio" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Especialidades del Momento */}
        <section id="especialidades" className="specialties-card">
          <div className="specialties-header">
            <h2>Especialidades del Momento</h2>
            <p>Nuestros consentidos horneados y batidos con pasión</p>
          </div>

          <div className="specialties-list">
            {specialties.map((spec, idx) => (
              <div key={idx} className="specialty-item">
                <div className="specialty-top">
                  <span className="specialty-name">{spec.name}</span>
                  {/* Carré opaque de chargement pour les spécialités */}
                  {isPricesLoaded && spec.price ? (
                    <span className="specialty-price">{spec.price}</span>
                  ) : (
                    <span className="price-skeleton-sm" aria-label="Cargando precio" />
                  )}
                </div>
                <span className="specialty-tag">{spec.tag}</span>
                <p className="specialty-desc">{spec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Horaires & Localisation */}
        <section id="horarios" className="info-card">
          <div className="info-row" onClick={handleCopy} role="button" tabIndex={0}>
            <div className="info-icon">
              <MapPin size={18} color="#C47C49" />
            </div>
            <div className="info-text">
              <strong>José Azueta 108</strong>
              <p>Col. El Coyol, Veracruz, Ver.</p>
            </div>
            <button className="copy-btn" aria-label="Copiar dirección">
              {copied ? <Check size={16} color="#22C55E" /> : <Copy size={16} />}
            </button>
          </div>

          <div className="info-row">
            <div className="info-icon">
              <Clock size={18} color="#C47C49" />
            </div>
            <div className="info-text">
              <strong>Lunes a Sábado</strong>
              <p>8:00 AM – 8:00 PM</p>
            </div>
          </div>

          <div className="info-row closed-day">
            <div className="info-icon">
              <Clock size={18} color="#8A7367" />
            </div>
            <div className="info-text">
              <strong>Domingo</strong>
              <p>Descanso familiar</p>
            </div>
          </div>

          <div className="action-buttons-group">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gps-full"
            >
              <Navigation size={17} />
              <span>Abrir en map</span>
            </a>

            <a
              href={`https://wa.me/522290000000?text=${encodeURIComponent(CAFE_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-full"
            >
              <MessageCircle size={17} />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-compact">
          <p className="footer-tagline">Café con alma • Hecho con amor</p>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Nuvé Café</span>
            <Heart size={12} color="#C47C49" fill="#C47C49" />
            <span>Veracruz, México</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
