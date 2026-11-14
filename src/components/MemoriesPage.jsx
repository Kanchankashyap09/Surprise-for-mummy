import React from 'react';
import { ZoomIn, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { TapeStrip, FlowerSticker, BowSticker, ButterflySticker } from './ScrapbookSticker';

export const MemoriesPage = ({ memories, onPhotoClick, onNext, onBack }) => {
  return (
    <div className="memories-container page-fade-in">
      {/* Decorative Stickers */}
      <FlowerSticker size={42} style={{ position: 'absolute', top: '15px', right: '40px', transform: 'rotate(10deg)' }} />
      <BowSticker size={38} style={{ position: 'absolute', top: '20px', left: '30px', transform: 'rotate(-12deg)' }} />

      {/* Header */}
      <div className="section-header">
        <div className="badge-pill">
          <Heart size={14} color="#E91E63" fill="#E91E63" />
          <span>Chapter 1: The Scrapbook</span>
          <Sparkles size={14} color="#E91E63" />
        </div>
        <h1 className="page-heading">
          A Little Collection of Our Memories 💗
        </h1>
        <p className="page-subheading">
          Every moment with you is a treasure tucked inside my heart. Tap any picture to take a closer look!
        </p>
      </div>

      {/* Polaroid Scrapbook Grid */}
      <div className="scrapbook-gallery">
        {memories.map((item, idx) => (
          <div
            key={item.id}
            className="polaroid-card polaroid-hover"
            style={{
              transform: `rotate(${item.rotation}deg)`
            }}
            onClick={() => onPhotoClick(item, idx)}
            title="Click to view full photo"
          >
            {/* Washi Tape Strip */}
            <TapeStrip
              color={item.tapeColor}
              angle={idx % 2 === 0 ? -3 : 2}
              width="85px"
              style={{ top: '-12px', left: 'calc(50% - 42px)' }}
            />

            {/* Photo Box */}
            <div className="polaroid-img-box">
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
              <div className="zoom-hint">
                <ZoomIn size={16} />
                <span>View</span>
              </div>
            </div>

            {/* Handwritten Caption Area */}
            <div className="polaroid-text-area">
              <h3 className="polaroid-title">{item.title}</h3>
              <p className="polaroid-note">"{item.caption}"</p>
              <div className="polaroid-tag-row">
                <span className="polaroid-tag">{item.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="nav-bar-footer">
        <button onClick={onBack} className="btn-nav btn-nav-back">
          <ChevronLeft size={18} />
          <span>Back to Surprise</span>
        </button>
        <button onClick={onNext} className="btn-nav btn-nav-next">
          <span>Read My Letter</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
