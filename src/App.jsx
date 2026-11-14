import React, { useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { FunnyNoPage } from './components/FunnyNoPage';
import { MemoriesPage } from './components/MemoriesPage';
import { LetterPage } from './components/LetterPage';
import { SpecialReasonsPage } from './components/SpecialReasonsPage';
import { FinalSurprisePage } from './components/FinalSurprisePage';
import { LightboxModal } from './components/LightboxModal';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingParticles } from './components/FloatingParticles';
import { MEMORIES } from './data/memoriesData';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Active photo for lightbox
  const selectedPhoto = lightboxIndex !== null ? MEMORIES[lightboxIndex] : null;

  const handleOpenLightbox = (photo, index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex < MEMORIES.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  // Stepper pages
  const flowPages = ['memories', 'letter', 'reasons', 'final'];
  const currentStep = flowPages.indexOf(currentPage) + 1;

  const stepLabels = [
    { key: 'memories', label: 'Memories 📷' },
    { key: 'letter', label: 'Letter 💌' },
    { key: 'reasons', label: 'Why You\'re Special 💖' },
    { key: 'final', label: 'Surprise 🎉' }
  ];

  return (
    <div className="app-container">
      {/* Background Floating Ambient Particles */}
      <FloatingParticles />

      {/* Floating Top Navigation Indicator (visible on main experience pages) */}
      {currentStep > 0 && (
        <header className="top-stepper-bar">
          <div className="stepper-inner">
            <button
              onClick={() => setCurrentPage('welcome')}
              className="stepper-home-btn"
              title="Return to Welcome"
            >
              🌸 Home
            </button>

            <div className="stepper-dots">
              {stepLabels.map((step, idx) => (
                <button
                  key={step.key}
                  onClick={() => setCurrentPage(step.key)}
                  className={`step-pill ${currentPage === step.key ? 'step-pill-active' : ''}`}
                >
                  <span className="step-num">{idx + 1}</span>
                  <span className="step-label">{step.label}</span>
                </button>
              ))}
            </div>
          </div>
        </header>
      )}

      {/* Main Page Content */}
      <main className="content-viewport">
        {currentPage === 'welcome' && (
          <WelcomePage
            onYes={() => setCurrentPage('memories')}
            onNo={() => setCurrentPage('no')}
            momPhoto={MEMORIES[0]}
          />
        )}

        {currentPage === 'no' && (
          <FunnyNoPage
            onBack={() => setCurrentPage('welcome')}
          />
        )}

        {currentPage === 'memories' && (
          <MemoriesPage
            memories={MEMORIES}
            onPhotoClick={handleOpenLightbox}
            onNext={() => setCurrentPage('letter')}
            onBack={() => setCurrentPage('welcome')}
          />
        )}

        {currentPage === 'letter' && (
          <LetterPage
            onNext={() => setCurrentPage('reasons')}
            onBack={() => setCurrentPage('memories')}
          />
        )}

        {currentPage === 'reasons' && (
          <SpecialReasonsPage
            onNext={() => setCurrentPage('final')}
            onBack={() => setCurrentPage('letter')}
          />
        )}

        {currentPage === 'final' && (
          <FinalSurprisePage
            memories={MEMORIES}
            onPhotoClick={handleOpenLightbox}
            onRestart={() => setCurrentPage('welcome')}
            onBack={() => setCurrentPage('reasons')}
          />
        )}
      </main>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < MEMORIES.length - 1}
        />
      )}

      {/* Ambient Music Player */}
      <MusicPlayer />
    </div>
  );
}
