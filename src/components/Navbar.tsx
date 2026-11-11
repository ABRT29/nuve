import React, { useState, useEffect } from 'react';
import { NuveLogo } from './NuveLogo';
import { MapPin, Menu, X, Clock, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { CAFE_INFO } from '../data/menuData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar */}
      <div
        style={{
          backgroundColor: '#2E1D15',
          color: '#EFE8DD',
          fontSize: '0.78rem',
          padding: '0.45rem 1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap',
          letterSpacing: '0.04em',
          zIndex: 101,
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Heart size={13} color="#C47C49" fill="#C47C49" />
          <span>Tu cafecito de la esquina • <strong>Café con alma</strong></span>
        </div>
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={12} color="#C47C49" /> José Azueta 108, El Coyol, Veracruz
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={12} color="#C47C49" /> Lun a Sáb: 8:00 AM – 8:00 PM
          </span>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(247, 244, 238, 0.95)' : 'rgba(247, 244, 238, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(226, 217, 204, 0.8)',
          boxShadow: scrolled ? '0 4px 20px rgba(44, 26, 18, 0.06)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem'
          }}
        >
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
            <NuveLogo variant="horizontal" size={42} />
          </a>

          {/* Desktop Nav items */}
          <nav
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.2rem'
            }}
          >
            <a
              href="#el-cafe"
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#422C20',
                transition: 'color 0.2s',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C47C49')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#422C20')}
            >
              El Café
            </a>
            <a
              href="#carta"
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#422C20',
                transition: 'color 0.2s',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C47C49')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#422C20')}
            >
              La Carta
            </a>
            <a
              href="#especialidades"
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#422C20',
                transition: 'color 0.2s',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C47C49')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#422C20')}
            >
              Especialidades
            </a>
            <a
              href="#galeria"
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#422C20',
                transition: 'color 0.2s',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C47C49')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#422C20')}
            >
              Comunidad
            </a>
            <a
              href="#ubicacion"
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#422C20',
                transition: 'color 0.2s',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C47C49')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#422C20')}
            >
              Ubicación & Horarios
            </a>
          </nav>

          {/* Action CTAs */}
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(196, 124, 73, 0.12)',
                color: '#C47C49',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C47C49';
                e.currentTarget.style.color = '#FFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(196, 124, 73, 0.12)';
                e.currentTarget.style.color = '#C47C49';
              }}
            >
              <InstagramIcon size={19} />
            </a>

            <a
              href="#ubicacion"
              className="btn btn-primary hidden-mobile"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
            >
              <MapPin size={15} />
              <span>Cómo llegar</span>
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              style={{
                display: 'none',
                padding: '0.5rem',
                color: '#2E1D15'
              }}
              className="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: '#F7F4EE',
            borderBottom: '2px solid #E2D9CC',
            padding: '1.5rem',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          <a
            href="#el-cafe"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2E1D15', padding: '0.5rem 0' }}
          >
            El Café
          </a>
          <a
            href="#carta"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2E1D15', padding: '0.5rem 0' }}
          >
            La Carta
          </a>
          <a
            href="#especialidades"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2E1D15', padding: '0.5rem 0' }}
          >
            Especialidades
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2E1D15', padding: '0.5rem 0' }}
          >
            Comunidad & Instagram
          </a>
          <a
            href="#ubicacion"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2E1D15', padding: '0.5rem 0' }}
          >
            Ubicación & Horarios
          </a>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid #E2D9CC', display: 'flex', gap: '0.75rem' }}>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MapPin size={16} /> Visítanos en El Coyol
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
