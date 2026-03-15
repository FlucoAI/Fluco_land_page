import React from 'react';
import { Microscope, Mic, Zap, Clock } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="bg-[var(--color-navy)] text-[var(--color-white)] py-[100px] px-[5%] reveal">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] max-w-[1200px] mx-auto">
        <div className="py-[40px] px-[20px] lg:p-[60px]">
          <div className="inline-block text-[.68rem] tracking-[.14em] uppercase font-bold py-[5px] px-[12px] rounded-[4px] mb-[22px] bg-[rgba(200,80,80,.15)] text-[#e87c7c] border border-[rgba(200,80,80,.2)]">
            The Problem
          </div>
          <div className="font-serif text-[1.75rem] font-bold leading-[1.25] mb-[18px] tracking-[-.02em]">
            LinkedIn growth is slow because engagement takes too much time.
          </div>
          <p className="text-[.93rem] leading-[1.75] text-[rgba(255,255,255,.5)] font-light mb-[32px]">
            Hours spent crafting thoughtful replies. Consistency that falls apart under workload. A feed full of leaders you admire — but no time to actually engage with them.
          </p>
          <div className="flex items-center gap-[12px] py-[16px] px-[20px] bg-[rgba(200,80,80,.08)] border border-[rgba(200,80,80,.16)] rounded-[10px]">
            <Clock className="w-[1.4rem] h-[1.4rem] text-[#e87c7c] shrink-0" strokeWidth={2} />
            <span className="text-[.84rem] text-[rgba(255,255,255,.5)] leading-[1.5] font-light">
              Professionals spend an average of <strong className="text-[#e87c7c]">3+ hours per week</strong> on manual LinkedIn engagement — time you could spend closing deals.
            </span>
          </div>
        </div>
        
        <div className="hidden lg:block bg-[rgba(179,207,229,.12)] my-[20px]"></div>
        
        <div className="py-[40px] px-[20px] lg:p-[60px] lg:pl-[80px]">
          <div className="inline-block text-[.68rem] tracking-[.14em] uppercase font-bold py-[5px] px-[12px] rounded-[4px] mb-[22px] bg-[rgba(74,144,196,.15)] text-[var(--color-arctic)] border border-[rgba(74,144,196,.2)]">
            The Solution
          </div>
          <div className="font-serif text-[1.75rem] font-bold leading-[1.25] mb-[18px] tracking-[-.02em]">
            Three pillars of intelligent engagement.
          </div>
          
          <div className="flex gap-[16px] mb-[20px]">
            <div className="w-[38px] h-[38px] rounded-[8px] bg-[rgba(74,144,196,.12)] border border-[rgba(74,144,196,.18)] flex items-center justify-center shrink-0 text-[var(--color-arctic)]">
              <Microscope className="w-[1rem] h-[1rem]" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[.88rem] font-semibold text-[var(--color-white)] mb-[3px]">Deep Analysis</div>
              <div className="text-[.8rem] text-[rgba(255,255,255,.48)] leading-[1.55]">
                We scrape and study influencer styles, posting patterns, and audience dynamics to build precise engagement models.
              </div>
            </div>
          </div>
          
          <div className="flex gap-[16px] mb-[20px]">
            <div className="w-[38px] h-[38px] rounded-[8px] bg-[rgba(74,144,196,.12)] border border-[rgba(74,144,196,.18)] flex items-center justify-center shrink-0 text-[var(--color-arctic)]">
              <Mic className="w-[1rem] h-[1rem]" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[.88rem] font-semibold text-[var(--color-white)] mb-[3px]">Personalised Voice</div>
              <div className="text-[.8rem] text-[rgba(255,255,255,.48)] leading-[1.55]">
                AI that learns your professional bio, your tone, and your expertise. Every comment sounds exactly like you — only better.
              </div>
            </div>
          </div>
          
          <div className="flex gap-[16px] mb-[20px]">
            <div className="w-[38px] h-[38px] rounded-[8px] bg-[rgba(74,144,196,.12)] border border-[rgba(74,144,196,.18)] flex items-center justify-center shrink-0 text-[var(--color-arctic)]">
              <Zap className="w-[1rem] h-[1rem]" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[.88rem] font-semibold text-[var(--color-white)] mb-[3px]">Effortless Workflow</div>
              <div className="text-[.8rem] text-[rgba(255,255,255,.48)] leading-[1.55]">
                Intuitive swipe gestures to refresh, generate, or discard. Built for the professional on the move.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
