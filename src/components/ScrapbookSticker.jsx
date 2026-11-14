import React from 'react';

export const TapeStrip = ({ color = '#F8BBD0', angle = -2, width = '90px', style = {} }) => (
  <div
    style={{
      width,
      height: '24px',
      backgroundColor: color,
      opacity: 0.85,
      transform: `rotate(${angle}deg)`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      borderRadius: '2px',
      position: 'absolute',
      zIndex: 10,
      backdropFilter: 'blur(2px)',
      borderLeft: '2px dashed rgba(255,255,255,0.6)',
      borderRight: '2px dashed rgba(255,255,255,0.6)',
      ...style
    }}
  />
);

export const FlowerSticker = ({ size = 32, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    style={{ filter: 'drop-shadow(0 2px 4px rgba(233,30,99,0.2))', ...style }}
  >
    <circle cx="50" cy="28" r="18" fill="#F8BBD0" />
    <circle cx="72" cy="50" r="18" fill="#F8BBD0" />
    <circle cx="50" cy="72" r="18" fill="#F8BBD0" />
    <circle cx="28" cy="50" r="18" fill="#F8BBD0" />
    <circle cx="50" cy="50" r="14" fill="#FFF176" />
    <circle cx="50" cy="50" r="8" fill="#FDD835" />
  </svg>
);

export const BowSticker = ({ size = 36, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 80"
    style={{ filter: 'drop-shadow(0 2px 4px rgba(233,30,99,0.25))', ...style }}
  >
    <path
      d="M50 40 C30 15, 10 20, 15 45 C20 70, 45 45, 50 40 Z"
      fill="#F48FB1"
    />
    <path
      d="M50 40 C70 15, 90 20, 85 45 C80 70, 55 45, 50 40 Z"
      fill="#F48FB1"
    />
    <path
      d="M45 45 C40 60, 25 75, 20 80 C30 75, 45 60, 48 45 Z"
      fill="#F06292"
    />
    <path
      d="M55 45 C60 60, 75 75, 80 80 C70 75, 55 60, 52 45 Z"
      fill="#F06292"
    />
    <circle cx="50" cy="40" r="9" fill="#E91E63" />
  </svg>
);

export const ButterflySticker = ({ size = 34, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 90"
    style={{ filter: 'drop-shadow(0 2px 5px rgba(2,136,209,0.2))', ...style }}
  >
    <path
      d="M50 45 C35 15, 10 20, 15 50 C20 75, 45 55, 50 45 Z"
      fill="#BDE0FE"
    />
    <path
      d="M50 45 C65 15, 90 20, 85 50 C80 75, 55 55, 50 45 Z"
      fill="#BDE0FE"
    />
    <path
      d="M50 50 C38 60, 20 70, 25 85 C35 90, 48 65, 50 50 Z"
      fill="#A2D2FF"
    />
    <path
      d="M50 50 C62 60, 80 70, 75 85 C65 90, 52 65, 50 50 Z"
      fill="#A2D2FF"
    />
    <ellipse cx="50" cy="50" rx="3.5" ry="18" fill="#4A148C" />
  </svg>
);

export const HeartSticker = ({ size = 28, color = '#FF4081', style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    style={{ filter: 'drop-shadow(0 2px 4px rgba(255,64,129,0.3))', ...style }}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const SparkleSticker = ({ size = 26, color = '#FFD54F', style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    style={{ filter: 'drop-shadow(0 1px 3px rgba(255,193,7,0.4))', ...style }}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const PostageStamp = ({ label = 'AIR MAIL', color = '#BDE0FE', style = {} }) => (
  <div
    style={{
      padding: '6px 10px',
      backgroundColor: '#FFF',
      border: `2px dashed ${color}`,
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Caveat, cursive',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#455A64',
      transform: 'rotate(-4deg)',
      letterSpacing: '1px',
      ...style
    }}
  >
    <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#888' }}>LOVE POST</span>
    <span style={{ color: '#E91E63' }}>💌 {label}</span>
  </div>
);
