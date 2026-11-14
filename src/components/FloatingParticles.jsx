import React, { useMemo } from 'react';

export const FloatingParticles = () => {
  const particles = useMemo(() => {
    const items = ['🌸', '💖', '✨', '🌷', '🦋', '⭐', '🤍', '🎀'];
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      char: items[i % items.length],
      left: Math.random() * 96 + 2,
      size: Math.random() * 14 + 14,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
      wobble: Math.random() * 20 - 10,
      opacity: Math.random() * 0.4 + 0.35
    }));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            bottom: '-40px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatUpward ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            filter: 'drop-shadow(0 2px 4px rgba(255, 182, 193, 0.3))',
            userSelect: 'none'
          }}
        >
          {p.char}
        </span>
      ))}
      <style>{`
        @keyframes floatUpward {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) translateX(25px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
