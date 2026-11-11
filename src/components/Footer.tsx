import React from 'react';
import { NuveLogo } from './NuveLogo';
import { Heart, MapPin, Clock, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { CAFE_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#1E120D',
        color: '#FAF7F2',
        padding: '5rem 0 2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          className="footer-grid"
        >
          {/* Brand info */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <NuveLogo variant="horizontal" size={44} light />
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#D9CEC1',
                lineHeight: 1.7,
                maxWidth: '380px',
                marginBottom: '1.5rem'
              }}
            >
              Tu cafecito de la esquina en El Coyol. Café de especialidad 100% mexicano 🇲🇽, frappés cremosos y repostería casera hecha con amor y dedicación.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Nuvé Café"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C47C49';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <InstagramIcon size={18} />
              </a>
              <span style={{ fontSize: '0.85rem', color: '#D9CEC1' }}>
                @nuve_cafe
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem'
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#hero" style={{ color: '#D9CEC1', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#el-cafe" style={{ color: '#D9CEC1', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  El Café con Alma
                </a>
              </li>
              <li>
                <a href="#carta" style={{ color: '#D9CEC1', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  La Carta Completa
                </a>
              </li>
              <li>
                <a href="#especialidades" style={{ color: '#D9CEC1', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Especialidades Caseras
                </a>
              </li>
              <li>
                <a href="#galeria" style={{ color: '#D9CEC1', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Comunidad en Instagram
                </a>
              </li>
              <li>
                <a href="#ubicacion" style={{ color: '#D9CEC1', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Ubicación & Horarios
                </a>
              </li>
            </ul>
          </div>

          {/* Location details */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem'
              }}
            >
              Visítanos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#D9CEC1', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#C47C49" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>José Azueta 108, El Coyol, Veracruz, Ver., México</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Clock size={18} color="#C47C49" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Lunes a Sábado: 8:00 AM – 8:00 PM<br />Domingo: Descanso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#A8998D'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>© {new Date().getFullYear()} Nuvé Café. Hecho con amor</span>
            <Heart size={14} color="#C47C49" fill="#C47C49" />
            <span>en Veracruz, México.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Barra de Café xpress</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#D9CEC1',
                cursor: 'pointer'
              }}
            >
              <span>Subir</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
