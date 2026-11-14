import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { TapeStrip, FlowerSticker } from './ScrapbookSticker';

export const LightboxModal = ({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(50, 20, 35, 0.75)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '560px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '20px 20px 24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3), 0 0 40px rgba(248,187,208,0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        <TapeStrip color={photo.tapeColor || '#F8BBD0'} angle={-1} width="110px" style={{ top: '-12px' }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#FCE4EC',
            border: 'none',
            color: '#C2185B',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 20
          }}
          title="Close photo"
        >
          <X size={20} />
        </button>

        {/* Image Container */}
        <div
          style={{
            width: '100%',
            height: '380px',
            maxHeight: '52vh',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#F8BBD0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={photo.src}
            alt={photo.title || 'Mummy memory'}
            onError={(e) => {
              if (photo.fallbackSrc && e.target.src !== photo.fallbackSrc) {
                e.target.src = photo.fallbackSrc;
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: '#FFF'
            }}
          />
        </div>

        {/* Details & Caption */}
        <div style={{ marginTop: '16px', textAlign: 'center', width: '100%' }}>
          {photo.tag && (
            <span
              style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: 700,
                color: '#D81B60',
                backgroundColor: '#FCE4EC',
                padding: '4px 12px',
                borderRadius: '20px',
                marginBottom: '8px'
              }}
            >
              {photo.tag}
            </span>
          )}
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '22px',
              color: '#37474F',
              margin: '4px 0 8px'
            }}
          >
            {photo.title}
          </h3>
          <p
            style={{
              fontFamily: 'Caveat, cursive',
              fontSize: '20px',
              color: '#546E7A',
              margin: '0',
              lineHeight: 1.3
            }}
          >
            "{photo.caption}"
          </p>
        </div>

        {/* Navigation arrows */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '16px'
          }}
        >
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '25px',
              border: '1.5px solid #F8BBD0',
              backgroundColor: hasPrev ? '#FFF' : '#F5F5F5',
              color: hasPrev ? '#D81B60' : '#BDBDBD',
              cursor: hasPrev ? 'pointer' : 'not-allowed',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >
            <ChevronLeft size={18} /> Previous
          </button>

          <button
            onClick={onNext}
            disabled={!hasNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '25px',
              border: '1.5px solid #F8BBD0',
              backgroundColor: hasNext ? '#FCE4EC' : '#F5F5F5',
              color: hasNext ? '#D81B60' : '#BDBDBD',
              cursor: hasNext ? 'pointer' : 'not-allowed',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
