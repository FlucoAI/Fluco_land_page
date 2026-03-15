import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="bg-[var(--color-frost)] py-[100px] px-[5%]" id="pricing">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[56px] reveal">
          <span className="inline-block text-[.7rem] font-bold tracking-[.15em] uppercase text-[var(--color-accent)] mb-[16px]">
            Pricing
          </span>
          <h2 className="font-serif text-[clamp(2rem,3.8vw,2.9rem)] font-bold tracking-[-.025em] text-[var(--color-navy)] leading-[1.1] mb-[16px]">
            Start free. Scale when ready.
          </h2>
          <p className="text-[.98rem] text-[var(--color-muted)] leading-[1.7] font-light max-w-[540px] mx-auto">
            A freemium model built for rapid onboarding. Upgrade when LinkedIn becomes your competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] max-w-[800px] mx-auto">
          {/* Free */}
          <div className="bg-[var(--color-white)] border-[1.5px] border-[rgba(179,207,229,.35)] rounded-[20px] py-[42px] px-[38px] relative transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(10,25,49,.09)] reveal reveal-delay-1 flex flex-col">
            <div className="text-[.7rem] font-bold tracking-[.14em] uppercase text-[var(--color-accent)] mb-[12px]">
              Free Tier
            </div>
            <div className="font-serif text-[3rem] font-black text-[var(--color-navy)] tracking-[-.04em] leading-none mb-[6px]">
              £0
            </div>
            <div className="text-[.8rem] text-[#8faec4] mb-[26px]">
              per month, forever
            </div>
            <div className="h-[1px] bg-[rgba(179,207,229,.22)] mb-[26px]"></div>
            
            <div className="flex-1">
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-accent)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[#3d5a78]"><strong>15 AI generations</strong> per month</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-accent)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[#3d5a78]"><strong>10 new profiles</strong> per month</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-accent)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[#3d5a78]">Basic prompt customisation</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-accent)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[#3d5a78]">Notes board (view only)</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(74,144,196,.1)] border border-[rgba(74,144,196,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-accent)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[#3d5a78]">Community support</div>
              </div>
            </div>
          </div>

          {/* PRO */}
          <div className="bg-[var(--color-navy)] border-transparent text-[var(--color-white)] rounded-[20px] py-[42px] px-[38px] relative transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(10,25,49,.09)] reveal reveal-delay-2 flex flex-col">
            <div className="text-[.7rem] font-bold tracking-[.14em] uppercase text-[var(--color-arctic)] mb-[12px]">
              PRO Tier
            </div>
            <div className="font-serif text-[3rem] font-black text-[var(--color-white)] tracking-[-.04em] leading-none mb-[6px]">
              £12
            </div>
            <div className="text-[.8rem] text-[rgba(179,207,229,.5)] mb-[26px]">
              per month, billed monthly
            </div>
            <div className="h-[1px] bg-[rgba(179,207,229,.12)] mb-[26px]"></div>
            
            <div className="flex-1">
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(179,207,229,.1)] border border-[rgba(179,207,229,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-arctic)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[rgba(255,255,255,.68)]"><strong>Unlimited</strong> AI generations</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(179,207,229,.1)] border border-[rgba(179,207,229,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-arctic)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[rgba(255,255,255,.68)]"><strong>Unlimited</strong> influencer slots</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(179,207,229,.1)] border border-[rgba(179,207,229,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-arctic)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[rgba(255,255,255,.68)]"><strong>Notes Board</strong> — acts as a personalised prompt per influencer, importable in MD format</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(179,207,229,.1)] border border-[rgba(179,207,229,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-arctic)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[rgba(255,255,255,.68)]"><strong>General custom prompt</strong> — global AI instruction across all generations</div>
              </div>
              <div className="flex items-start gap-[11px] mb-[14px] text-[.86rem] leading-[1.5]">
                <div className="w-[17px] h-[17px] rounded-full bg-[rgba(179,207,229,.1)] border border-[rgba(179,207,229,.22)] flex items-center justify-center shrink-0 mt-[2px] text-[var(--color-arctic)]">
                  <Check className="w-[.6rem] h-[.6rem]" strokeWidth={3} />
                </div>
                <div className="text-[rgba(255,255,255,.68)]">Priority 24/7 support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
