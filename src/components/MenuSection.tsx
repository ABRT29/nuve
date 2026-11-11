import React, { useState } from 'react';
import { MenuCategory } from '../types';
import { MENU_ITEMS, CAFE_INFO } from '../data/menuData';
import { Coffee, Snowflake, Sparkles, Utensils, Flame, MessageCircle } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const categories: { id: MenuCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Todo el Menú', icon: <Sparkles size={16} /> },
    { id: 'caliente', label: 'Café Caliente', icon: <Coffee size={16} /> },
    { id: 'fria', label: 'Bebidas Frías', icon: <Snowflake size={16} /> },
    { id: 'frappe', label: 'Frappés', icon: <Flame size={16} /> },
    { id: 'comer', label: 'Para Comer', icon: <Utensils size={16} /> }
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="carta" className="section" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-badge">La Carta de la Barra</div>
          <h2 className="section-title">Qué se te antoja hoy en Nuvé</h2>
          <p className="section-subtitle">
            Bebidas calientes reconfortantes, frappés ultra cremosos y antojitos caseros recién salidos del horno. Todo preparado con granos de especialidad y amor.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  backgroundColor: isActive ? '#2E1D15' : '#EFE8DE',
                  color: isActive ? '#FFFDF9' : '#5E483C',
                  boxShadow: isActive ? '0 6px 18px rgba(46, 29, 21, 0.2)' : 'none',
                  border: isActive ? '1px solid #2E1D15' : '1px solid #E2D9CC'
                }}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '1.6rem',
                border: '1px solid #E5DED4',
                boxShadow: '0 4px 16px rgba(44, 26, 18, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(44, 26, 18, 0.09)';
                e.currentTarget.style.borderColor = '#C47C49';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(44, 26, 18, 0.04)';
                e.currentTarget.style.borderColor = '#E5DED4';
              }}
            >
              {item.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '-32px',
                    backgroundColor: '#C47C49',
                    color: '#FFFFFF',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '3px 35px',
                    transform: 'rotate(45deg)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  Popular
                </div>
              )}

              <div>
                {/* Header row with name and price */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    marginBottom: '0.6rem'
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#2E1D15'
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#C47C49',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.price}
                  </span>
                </div>

                {/* Badge if present */}
                {item.badge && (
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(196, 124, 73, 0.1)',
                      color: '#B86F3E',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6E5548',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px dashed #EDE5DA',
                  fontSize: '0.78rem',
                  color: '#917C70'
                }}
              >
                <span>
                  {item.category === 'caliente' && '☕ Bebida Caliente'}
                  {item.category === 'fria' && '❄️ Fría con Hielo'}
                  {item.category === 'frappe' && '🥤 Frappé Batido'}
                  {item.category === 'comer' && '🥐 Repostería / Panadería'}
                </span>
                <span style={{ fontWeight: 600, color: '#3A271E' }}>Al momento</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Order Callout */}
        <div
          style={{
            backgroundColor: '#2E1D15',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            color: '#FAF7F2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            boxShadow: '0 16px 40px rgba(46, 29, 21, 0.2)'
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.5rem',
                color: '#D8986B',
                display: 'block',
                marginBottom: '0.2rem'
              }}
            >
              ¡Tu pedido listo cuando llegues!
            </span>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '0.5rem'
              }}
            >
              ¿Tienes prisa? Pide por adelantado
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#D9CEC1', lineHeight: 1.6 }}>
              Escríbenos a nuestro WhatsApp o Instagram con tu orden y la tendremos recién preparada para que solo pases a recogerla a la barra en El Coyol.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/522290000000?text=${encodeURIComponent(CAFE_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
            >
              <MessageCircle size={18} />
              <span>Pedir por WhatsApp</span>
            </a>
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
              style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
            >
              <span>Ver en Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
