import React from 'react';

export default function Quote() {
  return (
    <div className="bg-[var(--color-deep-sea)] py-[80px] px-[5%] text-center reveal">
      <p className="font-serif text-[clamp(1.4rem,3vw,2.1rem)] font-bold text-[var(--color-white)] leading-[1.4] tracking-[-.02em] max-w-[800px] mx-auto mb-[18px] relative before:content-['\201C'] before:text-[8rem] before:text-[rgba(179,207,229,.08)] before:absolute before:-top-[40px] before:-left-[20px] before:font-serif before:leading-none">
        Your LinkedIn presence shouldn't be a second job. Let Fluco handle the noise while you handle the deals.
      </p>
      <p className="text-[.75rem] tracking-[.12em] uppercase text-[rgba(179,207,229,.45)]">
        — Fluco Philosophy
      </p>
    </div>
  );
}
