import React from 'react';
import { RefreshCw, Heart, Sparkles } from 'lucide-react';
import { TapeStrip, BowSticker } from './ScrapbookSticker';

export const FunnyNoPage = ({ onBack }) => {
  return (
    <div className="funny-container page-fade-in">
      <div className="scrap-card funny-card scrapbook-card-shadow">
        <TapeStrip color="#BDE0FE" angle={-2} width="100px" style={{ top: '-14px', left: '30%' }} />

        {/* Cute pleading mascot */}
        <div className="funny-illustration">
          <div className="pleading-face">
            <div className="bear-ears">
              <span className="ear ear-left" />
              <span className="ear ear-right" />
            </div>
            <div className="bear-head">
              <div className="eyes">
                <span className="eye">
                  <span className="pupil" />
                  <span className="glint" />
                  <span className="tear-drop tear-left">💧</span>
                </span>
                <span className="eye">
                  <span className="pupil" />
                  <span className="glint" />
                  <span className="tear-drop tear-right">💧</span>
                </span>
              </div>
              <div className="blush-cheeks">
                <span className="blush" />
                <span className="blush" />
              </div>
              <div className="mouth">
                <span>﹏</span>
              </div>
            </div>
          </div>
        </div>

        {/* Headings */}
        <h1 className="funny-title">
          NOOOOO!!! Try Again! 🥺💔
        </h1>

        <p className="funny-message">
          Are you really going to say NO to your little one?
        </p>

        <p className="funny-submessage">
          "Mummy, I worked so hard on this with all my heart just to bring a smile to your face! Please say YES! 🌸"
        </p>

        {/* Action button */}
        <div style={{ marginTop: '24px' }}>
          <button
            onClick={onBack}
            className="btn btn-yes pulse-glow"
            style={{ minWidth: '240px' }}
          >
            <RefreshCw size={18} className="spin-hover" />
            <span>Okay, let's go back ❤️</span>
          </button>
        </div>
      </div>
    </div>
  );
};
