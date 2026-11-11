import React from 'react';
import { NuveLogo } from './NuveLogo';
import { Sparkles, MapPin, ArrowRight, Coffee, Heart, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & Actions */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>Barra de Café xpress • El Coyol, Veracruz</span>
            </div>

            <h1 className="hero-title">
              Café con alma, <br />
              <span className="hero-title-accent">hecho con amor</span> para ti.
            </h1>

            <p className="hero-desc">
              Tu cafecito de la esquina en El Coyol. Granos 100% mexicanos de especialidad, bebidas calientes, frappés cremosos y repostería artesanal horneada con el corazón.
            </p>

            <div className="hero-actions">
              <a href="#carta" className="btn btn-primary">
                <Coffee size={17} />
                <span>Ver la Carta</span>
                <ArrowRight size={15} />
              </a>
              <a href="#ubicacion" className="btn btn-secondary">
                <MapPin size={16} color="#C47C49" />
                <span>Cómo llegar</span>
              </a>
            </div>

            {/* Quick feature pill row */}
            <div className="hero-pills">
              <div className="pill-item">
                <div className="pill-icon sage">
                  <Award size={15} />
                </div>
                <span>Especialidad 🇲🇽</span>
              </div>
              <div className="pill-item">
                <div className="pill-icon caramel">
                  <Sparkles size={15} />
                </div>
                <span>Al Momento</span>
              </div>
              <div className="pill-item">
                <div className="pill-icon peach">
                  <Heart size={15} fill="#C47C49" />
                </div>
                <span>100% Casero</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pure Vector Brand Card (No JPG) */}
          <div className="hero-visual">
            <div className="hero-brand-card">
              <div className="brand-card-inner">
                <NuveLogo variant="badge" size={170} />
                <div className="brand-card-meta">
                  <div className="brand-card-tag">Barra xpress • Especialidad</div>
                  <h3 className="brand-card-heading">Café que se disfruta</h3>
                  <p className="brand-card-sub">José Azueta 108 • El Coyol</p>
                </div>

                <div className="brand-card-highlights">
                  <div className="highlight-chip">☕ Espresso Caliente & Frío</div>
                  <div className="highlight-chip">🥤 Frappé de Mazapán</div>
                  <div className="highlight-chip">🥐 Torta de Elote & Pays</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
