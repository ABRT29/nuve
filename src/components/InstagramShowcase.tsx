import React from 'react';
import { Heart, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { CAFE_INFO } from '../data/menuData';

export const InstagramShowcase: React.FC = () => {
  return (
    <section id="galeria" className="section" style={{ backgroundColor: '#F1EBE1' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <InstagramIcon size={14} color="#C47C49" />
            <span style={{ marginLeft: '0.4rem' }}>Síguenos en Redes</span>
          </div>
          <h2 className="section-title">Únete a la Familia @nuve_cafe</h2>
          <p className="section-subtitle">
            Comparte tus mañanas y tardes con nosotros. Etiquétanos en tus fotos con el hashtag <strong>#NuveCafe</strong> y <strong>#CafeConAlma</strong>.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="instagram-grid"
        >
          {/* Left: Interactive Instagram Card / Preview */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '1.75rem',
              boxShadow: '0 16px 40px rgba(44, 26, 18, 0.08)',
              border: '1px solid #E2D9CC'
            }}
          >
            {/* Header profile info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid #EFE9DE'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src="/images/logo-profile.jpg"
                  alt="Nuvé Café Avatar"
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    border: '2px solid #C47C49',
                    padding: '2px',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2E1D15' }}>
                      nuve_cafe
                    </h3>
                    <Sparkles size={14} color="#C47C49" />
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#745E52' }}>Nuvé Café • Cafetería</p>
                </div>
              </div>

              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.82rem',
                  borderRadius: '9999px'
                }}
              >
                <span>Seguir</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Bio in the card */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                borderRadius: '14px',
                padding: '1rem 1.2rem',
                fontSize: '0.85rem',
                color: '#4E3629',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}
            >
              <p>☕ <strong>Barra de Café xpress</strong></p>
              <p>🇲🇽 Café de especialidad mexicano</p>
              <p>🗓️ Lunes a Sábados: 8:00 AM – 8:00 PM</p>
              <p>📍 José Azueta 108, El Coyol, Veracruz.</p>
            </div>

            {/* Instagram feed image container */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
              }}
            >
              <img
                src="/images/instagram-feed.jpg"
                alt="Feed oficial de Instagram @nuve_cafe"
                style={{
                  width: '100%',
                  maxHeight: '440px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1rem',
                  background: 'linear-gradient(to top, rgba(30, 18, 13, 0.85), transparent)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                  Fotos reales de nuestras creaciones
                </span>
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#FAF7F2',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    textDecoration: 'underline'
                  }}
                >
                  Ver en la app &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right: Testimonials & Community Love */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid #E2D9CC',
                boxShadow: '0 6px 20px rgba(44, 26, 18, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={16} color="#C47C49" fill="#C47C49" />
                ))}
              </div>
              <p
                style={{
                  fontSize: '0.98rem',
                  color: '#3A271E',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}
              >
                "¡El mejor cafecito para empezar la mañana en El Coyol! El café tiene un tueste perfecto y la torta de elote es suavecita y deliciosa. La atención de los chicos es de 10."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#2E1D15' }}>
                  Mariana R. — Vecina de El Coyol
                </span>
                <span style={{ fontSize: '0.75rem', color: '#917C70' }}>Cliente frecuente</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid #E2D9CC',
                boxShadow: '0 6px 20px rgba(44, 26, 18, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={16} color="#C47C49" fill="#C47C49" />
                ))}
              </div>
              <p
                style={{
                  fontSize: '0.98rem',
                  color: '#3A271E',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}
              >
                "El Frappé de Mazapán no tiene comparación en todo Veracruz. Se nota que usan café de calidad y no jarabes artificiales. 100% recomendado."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#2E1D15' }}>
                  Carlos G.
                </span>
                <span style={{ fontSize: '0.75rem', color: '#917C70' }}>Amante del Frappé</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid #E2D9CC',
                boxShadow: '0 6px 20px rgba(44, 26, 18, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={16} color="#C47C49" fill="#C47C49" />
                ))}
              </div>
              <p
                style={{
                  fontSize: '0.98rem',
                  color: '#3A271E',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}
              >
                "El pay de jamón con queso y el latte caliente son mi combo obligado cada sábado. ¡Larga vida a Nuvé Café!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#2E1D15' }}>
                  Fernanda L.
                </span>
                <span style={{ fontSize: '0.75rem', color: '#917C70' }}>Reseña de Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .instagram-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
