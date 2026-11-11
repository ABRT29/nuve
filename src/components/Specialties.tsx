import React from 'react';
import { Heart, Sparkles, Coffee, Award, Star } from 'lucide-react';

export const Specialties: React.FC = () => {
  const items = [
    {
      title: 'Torta de Elote Casera',
      subtitle: 'Bien suave y hecha con amor',
      description: 'Nuestra consentida de la repostería. Elaborada artesanalmente con granos tiernos de maíz, mantequilla y un toque dorado irresistible.',
      tag: 'Especialidad Casera',
      price: '$45',
      icon: <Star size={20} color="#C47C49" />
    },
    {
      title: 'Pay de Jamón con Queso',
      subtitle: 'El toque salado perfecto',
      description: 'Masa hojaldrada crujiente rellena de jamón selecto y queso gratinado calientito. El complemento ideal para tu café matutino.',
      tag: 'Para el Desayuno',
      price: '$48',
      icon: <Heart size={20} color="#C47C49" />
    },
    {
      title: 'Frappé de Mazapán',
      subtitle: 'El favorito de El Coyol',
      description: 'El sabor tradicional del mazapán mexicano llevado a una textura frozen ultra cremosa con espresso selecto y lluvia de cacahuate.',
      tag: 'Imperdible',
      price: '$65',
      icon: <Award size={20} color="#C47C49" />
    },
    {
      title: 'Latte Caramelo Frío',
      subtitle: 'Refrescante y equilibrado',
      description: 'Doble shot de expreso de especialidad sobre leche fría, hielo cristalino y jarabe de caramelo casero tostado.',
      tag: 'Top Fríos',
      price: '$55',
      icon: <Coffee size={20} color="#C47C49" />
    }
  ];

  return (
    <section id="especialidades" className="section" style={{ backgroundColor: '#F7F4EE' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <Sparkles size={14} /> Los Consentidos de Nuvé
          </div>
          <h2 className="section-title">Especialidades con Sabor a Hogar</h2>
          <p className="section-subtitle">
            Cada creación nace de recetas preparadas con pasión, cuidando cada detalle para ofrecerte una experiencia auténtica y deliciosa.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '22px',
                padding: '2rem',
                border: '1px solid #E2D9CC',
                boxShadow: '0 8px 25px rgba(44, 26, 18, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(44, 26, 18, 0.12)';
                e.currentTarget.style.borderColor = '#C47C49';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 26, 18, 0.05)';
                e.currentTarget.style.borderColor = '#E2D9CC';
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(196, 124, 73, 0.12)',
                      color: '#B86F3E',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {item.tag}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#F7F4EE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#2E1D15',
                    marginBottom: '0.25rem'
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: '1.25rem',
                    color: '#C47C49',
                    display: 'block',
                    marginBottom: '0.85rem'
                  }}
                >
                  {item.subtitle}
                </span>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#6E5548',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid #EFE9DE'
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#2E1D15'
                  }}
                >
                  {item.price}
                </span>
                <a
                  href={`https://wa.me/522290000000?text=${encodeURIComponent(`¡Hola Nuvé Café! Quiero pedir: ${item.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#C47C49',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  Pedir ahora &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
