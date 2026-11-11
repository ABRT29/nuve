import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Clock,
  MessageCircle,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Heart,
  Coffee,
  Snowflake,
  Flame,
  Utensils
} from 'lucide-react';
import { InstagramIcon } from './components/InstagramIcon';
import { MENU_ITEMS, CAFE_INFO } from './data/menuData';

export const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);
  const [activeCategory, setActiveCategory] = useState<'caliente' | 'fria' | 'frappe' | 'comer'>('caliente');
  const [showAllHours, setShowAllHours] = useState(false);

  // Check Mexico Central Time (UTC-6)
  useEffect(() => {
    try {
      const now = new Date();
      const mexicoTimeStr = now.toLocaleString("en-US", { timeZone: "America/Mexico_City" });
      const mexicoDate = new Date(mexicoTimeStr);
      const day = mexicoDate.getDay();
      const hour = mexicoDate.getHours();
      setIsOpenNow(day >= 1 && day <= 6 && hour >= 8 && hour < 20);
    } catch {
      setIsOpenNow(true);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    { id: 'caliente', label: 'Caliente', icon: <Coffee size={15} /> },
    { id: 'fria', label: 'Frío', icon: <Snowflake size={15} /> },
    { id: 'frappe', label: 'Frappés', icon: <Flame size={15} /> },
    { id: 'comer', label: 'Comer', icon: <Utensils size={15} /> }
  ] as const;

  const currentItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="mobile-wrapper">
      <main className="mobile-card">
        {/* Profile / Header */}
        <header className="mobile-header">
          <div className="avatar-container">
            <img
              src="/images/logo-profile.jpg"
              alt="Logo Nuvé Café"
              className="avatar-img"
            />
          </div>

          <h1 className="brand-title">nuvé <span>CAFÉ</span></h1>
          <p className="brand-tagline">Café con alma • Barra xpress</p>
          <p className="brand-location">📍 El Coyol, Veracruz, México</p>

          {/* Status badge */}
          <div className={`status-pill ${isOpenNow ? 'open' : 'closed'}`}>
            <span className="status-dot" />
            <span>{isOpenNow ? 'Abierto ahora (cierra a las 8:00 PM)' : 'Cerrado • Abre a las 8:00 AM'}</span>
          </div>
        </header>

        {/* Quick Action Buttons */}
        <section className="quick-actions">
          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-primary"
          >
            <MapPin size={18} />
            <span>Cómo llegar (Google Maps)</span>
          </a>

          <a
            href={`https://wa.me/522290000000?text=${encodeURIComponent(CAFE_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Pedir para recoger (WhatsApp)</span>
          </a>

          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-instagram"
          >
            <InstagramIcon size={18} />
            <span>Instagram @nuve_cafe</span>
          </a>
        </section>

        {/* Photos Strip */}
        <section className="photos-strip">
          <div className="photo-item">
            <img src="/images/barra-nuve.jpg" alt="La Barra Nuvé" />
            <span className="photo-caption">La Barra en vivo</span>
          </div>
          <div className="photo-item">
            <img src="/images/instagram-feed.jpg" alt="Antojitos caseros" />
            <span className="photo-caption">Torta de elote & pays</span>
          </div>
        </section>

        {/* Express Menu */}
        <section className="menu-card">
          <div className="menu-header">
            <h2>La Carta Express</h2>
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

        {/* Location & Hours Accordion */}
        <section className="info-card">
          <div className="info-row" onClick={handleCopy} role="button" tabIndex={0}>
            <div className="info-icon">
              <MapPin size={18} color="#C47C49" />
            </div>
            <div className="info-text">
              <strong>José Azueta 108</strong>
              <p>Col. El Coyol, Veracruz, Ver.</p>
            </div>
            <button className="copy-btn" aria-label="Copiar dirección">
              {copied ? <Check size={16} color="#3F4D39" /> : <Copy size={16} />}
            </button>
          </div>

          <div className="info-row hours-row" onClick={() => setShowAllHours(!showAllHours)}>
            <div className="info-icon">
              <Clock size={18} color="#C47C49" />
            </div>
            <div className="info-text">
              <strong>Lun a Sáb: 8:00 AM – 8:00 PM</strong>
              <p>Domingo: Descanso</p>
            </div>
            <span className="chevron-icon">
              {showAllHours ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </div>

          {showAllHours && (
            <div className="hours-details">
              <div className="hours-line"><span>Lunes a Viernes</span><span>8:00 AM – 8:00 PM</span></div>
              <div className="hours-line"><span>Sábado</span><span>8:00 AM – 8:00 PM</span></div>
              <div className="hours-line closed"><span>Domingo</span><span>Cerrado</span></div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mobile-footer">
          <p className="footer-tagline">Café con alma • Hecho con amor</p>
          <div className="footer-sub">
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
