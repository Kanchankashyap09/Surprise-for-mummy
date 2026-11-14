import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Sparkles, Play, Pause } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);
  const noteIndexRef = useRef(0);

  // Gentle, warm, nostalgic lullaby melody notes (frequencies in Hz)
  // Canon in D / nostalgic music box chord progression
  const melody = [
    { note: 523.25, dur: 0.6 }, // C5
    { note: 659.25, dur: 0.6 }, // E5
    { note: 783.99, dur: 0.8 }, // G5
    { note: 659.25, dur: 0.5 }, // E5
    { note: 587.33, dur: 0.6 }, // D5
    { note: 698.46, dur: 0.6 }, // F5
    { note: 880.00, dur: 0.8 }, // A5
    { note: 698.46, dur: 0.5 }, // F5
    { note: 493.88, dur: 0.6 }, // B4
    { note: 587.33, dur: 0.6 }, // D5
    { note: 783.99, dur: 0.8 }, // G5
    { note: 523.25, dur: 0.9 }, // C5
    { note: 659.25, dur: 0.6 }, // E5
    { note: 783.99, dur: 0.6 }, // G5
    { note: 1046.50, dur: 1.0 }, // C6
    { note: 880.00, dur: 0.8 }, // A5
    { note: 783.99, dur: 0.7 }, // G5
    { note: 659.25, dur: 0.7 }, // E5
    { note: 587.33, dur: 0.9 }, // D5
    { note: 523.25, dur: 1.2 }  // C5
  ];

  const playNote = (freq, duration) => {
    if (!audioCtxRef.current || isMuted) return;

    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Bell / Music box harmonic synthesizer
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Soft music-box envelope: sharp soft attack, long gentle decay
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration + 0.85);

      // Subtle warm sub-overtone for cozy depth
      const overtone = ctx.createOscillator();
      const overGain = ctx.createGain();
      overtone.type = 'triangle';
      overtone.frequency.setValueAtTime(freq * 0.5, ctx.currentTime);

      overGain.gain.setValueAtTime(0.001, ctx.currentTime);
      overGain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.04);
      overGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration + 0.6);

      overtone.connect(overGain);
      overGain.connect(ctx.destination);

      overtone.start(ctx.currentTime);
      overtone.stop(ctx.currentTime + duration + 0.65);
    } catch {
      // Ignore audio glitches safely
    }
  };

  const scheduleNextNote = () => {
    const current = melody[noteIndexRef.current];
    playNote(current.note, current.dur);

    noteIndexRef.current = (noteIndexRef.current + 1) % melody.length;
    timerRef.current = setTimeout(scheduleNextNote, current.dur * 950);
  };

  const togglePlay = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
      noteIndexRef.current = 0;
      scheduleNextNote();
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          // cleanup
        }
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 900,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        padding: '8px 14px',
        borderRadius: '30px',
        boxShadow: '0 8px 24px rgba(248, 187, 208, 0.45)',
        backdropFilter: 'blur(8px)',
        border: '2px solid #F8BBD0',
        transition: 'all 0.3s ease'
      }}
    >
      <button
        onClick={togglePlay}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          padding: '4px',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 600,
          fontSize: '13px',
          color: '#D81B60'
        }}
        title={isPlaying ? "Pause soothing lullaby" : "Play soothing music for Mummy"}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#FCE4EC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#E91E63',
            animation: isPlaying ? 'spinSlow 6s linear infinite' : 'none'
          }}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
        </div>
        <span style={{ display: 'inline-block' }}>
          {isPlaying ? 'Melody Playing ♪' : 'Play Music ♫'}
        </span>
      </button>

      {isPlaying && (
        <button
          onClick={toggleMute}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: isMuted ? '#9E9E9E' : '#E91E63',
            display: 'flex',
            alignItems: 'center'
          }}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
