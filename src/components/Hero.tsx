import React from 'react';
import { NuveLogo } from './NuveLogo';
import { Sparkles, MapPin, ArrowRight, Coffee, Heart, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '4.5rem 0 5.5rem 0',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 80% 20%, rgba(196, 124, 73, 0.08) 0%, transparent 60%), linear-gradient(180deg, #FBF9F5 0%, #F7F4EE 100%)'
      }}
    >
      {/* Decorative subtle background circle */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 233, 222, 0.6) 0%, rgba(247, 244, 238, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & Intent */}
          <div>
            {/* Tag / Category Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(196, 124, 73, 0.12)',
                color: '#C47C49',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={14} />
              <span>Barra de Café xpress • El Coyol, Veracruz</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                fontWeight: 700,
                color: '#24140D',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                marginBottom: '1.2rem'
              }}
            >
              Café con alma, <br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: '#C47C49',
                  position: 'relative'
                }}
              >
                hecho con amor
              </span>{' '}
              para ti.
            </h1>

            {/* Sub-copy with brand slogan */}
            <p
              style={{
                fontSize: '1.15rem',
                color: '#5E483C',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2rem'
              }}
            >
              Bienvenido a <strong>Nuvé Café</strong>: tu cafecito de la esquina en El Coyol. Café de especialidad mexicano 🇲🇽, frappés cremosos preparados al momento y repostería casera horneada con el corazón.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#carta" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                <Coffee size={18} />
                <span>Explorar la Carta</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#ubicacion"
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.8rem', fontSize: '0.95rem' }}
              >
                <MapPin size={17} color="#C47C49" />
                <span>Cómo llegar al local</span>
              </a>
            </div>

            {/* Quick feature pill row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '1.5rem',
                borderTop: '1px solid #E2D9CC'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#EAF0E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#53644B'
                  }}
                >
                  <Award size={16} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#3A271E' }}>
                  Café de Especialidad 🇲🇽
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(196, 124, 73, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C47C49'
                  }}
                >
                  <Sparkles size={16} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#3A271E' }}>
                  Extracción al Momento
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#FDEEE9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C47C49'
                  }}
                >
                  <Heart size={16} fill="#C47C49" />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#3A271E' }}>
                  100% Hecho en Casa
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with real photos */}
          <div style={{ position: 'relative' }}>
            {/* Main Bar Card */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 20px 50px rgba(44, 26, 18, 0.12)',
                border: '1px solid rgba(226, 217, 204, 0.8)'
              }}
            >
              <img
                src="/images/barra-nuve.jpg"
                alt="Barra de Café Nuvé en El Coyol"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#2E1D15',
                      marginBottom: '0.2rem'
                    }}
                  >
                    La Barra Nuvé en vivo
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#745E52' }}>
                    José Azueta 108 • El Coyol, Veracruz
                  </p>
                </div>
                <span
                  style={{
                    backgroundColor: '#EAF0E8',
                    color: '#3F4D39',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}
                >
                  ABIERTO HOY
                </span>
              </div>
            </div>

            {/* Overlapping Floating Badge: The Official Logo */}
            <div
              style={{
                position: 'absolute',
                top: '-25px',
                right: '-20px',
                zIndex: 2,
                filter: 'drop-shadow(0 12px 28px rgba(44, 26, 18, 0.16))'
              }}
              className="hero-floating-logo"
            >
              <NuveLogo variant="badge" size={135} />
            </div>

            {/* Floating Tag Card: Frappé Mazapán & Torta de Elote */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-20px',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '0.9rem 1.3rem',
                border: '1px solid rgba(226, 217, 204, 0.9)',
                boxShadow: '0 12px 30px rgba(44, 26, 18, 0.14)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                maxWidth: '280px'
              }}
              className="hero-floating-tag"
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(196, 124, 73, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C47C49',
                  flexShrink: 0
                }}
              >
                <Coffee size={24} />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#C47C49'
                  }}
                >
                  Favorito de la casa
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: '#2E1D15'
                  }}
                >
                  Frappé Mazapán & Torta de Elote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-floating-logo {
            top: -15px !important;
            right: 0 !important;
          }
          .hero-floating-tag {
            bottom: -15px !important;
            left: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};
