/**
 * A BEAUTIFUL SURPRISE WEBSITE FOR MY MOM ❤️
 * Pure Vanilla JavaScript - No frameworks, No dependencies, 100% Static
 */

// ========================================================
// 1. CENTRALIZED IMAGE LIST USING ACTUAL USED PICS
// ========================================================
const MUMMY_MEMORIES = [
  {
    id: 1,
    src: 'usedpics/WhatsApp Image 2026-11-13 a1.22.15 AM.jpeg',
    title: 'Aapki Pyari Muskaan ✨',
    caption: 'Mummy, aapki muskaan dekh kar mera poora din ban jata hai.',
    tag: 'Favorite Moment 🌸',
    tapeColor: '#F8BBD0',
    rotation: -3
  },
  {
    id: 2,
    src: 'usedpics/WhatsApp Image 2026-11-13 at 11.22.13 AM.jpeg',
    title: 'Sabse Pyaara Saath 💕',
    caption: 'Aapke paas baithkar baat karna duniya ka sabse bada sukoon hai.',
    tag: 'Pure Love 🌷',
    tapeColor: '#BDE0FE',
    rotation: 2.5
  },
  {
    id: 3,
    src: 'usedpics/WhatsApp Image 202611-13 at 11.22.14 AM.jpeg',
    title: 'Anmol Yaadein 🌟',
    caption: 'Chhoti-chhoti baatein aur aapka wo be-inteha pyaar... hamesha yaad rehta hai.',
    tag: 'Cherished Times 🎀',
    tapeColor: '#EDE7F6',
    rotation: -2
  },
  {
    id: 4,
    src: 'usedpics/WhatsApp Image 2026-11-13 at 122.15 AM.jpeg',
    title: 'Meri Sabse Badi Taqat 🛡️',
    caption: 'Chahe koi bhi mushkil ho, aapka haath mere sar par ho toh sab theek ho jata hai.',
    tag: 'My Strength 💖',
    tapeColor: '#F8BBD0',
    rotation: 3
  },
  {
    id: 5,
    src: 'usedpics/WhatsApp Image 2026--13 at 11.22.13 AM.jpeg',
    title: 'Aapki Mamta Ka Aanchal 🦋',
    caption: 'Mummy ka pyaar bina kisi shart ke hota hai, aur ye sach mein ek vardaan hai.',
    tag: 'Blessing 🕊️',
    tapeColor: '#DFF3FC',
    rotation: -2.5
  },
  {
    id: 6,
    src: 'usedpics/WhatsApp Image 206-11-13 at 11.22.14 AM.jpeg',
    title: 'Meri Best Friend ☕',
    caption: 'Aapse kuch bhi chhupa nahi rehta, aap meri bina bole har baat samajh leti ho.',
    tag: 'Forever Together 💫',
    tapeColor: '#FFF9C4',
    rotation: 2
  },
  {
    id: 7,
    src: 'usedpics/WhatsApp Ime 2026-11-13 at 11.22.14 AM.jpeg',
    title: 'Meri Guiding Light 🌸',
    caption: 'Aapne hamesha achhe sanskaar aur sahi raasta dikhaya hai. Thank you Mummy!',
    tag: 'My Hero 👑',
    tapeColor: '#F8BBD0',
    rotation: -1.5
  }
];

// ========================================================
// 2. THE 6 SPECIAL REASONS IN HINGLISH
// ========================================================
const SPECIAL_REASONS = [
  {
    id: 1,
    title: 'Aapka Unconditional Love',
    icon: '💖',
    badge: 'Reason #1',
    bgColor: '#FFF0F5',
    borderColor: '#F8BBD0',
    accentColor: '#E91E63',
    summary: 'Aapka pyaar hamesha bina kisi shart aur bina kisi matlab ke rehta hai.',
    detail: 'Mummy, chahe main kitni bhi galtiyan karun ya gussa ho jaun, aapka pyaar mere liye kabhi kam nahi hota. Aap hamesha pehle mere baare mein sochti ho.'
  },
  {
    id: 2,
    title: 'Aapka Endless Support',
    icon: '🛡️',
    badge: 'Reason #2',
    bgColor: '#F0F8FF',
    borderColor: '#BDE0FE',
    accentColor: '#0288D1',
    summary: 'Jab poori duniya doubt karti hai, tab bhi aap mere saath khadi rehti ho.',
    detail: 'Aapne hamesha meri choti-badi khushiyon aur sapno ko support kiya hai. Aapka vishwas hi meri sabse badi himmat hai.'
  },
  {
    id: 3,
    title: 'Aapki Beautiful Smile',
    icon: '✨',
    badge: 'Reason #3',
    bgColor: '#FFFDE7',
    borderColor: '#FFF59D',
    accentColor: '#F57F17',
    summary: 'Aapki muskurahat ghar ke har kone ko roshan kar deti hai.',
    detail: 'Jab aap khilkhilakar hasti ho, toh ghar ka mahol hi badal jata hai. Aapki smile meri favourite cheez hai!'
  },
  {
    id: 4,
    title: 'Aapka Patience Aur Strength',
    icon: '🌸',
    badge: 'Reason #4',
    bgColor: '#F3E5F5',
    borderColor: '#E1BEE7',
    accentColor: '#8E24AA',
    summary: 'Har mushkil waqt mein calm rehna aur sabko sambhalna aapki sabse badi shakti hai.',
    detail: 'Aapne kitne sacrifices kiye hain humare liye bina kisi shikayat ke. Aapki himmat aur sabr dekh kar mujhe hamesha garv hota hai.'
  },
  {
    id: 5,
    title: 'Aapka Har Situation Mein Saath Dena',
    icon: '☕',
    badge: 'Reason #5',
    bgColor: '#E8F5E9',
    borderColor: '#C8E6C9',
    accentColor: '#388E3C',
    summary: 'Chahe din achha ho ya bura, aap hamesha ek safe haven ban kar rehti ho.',
    detail: 'Khana khaya ki nahi, tabiyat kaisi hai, sab theek hai na... ye choti-choti fikr hi toh aapka sachha pyaar hai jo koi aur nahi kar sakta.'
  },
  {
    id: 6,
    title: 'Aapki Wajah Se Meri Life Itni Beautiful Hona',
    icon: '🌈',
    badge: 'Reason #6',
    bgColor: '#FFF3E0',
    borderColor: '#FFE0B2',
    accentColor: '#F57C00',
    summary: 'Aap ho toh ghar "ghar" banta hai, warna sab adhura sa lagta hai.',
    detail: 'Meri zindagi ki har achhi yaad mein aapka hath hai. Aapki maujoodgi hi mere liye sabse bada aashirwad hai.'
  }
];

// ========================================================
// 3. PAGE NAVIGATION & STATE
// ========================================================
let currentPageId = 'page-welcome';
let currentLightboxIndex = 0;

function goToPage(targetPageId) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => sec.classList.remove('active'));

  const targetSection = document.getElementById(targetPageId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentPageId = targetPageId;
  }

  // Handle Stepper Visibility
  const stepper = document.getElementById('top-stepper');
  if (targetPageId === 'page-welcome' || targetPageId === 'page-funny-no') {
    stepper.classList.add('hidden');
  } else {
    stepper.classList.remove('hidden');
  }

  // Update active pill in stepper
  const pills = document.querySelectorAll('.step-pill');
  pills.forEach(pill => {
    if (pill.getAttribute('data-target') === targetPageId) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleWelcomeYes() {
  fireConfettiBurst();
  setTimeout(() => {
    goToPage('page-memories');
  }, 400);
}

function restartJourney() {
  goToPage('page-welcome');
}

// ========================================================
// 4. RENDERING DYNAMIC SECTIONS
// ========================================================
function renderWelcomeMomPhoto() {
  const welcomeImg = document.getElementById('welcome-mom-img');
  if (welcomeImg && MUMMY_MEMORIES.length > 0) {
    welcomeImg.src = MUMMY_MEMORIES[0].src;
  }
}

function renderMemoriesGrid() {
  const container = document.getElementById('memories-grid-container');
  if (!container) return;

  container.innerHTML = '';

  MUMMY_MEMORIES.forEach((memory, index) => {
    const card = document.createElement('div');
    card.className = 'scrap-polaroid-item';
    card.style.transform = `rotate(${memory.rotation}deg)`;
    card.title = 'Photo badi dekhne ke liye click karein!';

    card.innerHTML = `
      <div class="washi-tape tape-center-top" style="background-color: ${memory.tapeColor};"></div>
      <div class="polaroid-img-box">
        <img src="${memory.src}" alt="${memory.title}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><rect width=%22300%22 height=%22300%22 fill=%22%23FCE4EC%22/><text x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 text-anchor=%22middle%22 fill=%22%23D81B60%22>Mummy Ki Photo 🌸</text></svg>';">
        <div class="polaroid-zoom-pill">🔍 Zoom</div>
      </div>
      <div class="polaroid-caption-block">
        <h3 class="polaroid-caption-title">${memory.title}</h3>
        <p class="polaroid-caption-text">"${memory.caption}"</p>
        <span class="polaroid-tag-badge">${memory.tag}</span>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    container.appendChild(card);
  });
}

function renderSpecialReasons() {
  const container = document.getElementById('reasons-grid-container');
  if (!container) return;

  container.innerHTML = '';

  SPECIAL_REASONS.forEach((reason, index) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.style.backgroundColor = reason.bgColor;
    card.style.border = `2px solid ${reason.borderColor}`;

    card.innerHTML = `
      <div class="washi-tape" style="top: -10px; left: 20px; width: 75px; background-color: ${reason.borderColor}; transform: rotate(${index % 2 === 0 ? -2 : 2}deg);"></div>
      <div class="reason-top-row">
        <span class="reason-badge" style="color: ${reason.accentColor}">${reason.badge}</span>
        <div class="reason-icon-bubble">${reason.icon}</div>
      </div>
      <h3 class="reason-card-title">${reason.title}</h3>
      <p class="reason-card-summary">${reason.summary}</p>
      
      <div class="reason-expand-box" style="border-top: 1px dashed ${reason.borderColor}">
        <p class="reason-hinglish-note">"${reason.detail}"</p>
      </div>

      <div class="reason-toggle-prompt" style="color: ${reason.accentColor}">
        <span class="toggle-text">Aur Padhein ▾</span>
      </div>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
      const toggleText = card.querySelector('.toggle-text');
      if (card.classList.contains('expanded')) {
        toggleText.textContent = 'Kam Karein ▴';
      } else {
        toggleText.textContent = 'Aur Padhein ▾';
      }
    });

    container.appendChild(card);
  });
}

function renderFinalCollage() {
  const container = document.getElementById('final-collage-container');
  if (!container) return;

  container.innerHTML = '';

  const angles = [-3, 2.5, -2, 3, -1.5, 2, -2.5];

  MUMMY_MEMORIES.forEach((memory, index) => {
    const angle = angles[index % angles.length];
    const item = document.createElement('div');
    item.className = 'collage-polaroid-item';
    item.style.transform = `rotate(${angle}deg)`;

    item.innerHTML = `
      <div class="washi-tape tape-center-top" style="width: 75px; background-color: ${memory.tapeColor}; transform: rotate(${index % 2 === 0 ? -2 : 2}deg);"></div>
      <div class="collage-photo-frame">
        <img src="${memory.src}" alt="${memory.title}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><rect width=%22300%22 height=%22300%22 fill=%22%23FCE4EC%22/><text x=%2250%25%22 y=%2250%25%22 font-size=%2222%22 text-anchor=%22middle%22 fill=%22%23D81B60%22>Mummy ❤️</text></svg>';">
      </div>
      <p class="collage-photo-caption">${memory.title}</p>
    `;

    item.addEventListener('click', () => openLightbox(index));
    container.appendChild(item);
  });
}

// ========================================================
// 5. LETTER ENVELOPE OPENING ANIMATION
// ========================================================
function openLetter() {
  const envelope = document.getElementById('envelope-cover');
  const letter = document.getElementById('letter-sheet');

  fireConfettiBurst();

  envelope.classList.add('hidden');
  letter.classList.remove('hidden');
}

// ========================================================
// 6. LIGHTBOX MODAL WITH KEYBOARD NAVIGATION
// ========================================================
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();

  const lightbox = document.getElementById('photo-lightbox');
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event && event.target && event.target.closest('.lightbox-modal') && !event.target.classList.contains('lightbox-close-btn')) {
    return;
  }
  const lightbox = document.getElementById('photo-lightbox');
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const memory = MUMMY_MEMORIES[currentLightboxIndex];
  if (!memory) return;

  const img = document.getElementById('lightbox-img');
  const tag = document.getElementById('lightbox-tag');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');
  const tape = document.getElementById('lightbox-tape');

  img.src = memory.src;
  tag.textContent = memory.tag;
  title.textContent = memory.title;
  caption.textContent = `"${memory.caption}"`;
  tape.style.backgroundColor = memory.tapeColor || '#F8BBD0';

  // Toggle prev/next button states
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  prevBtn.style.opacity = currentLightboxIndex > 0 ? '1' : '0.4';
  prevBtn.style.pointerEvents = currentLightboxIndex > 0 ? 'auto' : 'none';

  nextBtn.style.opacity = currentLightboxIndex < MUMMY_MEMORIES.length - 1 ? '1' : '0.4';
  nextBtn.style.pointerEvents = currentLightboxIndex < MUMMY_MEMORIES.length - 1 ? 'auto' : 'none';
}

function lightboxPrev() {
  if (currentLightboxIndex > 0) {
    currentLightboxIndex--;
    updateLightboxContent();
  }
}

function lightboxNext() {
  if (currentLightboxIndex < MUMMY_MEMORIES.length - 1) {
    currentLightboxIndex++;
    updateLightboxContent();
  }
}

// Keyboard controls (Escape, ArrowLeft, ArrowRight)
window.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('photo-lightbox');
  if (!lightbox.classList.contains('hidden')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev();
    if (e.key === 'ArrowRight') lightboxNext();
  }
});

// ========================================================
// 7. SECRET SURPRISE MODAL
// ========================================================
function openSecretModal() {
  fireConfettiBurst();
  const secretModal = document.getElementById('secret-modal');
  secretModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSecretModal(event) {
  if (event && event.target && event.target.closest('.secret-modal-content') && !event.target.classList.contains('lightbox-close-btn') && !event.target.classList.contains('btn-yes')) {
    return;
  }
  const secretModal = document.getElementById('secret-modal');
  secretModal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ========================================================
// 8. SOOTHING LULLABY AUDIO SYNTHESIZER (WEB AUDIO API)
// ========================================================
let audioCtx = null;
let isMusicPlaying = false;
let isMuted = false;
let melodyTimer = null;
let currentNoteIndex = 0;

// Nostalgic, peaceful music-box frequencies (Canon in D / Pentatonic Lullaby)
const LULLABY_NOTES = [
  { freq: 523.25, dur: 0.65 }, // C5
  { freq: 659.25, dur: 0.65 }, // E5
  { freq: 783.99, dur: 0.85 }, // G5
  { freq: 659.25, dur: 0.55 }, // E5
  { freq: 587.33, dur: 0.65 }, // D5
  { freq: 698.46, dur: 0.65 }, // F5
  { freq: 880.00, dur: 0.85 }, // A5
  { freq: 698.46, dur: 0.55 }, // F5
  { freq: 493.88, dur: 0.65 }, // B4
  { freq: 587.33, dur: 0.65 }, // D5
  { freq: 783.99, dur: 0.85 }, // G5
  { freq: 523.25, dur: 0.95 }, // C5
  { freq: 659.25, dur: 0.65 }, // E5
  { freq: 783.99, dur: 0.65 }, // G5
  { freq: 1046.5, dur: 1.05 }, // C6
  { freq: 880.00, dur: 0.85 }, // A5
  { freq: 783.99, dur: 0.75 }, // G5
  { freq: 659.25, dur: 0.75 }, // E5
  { freq: 587.33, dur: 0.95 }, // D5
  { freq: 523.25, dur: 1.30 }  // C5
];

function playLullabyTone(freq, dur) {
  if (!audioCtx || isMuted) return;

  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Warm bell / chime envelope
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur + 0.8);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + dur + 0.85);

    // Cozy sub-overtone for music-box sparkle
    const over = audioCtx.createOscillator();
    const overGain = audioCtx.createGain();
    over.type = 'triangle';
    over.frequency.setValueAtTime(freq * 0.5, audioCtx.currentTime);

    overGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    overGain.gain.exponentialRampToValueAtTime(0.03, audioCtx.currentTime + 0.04);
    overGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur + 0.6);

    over.connect(overGain);
    overGain.connect(audioCtx.destination);

    over.start(audioCtx.currentTime);
    over.stop(audioCtx.currentTime + dur + 0.65);
  } catch {
    // Ignore audio glitches safely
  }
}

function scheduleNextTone() {
  if (!isMusicPlaying) return;

  const current = LULLABY_NOTES[currentNoteIndex];
  playLullabyTone(current.freq, current.dur);

  currentNoteIndex = (currentNoteIndex + 1) % LULLABY_NOTES.length;
  melodyTimer = setTimeout(scheduleNextTone, current.dur * 960);
}

function toggleMusic() {
  const disc = document.getElementById('music-disc');
  const label = document.getElementById('music-label');
  const muteBtn = document.getElementById('music-mute');

  if (!isMusicPlaying) {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtxClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isMusicPlaying = true;
    currentNoteIndex = 0;
    scheduleNextTone();

    disc.classList.add('spinning');
    label.textContent = 'Playing For Mummy ♫';
    muteBtn.classList.remove('hidden');
  } else {
    isMusicPlaying = false;
    if (melodyTimer) clearTimeout(melodyTimer);

    disc.classList.remove('spinning');
    label.textContent = 'Mummy\'s Melody ♪';
    muteBtn.classList.add('hidden');
  }
}

function toggleMute() {
  isMuted = !isMuted;
  const muteBtn = document.getElementById('music-mute');
  muteBtn.textContent = isMuted ? '🔇' : '🔊';
}

// ========================================================
// 9. PURE VANILLA CANVAS CONFETTI (ZERO DEPENDENCIES)
// ========================================================
const confettiCanvas = document.getElementById('confetti-canvas');
const ctx = confettiCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimationId = null;

function resizeConfettiCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfettiCanvas);
resizeConfettiCanvas();

const CONFETTI_COLORS = ['#F8BBD0', '#FF80AB', '#BDE0FE', '#EDE7F6', '#FFF59D', '#FF4081', '#0288D1'];

function fireConfettiBurst() {
  const count = 90;
  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: window.innerWidth * (0.35 + Math.random() * 0.3),
      y: window.innerHeight * 0.55,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.9) * 18,
      size: Math.random() * 8 + 6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 10,
      shape: Math.random() > 0.4 ? 'heart' : 'rect',
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01
    });
  }

  if (!confettiAnimationId) {
    animateConfetti();
  }
}

function triggerCelebrationConfetti() {
  // Triple burst
  fireConfettiBurst();
  setTimeout(fireConfettiBurst, 250);
  setTimeout(fireConfettiBurst, 500);
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.38; // gravity
    p.vx *= 0.98; // air drag
    p.rotation += p.vRotation;
    p.alpha -= p.decay;

    if (p.alpha <= 0 || p.y > confettiCanvas.height + 20) {
      confettiParticles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;

    if (p.shape === 'heart') {
      ctx.beginPath();
      const s = p.size * 0.5;
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s, -s, -s * 1.5, s * 0.8, 0, s * 1.5);
      ctx.bezierCurveTo(s * 1.5, s * 0.8, s, -s, 0, s * 0.3);
      ctx.fill();
    } else {
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
    }

    ctx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimationId = null;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

// ========================================================
// 10. AMBIENT FLOATING HEARTS & PETALS BACKGROUND
// ========================================================
function initAmbientParticles() {
  const container = document.getElementById('ambient-particles');
  if (!container) return;

  const characters = ['🌸', '💖', '✨', '🌷', '🦋', '⭐', '🤍', '🎀'];
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const span = document.createElement('span');
    span.className = 'ambient-particle';
    span.textContent = characters[i % characters.length];
    span.style.left = `${Math.random() * 95 + 2}%`;
    span.style.fontSize = `${Math.random() * 14 + 14}px`;
    span.style.animationDuration = `${Math.random() * 12 + 10}s`;
    span.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(span);
  }
}

// ========================================================
// 11. INITIALIZATION ON DOM READY
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderWelcomeMomPhoto();
  renderMemoriesGrid();
  renderSpecialReasons();
  renderFinalCollage();
  initAmbientParticles();
});
