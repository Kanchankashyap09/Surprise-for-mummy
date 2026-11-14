import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Heart, Sparkles, ChevronLeft, ChevronRight, PenTool } from 'lucide-react';
import { TapeStrip, FlowerSticker, BowSticker, PostageStamp } from './ScrapbookSticker';

export const LetterPage = ({ onNext, onBack }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#F8BBD0', '#FF80AB', '#BDE0FE', '#FFF59D']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="letter-container page-fade-in">
      <FlowerSticker size={42} style={{ position: 'absolute', top: '15px', left: '30px', transform: 'rotate(-15deg)' }} />
      <BowSticker size={38} style={{ position: 'absolute', top: '25px', right: '35px', transform: 'rotate(12deg)' }} />

      <div className="section-header">
        <div className="badge-pill">
          <Mail size={14} color="#E91E63" />
          <span>Chapter 2: From My Heart</span>
          <Sparkles size={14} color="#E91E63" />
        </div>
        <h1 className="page-heading">
          A Little Letter For You, Mummy 💌
        </h1>
        <p className="page-subheading">
          Words from the bottom of my heart, written just for you.
        </p>
      </div>

      {/* Interactive Envelope or Unfolded Letter */}
      {!isOpen ? (
        <div className="envelope-wrapper">
          <div className="envelope-box" onClick={handleOpenLetter}>
            <PostageStamp label="EXPRESS" style={{ position: 'absolute', top: '20px', right: '20px' }} />
            <div className="envelope-flap" />
            <div className="wax-seal pulse-glow">
              <Heart size={24} color="#FFFFFF" fill="#FFFFFF" />
            </div>
            <div className="envelope-text">
              <p className="to-mummy">To: The Best Mummy in the Whole Universe 🌸</p>
              <p className="tap-hint">Tap the heart to unseal your letter</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="paper-letter-wrapper letter-open-anim">
          <TapeStrip color="#F8BBD0" angle={-1} width="110px" style={{ top: '-14px', left: '35%' }} />
          <div className="paper-texture">
            <div className="letter-header">
              <span className="letter-date">Written with pure love 💖</span>
              <PostageStamp label="MOM #1" style={{ position: 'relative', top: '0', right: '0' }} />
            </div>

            <div className="letter-body">
              <p className="salutation">Dear Mummy,</p>

              <p className="letter-para">
                I don't think words will ever be enough to explain how much you mean to me.
              </p>

              <p className="letter-para">
                Thank you for every little thing you do, for every sacrifice, every smile, every hug, and every moment you have stood beside me.
              </p>

              <p className="letter-para">
                You are my biggest supporter, my comfort, my strength, and one of the most precious blessings in my life.
              </p>

              <p className="letter-para">
                I may not always express it, but I notice everything you do for me. Your love makes even ordinary days special.
              </p>

              <p className="letter-para">
                I know I cannot give back everything you have done for me, but I promise to always make you proud.
              </p>

              <p className="letter-para">
                No matter how much I grow up, I will always be your little child.
              </p>

              <p className="letter-para letter-highlight">
                I love you more than words can ever explain.
              </p>

              <div className="letter-signoff">
                <p>Forever your little one,</p>
                <p className="signature">With all my love ❤️</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="nav-bar-footer">
        <button onClick={onBack} className="btn-nav btn-nav-back">
          <ChevronLeft size={18} />
          <span>Our Memories</span>
        </button>
        <button onClick={onNext} className="btn-nav btn-nav-next">
          <span>Things I Love About You</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
