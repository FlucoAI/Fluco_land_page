import React, { useState, useEffect } from 'react';

const MOCKUP_IMAGES = [
  "/screenshot1.png",
  "/screenshot2.png",
  "/screenshot3.png",
  "/screenshot4.png",
  "/screenshot5.png"
];

function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCKUP_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] mx-auto animate-[fadeUp_.8s_.3s_ease_both] lg:mt-0 mt-[-20px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(74,144,196,.15)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      {MOCKUP_IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`App Screen ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_24px_60px_rgba(10,25,49,.22)] transition-opacity duration-1000 z-10 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen pt-[72px] px-[5%] flex items-center">
      <div className="max-w-[1320px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center py-[60px] text-center lg:text-left">
        <div>
          <div className="inline-flex items-center gap-2 text-[.7rem] font-bold tracking-[.12em] uppercase text-[var(--color-accent)] mb-[22px] animate-[fadeUp_.6s_.1s_ease_both]">
            <span className="w-[6px] h-[6px] rounded-full bg-[var(--color-accent)] animate-pulse-dot"></span>
            AI-Powered LinkedIn Growth
          </div>
          <h1 className="font-serif font-black text-[clamp(2.6rem,4.5vw,4rem)] leading-[1.06] tracking-[-.03em] text-[var(--color-navy)] mb-[22px] animate-[fadeUp_.7s_.15s_ease_both]">
            Dominate LinkedIn with <em className="italic text-[var(--color-accent)]">AI-Powered</em> Precision.
          </h1>
          <p className="text-[1.05rem] leading-[1.75] text-[var(--color-muted)] max-w-[480px] font-light mb-[38px] mx-auto lg:mx-0 animate-[fadeUp_.7s_.25s_ease_both]">
            Stop wasting hours on manual comments. Fluco analyzes your favourite influencers and generates expert-level interactions in your unique voice.
          </p>

          <div className="flex gap-[14px] flex-wrap mb-[28px] justify-center lg:justify-start animate-[fadeUp_.7s_.35s_ease_both]">
            <a
              href="/#pricing"
              className="inline-flex items-center gap-2 px-[34px] py-[15px] rounded-[8px] font-sans text-[.92rem] font-bold tracking-[.05em] uppercase cursor-pointer transition-all duration-250 no-underline border-none bg-[var(--color-navy)] text-[var(--color-white)] hover:bg-[var(--color-deep-sea)] hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(10,25,49,.28)]"
            >
              Get Started for Free
            </a>
          </div>

          <a href="#" className="inline-flex no-underline animate-[fadeUp_.7s_.42s_ease_both] group">
            <div className="flex items-center gap-[10px] bg-[var(--color-navy)] border-[1.5px] border-[rgba(179,207,229,.22)] rounded-[10px] py-[10px] pr-[20px] pl-[14px] transition-all duration-250 group-hover:border-[rgba(179,207,229,.5)] group-hover:shadow-[0_8px_24px_rgba(10,25,49,.22)] group-hover:-translate-y-[2px]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 2.5L13.5 11L3 19.5V2.5Z" fill="#4FC3F7" />
                <path d="M3 2.5L13.5 11L8.5 16L3 19.5V2.5Z" fill="#29B6F6" opacity="0.7" />
                <path d="M3 2.5L8.5 6L13.5 11L3 2.5Z" fill="#81D4FA" opacity="0.8" />
                <path d="M13.5 11L19 7.5L16 11L19 14.5L13.5 11Z" fill="#F44336" />
                <path d="M3 19.5L13.5 11L8.5 16L3 19.5Z" fill="#4CAF50" />
                <path d="M3 2.5L8.5 6L13.5 11L3 2.5Z" fill="#FFD740" />
              </svg>
              <div className="flex flex-col leading-[1.15] text-left">
                <span className="text-[.56rem] font-medium tracking-[.1em] text-[rgba(255,255,255,.6)]">GET IT ON</span>
                <span className="text-[.95rem] font-bold text-white tracking-[-.01em]">Google Play</span>
              </div>
            </div>
          </a>

          <div className="flex gap-[36px] pt-[32px] mt-[32px] border-t border-[rgba(179,207,229,.35)] justify-center lg:justify-start animate-[fadeUp_.7s_.5s_ease_both]">
            <div>
              <div className="font-serif text-[1.9rem] font-bold text-[var(--color-navy)]">10×</div>
              <div className="text-[.75rem] text-[#7a9bbb] font-medium tracking-[.03em] mt-[3px]">Faster Engagement</div>
            </div>
            <div>
              <div className="font-serif text-[1.9rem] font-bold text-[var(--color-navy)]">98%</div>
              <div className="text-[.75rem] text-[#7a9bbb] font-medium tracking-[.03em] mt-[3px]">Voice Accuracy</div>
            </div>
            <div>
              <div className="font-serif text-[1.9rem] font-bold text-[var(--color-navy)]">24/7</div>
              <div className="text-[.75rem] text-[#7a9bbb] font-medium tracking-[.03em] mt-[3px]">Pro Support</div>
            </div>
          </div>
        </div>

        <HeroSlideshow />
      </div>
    </div>
  );
}
