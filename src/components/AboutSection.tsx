import React from 'react';
import { NuveLogo } from './NuveLogo';
import { Coffee, Snowflake, Heart, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="el-cafe" className="section" style={{ backgroundColor: '#F1EBE1' }}>
      <div className="container">
        {/* Banner with botanical branches & centered brand seal */}
        <div style={{ marginBottom: '4rem' }}>
          <NuveLogo variant="banner" size={56} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left: Philosophy Story */}
          <div>
            <div className="section-badge">Nuestra Esencia</div>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}
            >
              Un cafecito con alma, <br />
              en el corazón de El Coyol.
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#5E483C',
                lineHeight: 1.8,
                marginBottom: '1.25rem'
              }}
            >
              En <strong>Nuvé Café</strong> creemos que el café es mucho más que cafeína: es una pausa que reconforta, un saludo amable por la mañana y una sonrisa que acompaña tu rutina.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#5E483C',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}
            >
              Nuestra barra de café xpress combina la precisión y el sabor del café de especialidad con la calidez de un negocio de barrio. Ya sea que vengas por tu americano al amanecer, un frappé de mazapán para la tarde o una rebanada de torta de elote recién horneada, aquí siempre serás recibido con los brazos abiertos.
            </p>

            {/* Quality checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="#53644B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', color: '#3A271E' }}>
                  <strong>Granos 100% de origen mexicano:</strong> Notas aromáticas equilibradas, tostado fresco.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="#53644B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', color: '#3A271E' }}>
                  <strong>Barra Xpress:</strong> Tu bebida favorita lista al momento sin perder un ápice de calidad.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="#53644B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', color: '#3A271E' }}>
                  <strong>Hecho en casa con amor:</strong> Recetas auténticas horneadas por nosotros para consentirte.
                </span>
              </div>
            </div>
          </div>

          {/* Right: The 4 Value Cards (matching the stand's bottom bar: Al momento, Bebidas frías, Hecho en casa, Especialidad) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem'
            }}
            className="values-cards-grid"
          >
            {/* Card 1: Al Momento */}
            <div
              style={{
                backgroundColor: '#FFFDF9',
                padding: '2rem 1.5rem',
                borderRadius: '20px',
                border: '1px solid #E2D9CC',
                boxShadow: '0 8px 24px rgba(44, 26, 18, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(44, 26, 18, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 26, 18, 0.05)';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(196, 124, 73, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C47C49',
                  marginBottom: '1rem'
                }}
              >
                <Coffee size={24} />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#2E1D15',
                  marginBottom: '0.5rem'
                }}
              >
                Al Momento
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6E5548', lineHeight: 1.6 }}>
                Molienda y extracción al instante en cada taza para preservar los aromas y la frescura original.
              </p>
            </div>

            {/* Card 2: Bebidas Frías & Frappés */}
            <div
              style={{
                backgroundColor: '#FFFDF9',
                padding: '2rem 1.5rem',
                borderRadius: '20px',
                border: '1px solid #E2D9CC',
                boxShadow: '0 8px 24px rgba(44, 26, 18, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(44, 26, 18, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 26, 18, 0.05)';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: '#EAF0E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#53644B',
                  marginBottom: '1rem'
                }}
              >
                <Snowflake size={24} />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#2E1D15',
                  marginBottom: '0.5rem'
                }}
              >
                Bebidas Frías
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6E5548', lineHeight: 1.6 }}>
                Lattes helados y frappés sedosos (Mazapán, Oreo, Nutella) pensados para el clima veracruzano.
              </p>
            </div>

            {/* Card 3: Hecho en Casa */}
            <div
              style={{
                backgroundColor: '#FFFDF9',
                padding: '2rem 1.5rem',
                borderRadius: '20px',
                border: '1px solid #E2D9CC',
                boxShadow: '0 8px 24px rgba(44, 26, 18, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(44, 26, 18, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 26, 18, 0.05)';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: '#FDEEE9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C47C49',
                  marginBottom: '1rem'
                }}
              >
                <Heart size={24} fill="#C47C49" />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#2E1D15',
                  marginBottom: '0.5rem'
                }}
              >
                Hecho en Casa
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6E5548', lineHeight: 1.6 }}>
                Repostería tradicional y recetas familiares horneadas a fuego lento con ingredientes seleccionados.
              </p>
            </div>

            {/* Card 4: Especialidad */}
            <div
              style={{
                backgroundColor: '#FFFDF9',
                padding: '2rem 1.5rem',
                borderRadius: '20px',
                border: '1px solid #E2D9CC',
                boxShadow: '0 8px 24px rgba(44, 26, 18, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(44, 26, 18, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 26, 18, 0.05)';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(46, 29, 21, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2E1D15',
                  marginBottom: '1rem'
                }}
              >
                <Award size={24} />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#2E1D15',
                  marginBottom: '0.5rem'
                }}
              >
                Especialidad 🇲🇽
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6E5548', lineHeight: 1.6 }}>
                Orgullo cafetalero mexicano con tueste exacto para un sabor limpio, aromático y sin amargor excesivo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .values-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
