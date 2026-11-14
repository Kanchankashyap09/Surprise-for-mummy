import React from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Camera } from 'lucide-react';
import { TapeStrip, FlowerSticker, BowSticker, ButterflySticker, PostageStamp } from './ScrapbookSticker';

export const WelcomePage = ({ onYes, onNo, momPhoto }) => {
  const handleYesClick = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F8BBD0', '#FF80AB', '#BDE0FE', '#FFF59D', '#EDE7F6']
      });
    } catch {
      // ignore
    }
    setTimeout(() => {
      onYes();
    }, 450);
  };

  return (
    <div className="welcome-container page-fade-in">
      {/* Decorative scrap elements */}
      <FlowerSticker size={46} style={{ position: 'absolute', top: '24px', left: '28px', transform: 'rotate(-12deg)' }} />
      <BowSticker size={42} style={{ position: 'absolute', top: '30px', right: '35px', transform: 'rotate(15deg)' }} />
      <ButterflySticker size={40} style={{ position: 'absolute', bottom: '40px', left: '30px', transform: 'rotate(-10deg)' }} />
      <PostageStamp label="LOVE 100%" style={{ position: 'absolute', bottom: '40px', right: '30px' }} />

      {/* Main card */}
      <div className="scrap-card scrapbook-card-shadow">
        <TapeStrip color="#F8BBD0" angle={-3} width="110px" style={{ top: '-14px', left: '25%' }} />
        <TapeStrip color="#BDE0FE" angle={2} width="110px" style={{ top: '-14px', right: '25%' }} />

        {/* Floating Heart / Sparkle Icon */}
        <div className="badge-pill">
          <Sparkles size={16} color="#E91E63" />
          <span>Made With Infinite Love</span>
          <Heart size={16} color="#E91E63" fill="#E91E63" />
        </div>

        {/* Headings */}
        <h1 className="main-title">
          Hey Mummy! <span className="heart-beat">❤️</span>
        </h1>
        <p className="sub-title">
          I have made something special for you...
        </p>

        {/* Polaroid Mom Photo Preview */}
        <div className="welcome-polaroid">
          <TapeStrip color="#EDE7F6" angle={-1} width="70px" style={{ top: '-10px', left: '35%' }} />
          <div className="welcome-photo-wrapper">
            <img
              src={momPhoto?.src || '/photos/photo-1.jpeg'}
              alt="Mummy"
              className="welcome-photo"
              onError={(e) => {
                if (momPhoto?.fallbackSrc && e.target.src !== momPhoto.fallbackSrc) {
                  e.target.src = momPhoto.fallbackSrc;
                }
              }}
            />
          </div>
          <p className="polaroid-caption">
            My most beautiful mom 🌸
          </p>
        </div>

        {/* The Question */}
        <div className="question-box">
          <h2 className="question-text">
            Do you want a little surprise? 🎁
          </h2>
          <p className="question-sub">
            (I promise it will make you smile!)
          </p>
        </div>

        {/* The Action Buttons */}
        <div className="button-group">
          <button
            onClick={handleYesClick}
            className="btn btn-yes pulse-glow"
          >
            <span>YES!! ❤️</span>
          </button>

          <button
            onClick={onNo}
            className="btn btn-no"
          >
            <span>NO!! 🥺</span>
          </button>
        </div>
      </div>
    </div>
  );
};
