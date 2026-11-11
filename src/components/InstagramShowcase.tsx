import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { NuveLogo } from './NuveLogo';
import { CAFE_INFO } from '../data/menuData';

export const InstagramShowcase: React.FC = () => {
  return (
    <section id="galeria" className="section bg-sand">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <InstagramIcon size={14} color="#C47C49" />
            <span>Comunidad @nuve_cafe</span>
          </div>
          <h2 className="section-title">El Cafecito de Nuestra Gente</h2>
          <p className="section-subtitle">
            Un espacio creado para consentirte. Visítanos en El Coyol y comparte tus mañanas con el hashtag <strong>#NuveCafe</strong>.
          </p>
        </div>

        <div className="community-grid">
          {/* Left: Minimalist Instagram Bio Card (Pure Vector / Typography) */}
          <div className="insta-profile-card">
            <div className="insta-profile-header">
              <div className="insta-avatar">
                <NuveLogo variant="icon" size={32} />
              </div>
              <div className="insta-meta">
                <div className="insta-handle-row">
                  <h3>nuve_cafe</h3>
                  <span className="insta-badge">Oficial</span>
                </div>
                <p className="insta-cat">Nuvé Café • Cafetería de Especialidad</p>
              </div>
            </div>

            <div className="insta-bio-box">
              <p>☕ <strong>Barra de Café xpress</strong></p>
              <p>🇲🇽 Café de especialidad mexicano</p>
              <p>🗓️ Lunes a Sábados: 8:00 AM – 8:00 PM</p>
              <p>📍 José Azueta 108, El Coyol, Veracruz.</p>
            </div>

            <div className="insta-action-row">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                <InstagramIcon size={17} color="#FFF" />
                <span>Seguir en Instagram</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right: Reviews from clients */}
          <div className="reviews-list">
            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={15} color="#C47C49" fill="#C47C49" />
                ))}
              </div>
              <p className="review-text">
                "¡El mejor café del Coyol! El grano tiene un sabor riquísimo sin acidez desagradable, y la torta de elote es suavecita y calientita. Atención de 10."
              </p>
              <div className="review-author">
                <strong>Mariana R.</strong>
                <span>Vecina de El Coyol</span>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={15} color="#C47C49" fill="#C47C49" />
                ))}
              </div>
              <p className="review-text">
                "El Frappé de Mazapán es otro nivel en Veracruz. Textura perfecta y sabor auténtico. Se nota que le ponen amor a cada preparación."
              </p>
              <div className="review-author">
                <strong>Carlos G.</strong>
                <span>Cliente frecuente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
