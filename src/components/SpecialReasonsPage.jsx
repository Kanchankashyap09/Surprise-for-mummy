import React, { useState } from 'react';
import { Heart, Sparkles, Smile, ShieldAlert, Award, Coffee, Sun, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TapeStrip, FlowerSticker, BowSticker, ButterflySticker } from './ScrapbookSticker';
import { SPECIAL_REASONS } from '../data/specialReasons';

export const SpecialReasonsPage = ({ onNext, onBack }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Heart': return <Heart size={24} color="#E91E63" fill="#E91E63" />;
      case 'ShieldHeart': return <Sparkles size={24} color="#0288D1" />;
      case 'Smile': return <Smile size={24} color="#F57F17" />;
      case 'Award': return <Award size={24} color="#8E24AA" />;
      case 'Sparkles': return <Heart size={24} color="#388E3C" />;
      case 'Sun': return <Sun size={24} color="#F57C00" />;
      default: return <Heart size={24} color="#E91E63" />;
    }
  };

  return (
    <div className="reasons-container page-fade-in">
      <FlowerSticker size={40} style={{ position: 'absolute', top: '20px', right: '35px', transform: 'rotate(15deg)' }} />
      <ButterflySticker size={38} style={{ position: 'absolute', top: '25px', left: '30px', transform: 'rotate(-8deg)' }} />

      <div className="section-header">
        <div className="badge-pill">
          <Heart size={14} color="#E91E63" fill="#E91E63" />
          <span>Chapter 3: Countless Blessings</span>
          <Sparkles size={14} color="#E91E63" />
        </div>
        <h1 className="page-heading">
          Things I Love About You ❤️
        </h1>
        <p className="page-subheading">
          There are a million reasons, but here are six of the most special ones that mean the world to me. (Tap any card to open!)
        </p>
      </div>

      {/* 6 Grid Cards */}
      <div className="reasons-grid">
        {SPECIAL_REASONS.map((reason, index) => {
          const isExpanded = expandedId === reason.id;
          return (
            <div
              key={reason.id}
              className={`reason-card ${isExpanded ? 'reason-card-active' : ''}`}
              style={{
                backgroundColor: reason.bgColor,
                border: `2px solid ${reason.borderColor}`,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => toggleCard(reason.id)}
            >
              <TapeStrip
                color={reason.borderColor}
                angle={index % 2 === 0 ? -2 : 2}
                width="70px"
                style={{ top: '-10px', left: '20px' }}
              />

              <div className="reason-top-row">
                <span className="reason-badge" style={{ color: reason.accentColor }}>
                  {reason.badge}
                </span>
                <div className="reason-icon-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
                  {getIcon(reason.icon)}
                </div>
              </div>

              <h3 className="reason-title" style={{ color: '#263238' }}>
                {reason.title}
              </h3>

              <p className="reason-desc" style={{ color: '#546E7A' }}>
                {reason.shortDesc}
              </p>

              {/* Expandable heartfelt detail */}
              <div
                className={`reason-detail-box ${isExpanded ? 'expanded' : ''}`}
                style={{ borderTop: `1px dashed ${reason.borderColor}` }}
              >
                <p className="reason-full-text">
                  "{reason.detail}"
                </p>
              </div>

              <div className="reason-tap-more" style={{ color: reason.accentColor }}>
                <span>{isExpanded ? 'Show less ▴' : 'Read more ▾'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="nav-bar-footer">
        <button onClick={onBack} className="btn-nav btn-nav-back">
          <ChevronLeft size={18} />
          <span>My Letter</span>
        </button>
        <button onClick={onNext} className="btn-nav btn-nav-next">
          <span>The Final Surprise</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
