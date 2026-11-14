import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RefreshCw, ChevronLeft, Gift } from 'lucide-react';
import { TapeStrip, FlowerSticker, BowSticker, ButterflySticker, PostageStamp } from './ScrapbookSticker';

export const FinalSurprisePage = ({ memories, onPhotoClick, onRestart, onBack }) => {
  useEffect(() => {
    // Initial celebratory blast
    try {
      const end = Date.now() + 1500;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#F8BBD0', '#FF80AB', '#BDE0FE', '#FFF59D', '#EDE7F6']
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#F8BBD0', '#FF80AB', '#BDE0FE', '#FFF59D', '#EDE7F6']
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch {
      // ignore
    }
  }, []);

  const triggerCelebrate = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E91E63', '#FF4081', '#F8BBD0', '#BDE0FE', '#FFF59D']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="final-container page-fade-in">
      <FlowerSticker size={48} style={{ position: 'absolute', top: '20px', left: '20px', transform: 'rotate(-20deg)' }} />
      <BowSticker size={44} style={{ position: 'absolute', top: '25px', right: '25px', transform: 'rotate(18deg)' }} />

      <div className="section-header">
        <div className="badge-pill">
          <Heart size={14} color="#E91E63" fill="#E91E63" />
          <span>Final Chapter: My Eternal Love</span>
          <Sparkles size={14} color="#E91E63" />
        </div>
        <h1 className="page-heading">
          My Forever Favourite Person ❤️
        </h1>
        <p className="page-subheading">
          A tapestry of our sweetest smiles and cherished moments together.
        </p>
      </div>

      {/* Large Scrapbook Memory Collage */}
      <div className="collage-grid">
        {memories.map((item, idx) => {
          // Staggered scrap rotation & sizes
          const angles = [-3, 2.5, -2, 3, -1.5, 2, -2.5];
          const angle = angles[idx % angles.length];
          return (
            <div
              key={item.id}
              className="collage-item polaroid-hover"
              style={{
                transform: `rotate(${angle}deg)`
              }}
              onClick={() => onPhotoClick(item, idx)}
            >
              <TapeStrip
                color={item.tapeColor || '#F8BBD0'}
                angle={idx % 2 === 0 ? -3 : 2}
                width="75px"
                style={{ top: '-10px', left: 'calc(50% - 37px)' }}
              />

              <div className="collage-img-wrapper">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    if (item.fallbackSrc && e.target.src !== item.fallbackSrc) {
                      e.target.src = item.fallbackSrc;
                    }
                  }}
                />
              </div>
              <p className="collage-caption">{item.title}</p>
            </div>
          );
        })}
      </div>

      {/* Final Love Note Tribute Card */}
      <div className="final-tribute-card scrapbook-card-shadow">
        <TapeStrip color="#BDE0FE" angle={-1} width="110px" style={{ top: '-14px', left: '35%' }} />
        <BowSticker size={42} style={{ margin: '0 auto 12px', display: 'block' }} />

        <h2 className="tribute-thanks">
          Thank you for being my Mummy. 🌸
        </h2>

        <p className="tribute-quote">
          "If I could choose a mother in every lifetime, I would still choose YOU."
        </p>

        <p className="tribute-promise">
          I love you, Mummy. Forever and always. ❤️
        </p>

        <div className="tribute-actions">
          <button
            onClick={triggerCelebrate}
            className="btn btn-yes pulse-glow"
          >
            <Sparkles size={18} />
            <span>Celebrate Our Love! 🎉</span>
          </button>
        </div>
      </div>

      {/* Navigation and Replay */}
      <div className="nav-bar-footer">
        <button onClick={onBack} className="btn-nav btn-nav-back">
          <ChevronLeft size={18} />
          <span>Things I Love About You</span>
        </button>

        <button onClick={onRestart} className="btn-nav btn-nav-restart">
          <RefreshCw size={16} />
          <span>Start From The Beginning 💖</span>
        </button>
      </div>
    </div>
  );
};
