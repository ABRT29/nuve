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
import { MENU_ITEMS, CAFE_INFO } from './data/menuData';

export const App: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'caliente' | 'fria' | 'frappe' | 'comer'>('caliente');
  const [copied, setCopied] = useState(false);

  // Check Mexico Central Time (UTC-6) for Veracruz
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

  // Lock body scroll when fullscreen menu is open
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

  const currentItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const specialties = [
    { name: 'Frappé de Mazapán', tag: 'Insignia Nuvé', desc: 'Cremoso, con auténtico dulce de cacahuate mexicano.', price: '$65' },
    { name: 'Torta de Elote Casera', tag: 'Receta de Hogar', desc: 'Bien suave, húmeda y hecha con mucho amor.', price: '$45' },
    { name: 'Pay de Jamón con Queso', tag: 'Salado Calientito', desc: 'Masa crujiente hojaldrada y queso fundido.', price: '$48' },
    { name: 'Latte Caramelo Frío', tag: 'Refrescante', desc: 'Espresso selecto, leche fría y caramelo artesanal.', price: '$55' }
  ];

  return (
    <div className="nuve-layout">
      {/* 1. Top dark brown bar with dynamic heart & Veracruz status */}
      <div className="top-status-bar">
        <Heart
          size={14}
          color={isOpenNow ? '#22C55E' : '#EF4444'}
          fill={isOpenNow ? '#22C55E' : '#EF4444'}
          className="status-heart"
        />
        <span className="status-text">
          {isOpenNow
            ? '¡El café está listo para recibirte! • Abierto hoy hasta las 8:00 PM'
            : 'El café está cerrado por ahora • Listos para recibirte mañana a las 8:00 AM'}
        </span>
      </div>

      {/* 2. Main sticky Header with Logo + Hamburger */}
      <header className="main-header">
        <div className="container header-container">
          <a href="#" className="header-logo">
            <NuveLogo variant="horizontal" size={38} />
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="hamburger-btn"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* 3. Fullscreen Hamburger Menu Overlay */}
      {menuOpen && (
        <div className="fullscreen-menu">
          <div className="fullscreen-menu-header">
            <NuveLogo variant="horizontal" size={36} light />
            <button
              onClick={() => setMenuOpen(false)}
              className="close-menu-btn"
              aria-label="Cerrar menú"
            >
              <X size={32} />
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
              <span>Abrir en GPS (Google Maps)</span>
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

            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-insta"
            >
              <InstagramIcon size={18} color="#FFFFFF" />
              <span>Instagram @nuve_cafe</span>
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
        {/* Hero Badge & Intro */}
        <section className="intro-card">
          <NuveLogo variant="badge" size={120} />
          <h1 className="intro-title">nuvé <span>CAFÉ</span></h1>
          <p className="intro-tagline">Café con alma • Barra xpress</p>
          <p className="intro-address">📍 José Azueta 108, El Coyol, Veracruz</p>
        </section>

        {/* Le Menu Express (Version 2 layout: tabs + clean rows) */}
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
                <div className="item-price">{item.price}</div>
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
                  <span className="specialty-price">{spec.price}</span>
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
              <span>Abrir en Google Maps</span>
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
