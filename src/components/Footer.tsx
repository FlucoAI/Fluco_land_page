import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, AtSign, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-[rgba(255,255,255,.5)] pt-[64px] px-[5%] pb-[36px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-[48px] pb-[48px] border-b border-[rgba(179,207,229,.1)] mb-[32px]">
        <div>
          <Link to="/" className="flex items-center no-underline">
            <span className="font-serif font-bold text-xl text-[var(--color-white)]">Fluco</span>
          </Link>
          <p className="text-[.86rem] leading-[1.7] mt-[14px] max-w-[280px] font-light">
            Sophisticated AI engagement tools for the professional who values their time. Built for LinkedIn leaders.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-[.7rem] font-bold tracking-[.12em] uppercase text-[rgba(255,255,255,.3)] mb-[18px]">
            Legal
          </div>
          <Link to="/privacy" className="block text-[.86rem] text-[rgba(255,255,255,.5)] no-underline mb-[10px] transition-colors duration-200 hover:text-[var(--color-arctic)]">Privacy Policy</Link>
          <Link to="/terms" className="block text-[.86rem] text-[rgba(255,255,255,.5)] no-underline mb-[10px] transition-colors duration-200 hover:text-[var(--color-arctic)]">Terms of Service</Link>
        </div>
        <div className="flex flex-col">
          <div className="text-[.7rem] font-bold tracking-[.12em] uppercase text-[rgba(255,255,255,.3)] mb-[18px]">
            Social
          </div>
          <a href="https://www.linkedin.com/in/fluco-ai-9526923b7/" target="_blank" rel="noopener noreferrer" className="block text-[.86rem] text-[rgba(255,255,255,.5)] no-underline mb-[10px] transition-colors duration-200 hover:text-[var(--color-arctic)]">LinkedIn</a>
          <a href="https://x.com/FlucoAI" target="_blank" rel="noopener noreferrer" className="block text-[.86rem] text-[rgba(255,255,255,.5)] no-underline mb-[10px] transition-colors duration-200 hover:text-[var(--color-arctic)]">Twitter / X</a>
          <a href="https://www.instagram.com/flucoai/" target="_blank" rel="noopener noreferrer" className="block text-[.86rem] text-[rgba(255,255,255,.5)] no-underline mb-[10px] transition-colors duration-200 hover:text-[var(--color-arctic)]">Instagram</a>
          <a href="https://www.threads.com/@flucoai?xmt=AQF0sbsTli4hOyY4X-3o1Hn01u-J169olk5lzO3tbvdLjxQ" target="_blank" rel="noopener noreferrer" className="block text-[.86rem] text-[rgba(255,255,255,.5)] no-underline mb-[10px] transition-colors duration-200 hover:text-[var(--color-arctic)]">Threads</a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center text-[.76rem]">
        <span>© 2025 Fluco (fluco.uk). All rights reserved.</span>
        <div className="flex gap-[10px]">
          <a href="https://www.linkedin.com/in/fluco-ai-9526923b7/" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-[8px] border border-[rgba(179,207,229,.14)] flex items-center justify-center no-underline text-[.82rem] text-[rgba(255,255,255,.45)] transition-all duration-200 hover:border-[rgba(179,207,229,.35)] hover:text-[var(--color-arctic)] hover:bg-[rgba(179,207,229,.06)]">
            <Linkedin className="w-[14px] h-[14px]" strokeWidth={2} />
          </a>
          <a href="https://x.com/FlucoAI" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-[8px] border border-[rgba(179,207,229,.14)] flex items-center justify-center no-underline text-[.82rem] text-[rgba(255,255,255,.45)] transition-all duration-200 hover:border-[rgba(179,207,229,.35)] hover:text-[var(--color-arctic)] hover:bg-[rgba(179,207,229,.06)]">
            𝕏
          </a>
          <a href="https://www.instagram.com/flucoai/" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-[8px] border border-[rgba(179,207,229,.14)] flex items-center justify-center no-underline text-[.82rem] text-[rgba(255,255,255,.45)] transition-all duration-200 hover:border-[rgba(179,207,229,.35)] hover:text-[var(--color-arctic)] hover:bg-[rgba(179,207,229,.06)]">
            <Instagram className="w-[14px] h-[14px]" strokeWidth={2} />
          </a>
          <a href="https://www.threads.com/@flucoai?xmt=AQF0sbsTli4hOyY4X-3o1Hn01u-J169olk5lzO3tbvdLjxQ" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-[8px] border border-[rgba(179,207,229,.14)] flex items-center justify-center no-underline text-[.82rem] text-[rgba(255,255,255,.45)] transition-all duration-200 hover:border-[rgba(179,207,229,.35)] hover:text-[var(--color-arctic)] hover:bg-[rgba(179,207,229,.06)]">
            <AtSign className="w-[14px] h-[14px]" strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
