import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Navigation, Copy, Check, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);

  // Check Mexico Central Time (UTC-6)
  useEffect(() => {
    try {
      const now = new Date();
      // Format to Mexico City timezone
      const mexicoTimeStr = now.toLocaleString("en-US", { timeZone: "America/Mexico_City" });
      const mexicoDate = new Date(mexicoTimeStr);
      const day = mexicoDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
      const hour = mexicoDate.getHours();

      if (day >= 1 && day <= 6 && hour >= 8 && hour < 20) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    } catch {
      setIsOpenNow(true);
    }
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="ubicacion" className="section" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <MapPin size={14} /> Ven a Conocernos
          </div>
          <h2 className="section-title">Tu Cafecito en El Coyol</h2>
          <p className="section-subtitle">
            Estamos ubicados sobre José Azueta, listos para prepararte tu café favorito con la mejor sonrisa.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'stretch'
          }}
          className="location-grid"
        >
          {/* Left: Info Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid #E2D9CC',
              boxShadow: '0 10px 30px rgba(44, 26, 18, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Real-time status pill */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    backgroundColor: isOpenNow ? '#EAF0E8' : '#F7EBE8',
                    color: isOpenNow ? '#3F4D39' : '#8A3E35'
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: isOpenNow ? '#4CAF50' : '#E53935'
                    }}
                  />
                  {isOpenNow ? '¡Estamos abiertos ahora mismo!' : 'Cerrado por ahora • Te esperamos mañana a las 8:00 AM'}
                </span>
              </div>

              {/* Address details */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <MapPin size={22} color="#C47C49" />
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#2E1D15'
                    }}
                  >
                    Dirección
                  </h3>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#5E483C', lineHeight: 1.6, marginLeft: '2rem' }}>
                  <strong>José Azueta 108</strong><br />
                  Col. El Coyol, C.P. 91779<br />
                  Veracruz, Ver., México
                </p>
                <div style={{ marginLeft: '2rem', marginTop: '0.75rem' }}>
                  <button
                    onClick={handleCopyAddress}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: copied ? '#3F4D39' : '#C47C49',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                      backgroundColor: copied ? '#EAF0E8' : 'rgba(196, 124, 73, 0.1)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? '¡Dirección copiada!' : 'Copiar dirección'}</span>
                  </button>
                </div>
              </div>

              {/* Hours details */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Clock size={22} color="#C47C49" />
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#2E1D15'
                    }}
                  >
                    Horarios de Atención
                  </h3>
                </div>
                <div style={{ marginLeft: '2rem', fontSize: '0.98rem', color: '#5E483C' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px dashed #EDE5DA' }}>
                    <span style={{ fontWeight: 600 }}>Lunes a Viernes</span>
                    <span>8:00 AM – 8:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px dashed #EDE5DA' }}>
                    <span style={{ fontWeight: 600 }}>Sábado</span>
                    <span>8:00 AM – 8:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}>
                    <span style={{ fontWeight: 600, color: '#917C70' }}>Domingo</span>
                    <span style={{ color: '#917C70' }}>Descanso familiar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid #EFE9DE' }}>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <Navigation size={16} />
                <span>Abrir en Google Maps</span>
              </a>
              <a
                href={`https://wa.me/522290000000?text=${encodeURIComponent(CAFE_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, minWidth: '160px' }}
              >
                <MessageCircle size={16} color="#C47C49" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Maps Frame */}
          <div
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 35px rgba(44, 26, 18, 0.08)',
              border: '1px solid #E2D9CC',
              minHeight: '420px',
              position: 'relative'
            }}
          >
            <iframe
              title="Ubicación de Nuvé Café en El Coyol, Veracruz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6471844621946!2d-96.1772!3d19.1678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c34139bc6bc4e1%3A0x6b772421!2sJos%C3%A9%20Azueta%20108%2C%20El%20Coyol%2C%20Veracruz!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', display: 'block' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
