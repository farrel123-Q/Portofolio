import { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function HeroSection() {
  const characterRef = useRef<HTMLImageElement>(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX = (clientX / innerWidth - 0.5) * 2;
      mouseY = (clientY / innerHeight - 0.5) * 2;
    };

    const animateParallax = () => {
      currentX += (mouseX * 14 - currentX) * 0.08;
      currentY += (mouseY * 8 - currentY) * 0.08;

      if (characterRef.current) {
        const scale = 1 + Math.abs(currentX) * 0.002;
        characterRef.current.style.transform = `translate3d(${currentX.toFixed(
          2
        )}px, ${currentY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
      }
      rafId = requestAnimationFrame(animateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main
      id="hero"
      className="min-h-[100svh] grid place-items-center relative overflow-hidden pt-[80px]"
    >
      {/* 1. Ambient Spotlight (z-0) */}
      <div
        aria-hidden="true"
        className="hero-spotlight absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] aspect-square rounded-full pointer-events-none z-0"
      />

      {/* 2. Massive Split Wordmark Layer (z-10) */}
      <div
        aria-hidden="true"
        className="absolute top-[38%] md:top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1360px] flex justify-center items-center gap-[16vw] md:gap-[clamp(140px,18vw,320px)] z-10 pointer-events-none select-none"
      >
        <div className="display-title animate-word-left text-right text-[19vw] md:text-[clamp(86px,17vw,240px)] text-white/95 tracking-[0.03em] leading-[0.85] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          PORT
        </div>
        <div className="display-title animate-word-right text-left text-[19vw] md:text-[clamp(86px,17vw,240px)] text-white/95 tracking-[0.03em] leading-[0.85] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          FOLIO
        </div>
      </div>

      {/* Screen-reader accessible heading */}
      <h1 className="sr-only">Farrel Ahmad Faruq — Portfolio</h1>

      {/* 3. Foreground 3D Character Cutout (z-20) */}
      <div className="relative z-20 flex justify-center items-end h-full w-full pointer-events-auto">
        {!imgFailed ? (
          <img
            ref={characterRef}
            src={PORTFOLIO_DATA.images.heroCharacter}
            alt="Farrel 3D Character standing in middle of PORTFOLIO title"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="hero-character-shadow h-[52vh] md:h-[clamp(380px,68vh,660px)] max-w-[90vw] object-contain mb-[70px] md:mb-0 transition-transform duration-150 ease-out will-change-transform select-none"
          />
        ) : (
          <div className="mb-20 md:mb-8 w-[240px] h-[360px] rounded-xl glass-panel flex flex-col items-center justify-center text-center p-6">
            <span className="display-title text-5xl text-[#4db8ff]">F.</span>
            <span className="wide-label mt-3">3D Character Stage</span>
          </div>
        )}
      </div>

      {/* 4. Flanking Role Taglines (z-30) */}
      <div className="hidden md:block absolute top-[58%] left-[5vw] -translate-y-1/2 z-30 px-[18px] py-[10px] bg-[#0b1d26]/65 backdrop-blur-md border border-white/12 rounded">
        <span className="wide-label whitespace-nowrap">
          {PORTFOLIO_DATA.brand.roleLeft}
        </span>
      </div>
      <div className="hidden md:block absolute top-[58%] right-[5vw] -translate-y-1/2 z-30 px-[18px] py-[10px] bg-[#0b1d26]/65 backdrop-blur-md border border-white/12 rounded">
        <span className="wide-label whitespace-nowrap">
          {PORTFOLIO_DATA.brand.roleRight}
        </span>
      </div>

      {/* Mobile Flanking Taglines */}
      <div className="md:hidden absolute bottom-[14vh] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 w-full px-4">
        <div className="px-4 py-1.5 bg-[#0b1d26]/75 backdrop-blur-md border border-white/12 rounded">
          <span className="wide-label text-[10px]">
            {PORTFOLIO_DATA.brand.roleLeft}
          </span>
        </div>
        <div className="px-4 py-1.5 bg-[#0b1d26]/75 backdrop-blur-md border border-white/12 rounded">
          <span className="wide-label text-[10px]">
            {PORTFOLIO_DATA.brand.roleRight}
          </span>
        </div>
      </div>

      {/* 5. Bottom Action Bar (z-40) */}
      <div className="absolute bottom-[4vh] left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-4 flex-wrap px-4 w-full">
        <a href="#contents" className="btn-primary px-[26px] py-[13px]">
          Explore Portfolio ↓
        </a>
        <a href="#contact" className="btn-ghost px-[26px] py-[13px]">
          Get in Touch
        </a>
      </div>
    </main>
  );
}
