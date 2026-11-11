import React from 'react';

interface NuveLogoProps {
  variant?: 'horizontal' | 'badge' | 'icon' | 'banner';
  className?: string;
  size?: number;
  light?: boolean;
}

export const NuveLogo: React.FC<NuveLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 48,
  light = false,
}) => {
  const color = light ? '#FFFDF9' : '#301F17';
  const accentColor = '#C47C49'; // warm terracotta caramel

  // Minimalist Coffee Cup + Cloud Steam + Sparkle
  const renderCupIcon = (scale = 1) => (
    <svg
      width={size * scale}
      height={size * scale}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nuve-icon-svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Sparkle / Little plus above steam */}
      <path
        d="M50 16 V22 M47 19 H53"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Cloud-like Steam (Nuvé = Nube) */}
      <path
        d="M38 32 C35 30 35 25 41 24 C44 21 52 21 55 24 C60 23 64 27 61 32 C59 35 40 36 38 32 Z"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner gentle swirl in the cloud */}
      <path
        d="M45 28 C48 26 53 26 55 29"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Coffee Cup Body */}
      <path
        d="M32 40 H68 V53 C68 62 60 68 50 68 C40 68 32 62 32 53 Z"
        fill="none"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cup Handle */}
      <path
        d="M68 44 C74 44 78 48 78 53 C78 58 74 61 68 61"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Saucer / Base Plate */}
      <path
        d="M28 72 H72"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Small Heart Accent */}
      <path
        d="M50 83 C50 83 46 79.5 44 77.5 C41.5 75.5 41.5 73 44 71 C46.5 69 49 70.5 50 72 C51 70.5 53.5 69 56 71 C58.5 73 58.5 75.5 56 77.5 C54 79.5 50 83 50 83 Z"
        fill={accentColor}
      />
    </svg>
  );

  // Botanical branch (leaves & coffee berries)
  const renderBotanicalBranch = (flip = false) => (
    <svg
      width="70"
      height="120"
      viewBox="0 0 70 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        opacity: 0.85
      }}
    >
      {/* Main stem */}
      <path
        d="M55 10 C45 35 30 70 20 115"
        stroke={light ? '#E5DED4' : '#4E5E44'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M50 25 C40 20 30 22 28 32 C38 33 46 30 50 25 Z"
        fill={light ? '#ECE3D6' : '#5D6D55'}
      />
      {/* Leaf 2 */}
      <path
        d="M42 45 C52 42 60 48 58 58 C48 56 42 50 42 45 Z"
        fill={light ? '#ECE3D6' : '#5D6D55'}
      />
      {/* Leaf 3 */}
      <path
        d="M33 70 C20 68 15 78 18 88 C28 85 32 77 33 70 Z"
        fill={light ? '#ECE3D6' : '#5D6D55'}
      />
      {/* Leaf 4 */}
      <path
        d="M26 92 C36 90 44 98 40 108 C32 105 26 98 26 92 Z"
        fill={light ? '#ECE3D6' : '#5D6D55'}
      />
      {/* Coffee berries */}
      <circle cx="48" cy="36" r="3.5" fill="#3D271D" />
      <circle cx="38" cy="60" r="3.5" fill="#3D271D" />
      <circle cx="28" cy="82" r="3.5" fill="#3D271D" />
    </svg>
  );

  if (variant === 'icon') {
    return <span className={`nuve-logo-icon ${className}`}>{renderCupIcon(1)}</span>;
  }

  if (variant === 'badge') {
    return (
      <div
        className={`nuve-logo-badge ${className}`}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: '#F8F4EE',
          boxShadow: '0 8px 24px rgba(61, 39, 29, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: size * 0.1,
          border: '1px solid rgba(227, 220, 208, 0.7)',
          textAlign: 'center',
          userSelect: 'none'
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: size * 0.22,
            fontWeight: 500,
            color: '#301F17',
            lineHeight: 1,
            letterSpacing: '0.02em',
            marginBottom: size * 0.02
          }}
        >
          nuvé
        </span>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: size * 0.085,
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: '#5A4337',
            textTransform: 'uppercase',
            marginBottom: size * 0.03
          }}
        >
          CAFÉ
        </span>
        <div style={{ marginTop: -size * 0.03, marginBottom: size * 0.01 }}>
          {renderCupIcon(0.4)}
        </div>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: size * 0.065,
            letterSpacing: '0.2em',
            color: '#7A6255',
            textTransform: 'uppercase',
            fontWeight: 500
          }}
        >
          CAFÉ CON ALMA
        </span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`nuve-logo-banner ${className}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <div className="hidden-mobile">{renderBotanicalBranch(false)}</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', marginBottom: '0.25rem' }}>
            {renderCupIcon(0.7)}
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '2.5rem',
              fontWeight: 600,
              color: color,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0.2rem 0'
            }}
          >
            Nuvé
          </h2>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.85rem',
              letterSpacing: '0.35em',
              color: accentColor,
              fontWeight: 600,
              textTransform: 'uppercase',
              marginBottom: '0.4rem'
            }}
          >
            — CAFÉ —
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              color: light ? '#EBE3D5' : '#6E5548',
              fontWeight: 500,
              textTransform: 'uppercase'
            }}
          >
            CAFÉ QUE SE DISFRUTA • CON ALMA
          </div>
        </div>
        <div className="hidden-mobile">{renderBotanicalBranch(true)}</div>
      </div>
    );
  }

  // Default: Horizontal Navbar Logo
  return (
    <div
      className={`nuve-logo-horizontal ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      <div
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: light ? 'rgba(255, 255, 255, 0.15)' : '#F7F4EE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: light ? '1px solid rgba(255,255,255,0.2)' : '1px solid #E5DED4',
          transition: 'all 0.3s ease'
        }}
      >
        {renderCupIcon(0.38)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.45rem',
              fontWeight: 600,
              color: color,
              lineHeight: 1,
              letterSpacing: '0.02em'
            }}
          >
            nuvé
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: accentColor,
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            CAFÉ
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: light ? '#D9CEC1' : '#8A7367',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginTop: '2px'
          }}
        >
          Café con alma • Veracruz
        </span>
      </div>
    </div>
  );
};
