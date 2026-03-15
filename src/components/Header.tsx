import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] px-[5%] flex items-center justify-between bg-[rgba(246,250,253,.88)] backdrop-blur-[20px] border-b border-[rgba(179,207,229,.3)] animate-[slideDown_.6s_ease_both] transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(10,25,49,.1)]' : ''
      }`}
    >
      <Link to="/" className="flex items-center no-underline">
        <span className="font-serif font-bold text-xl text-[var(--color-navy)]">Fluco</span>
      </Link>
      <nav className="hidden lg:flex items-center gap-[36px]">
        <a
          href="/#features"
          className="text-[.82rem] font-semibold tracking-[.06em] uppercase text-[var(--color-navy)] no-underline opacity-55 transition-opacity duration-200 hover:opacity-100"
        >
          Features
        </a>
        <a
          href="/#pricing"
          className="text-[.82rem] font-semibold tracking-[.06em] uppercase text-[var(--color-navy)] no-underline opacity-55 transition-opacity duration-200 hover:opacity-100"
        >
          Pricing
        </a>
      </nav>
      <a
        href="/#pricing"
        className="hidden lg:inline-flex items-center gap-2 px-[18px] py-[9px] rounded-[7px] font-sans text-[.76rem] font-bold tracking-[.05em] uppercase cursor-pointer transition-all duration-250 no-underline border-none bg-[var(--color-navy)] text-[var(--color-white)] hover:bg-[var(--color-deep-sea)] hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(10,25,49,.28)]"
      >
        Get Started
      </a>
      <button className="lg:hidden bg-transparent border-none cursor-pointer" aria-label="Menu">
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          <rect width="22" height="2" rx="1" fill="#0A1931" />
          <rect y="7" width="16" height="2" rx="1" fill="#0A1931" />
          <rect y="14" width="22" height="2" rx="1" fill="#0A1931" />
        </svg>
      </button>
    </header>
  );
}
