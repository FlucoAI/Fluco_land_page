import React from 'react';
import { Radio, Brain, Smartphone, FileText, Sliders, Calendar } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-[var(--color-frost)] py-[100px] px-[5%]" id="features">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-end mb-[60px] reveal">
          <div>
            <span className="inline-block text-[.7rem] font-bold tracking-[.15em] uppercase text-[var(--color-accent)] mb-[16px]">
              Key Features
            </span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.9rem)] font-bold tracking-[-.025em] text-[var(--color-navy)] leading-[1.1] mb-[16px]">
              Every tool a serious LinkedIn presence needs.
            </h2>
          </div>
          <p className="text-[.98rem] text-[var(--color-muted)] leading-[1.7] font-light max-w-[540px]">
            Built for efficiency. Engineered for quality. Designed so you never have to choose between speed and authenticity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className="bg-[var(--color-white)] border border-[rgba(179,207,229,.35)] rounded-[16px] py-[34px] px-[30px] transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_20px_48px_rgba(10,25,49,.09)] hover:border-[rgba(74,144,196,.3)] reveal reveal-delay-1">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.18)] flex items-center justify-center mb-[20px] text-[var(--color-accent)]">
              <Radio className="w-[1.2rem] h-[1.2rem]" strokeWidth={2} />
            </div>
            <div className="font-serif text-[1.1rem] font-bold text-[var(--color-navy)] mb-[10px]">
              Dynamic Scraping
            </div>
            <p className="text-[.865rem] text-[var(--color-muted)] leading-[1.65] font-light">
              Real-time content intelligence from LinkedIn's most influential voices — Gates, Nadella, Fridman and more. Always current, always contextual.
            </p>
          </div>

          <div className="bg-[var(--color-deep-sea)] border-transparent rounded-[16px] py-[34px] px-[30px] transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_20px_48px_rgba(10,25,49,.09)] reveal reveal-delay-2">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(179,207,229,.1)] border border-[rgba(179,207,229,.18)] flex items-center justify-center mb-[20px] text-[var(--color-arctic)]">
              <Brain className="w-[1.2rem] h-[1.2rem]" strokeWidth={2} />
            </div>
            <div className="font-serif text-[1.1rem] font-bold text-[var(--color-white)] mb-[10px]">
              Contextual Intelligence
            </div>
            <p className="text-[.865rem] text-[rgba(255,255,255,.55)] leading-[1.65] font-light">
              Your professional background, industry expertise, and personal narrative are woven into every single comment. It doesn't just sound human — it sounds like <em className="italic">you</em>.
            </p>
          </div>

          <div className="bg-[var(--color-white)] border border-[rgba(179,207,229,.35)] rounded-[16px] py-[34px] px-[30px] transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_20px_48px_rgba(10,25,49,.09)] hover:border-[rgba(74,144,196,.3)] reveal reveal-delay-3">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.18)] flex items-center justify-center mb-[20px] text-[var(--color-accent)]">
              <Smartphone className="w-[1.2rem] h-[1.2rem]" strokeWidth={2} />
            </div>
            <div className="font-serif text-[1.1rem] font-bold text-[var(--color-navy)] mb-[10px]">
              Mobile-First Design
            </div>
            <p className="text-[.865rem] text-[var(--color-muted)] leading-[1.65] font-light">
              Engineered for the on-the-go professional. Swipe-based interactions mean you can engage with your network from anywhere, in seconds.
            </p>
          </div>

          <div className="bg-[var(--color-white)] border border-[rgba(179,207,229,.35)] rounded-[16px] py-[34px] px-[30px] transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_20px_48px_rgba(10,25,49,.09)] hover:border-[rgba(74,144,196,.3)] reveal reveal-delay-1">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.18)] flex items-center justify-center mb-[20px] text-[var(--color-accent)]">
              <FileText className="w-[1.2rem] h-[1.2rem]" strokeWidth={2} />
            </div>
            <div className="font-serif text-[1.1rem] font-bold text-[var(--color-navy)] mb-[10px]">
              Notes Board
            </div>
            <p className="text-[.865rem] text-[var(--color-muted)] leading-[1.65] font-light">
              A personalised prompt per influencer — importable in MD format — so AI always has the richest possible context to work from.
            </p>
          </div>

          <div className="bg-[var(--color-white)] border border-[rgba(179,207,229,.35)] rounded-[16px] py-[34px] px-[30px] transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_20px_48px_rgba(10,25,49,.09)] hover:border-[rgba(74,144,196,.3)] reveal reveal-delay-2">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.18)] flex items-center justify-center mb-[20px] text-[var(--color-accent)]">
              <Sliders className="w-[1.2rem] h-[1.2rem]" strokeWidth={2} />
            </div>
            <div className="font-serif text-[1.1rem] font-bold text-[var(--color-navy)] mb-[10px]">
              Custom Prompt
            </div>
            <p className="text-[.865rem] text-[var(--color-muted)] leading-[1.65] font-light">
              Set a global AI instruction applied across all generations — or write per-influencer prompts for total control over tone, angle, and depth.
            </p>
          </div>

          <div className="bg-[var(--color-white)] border border-[rgba(179,207,229,.35)] rounded-[16px] py-[34px] px-[30px] transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_20px_48px_rgba(10,25,49,.09)] hover:border-[rgba(74,144,196,.3)] reveal reveal-delay-3">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.18)] flex items-center justify-center mb-[20px] text-[var(--color-accent)]">
              <Calendar className="w-[1.2rem] h-[1.2rem]" strokeWidth={2} />
            </div>
            <div className="font-serif text-[1.1rem] font-bold text-[var(--color-navy)] mb-[10px]">
              Activity Calendar
            </div>
            <p className="text-[.865rem] text-[var(--color-muted)] leading-[1.65] font-light">
              Track your engagement history day by day. See your consistency at a glance and understand exactly when and where you're showing up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
