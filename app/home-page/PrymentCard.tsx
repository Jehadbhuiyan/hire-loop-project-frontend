'use client'
import React, { useState } from 'react';
import { Check, Plus, ArrowRight, Zap, Crown, TrendingUp } from 'lucide-react';

export default function PricingAndCTAClone() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Pricing multiplier for annual billing (25% off)
  const getPrice = (monthlyPrice) => {
    if (monthlyPrice === 0) return 0;
    if (billingCycle === 'yearly') {
      return Math.round(monthlyPrice * 0.75);
    }
    return monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-black bg-[url('/cta-bg.png')] bg-cover bg-center bg-no-repeat  text-white font-sans selection:bg-neutral-800 selection:text-white antialiased overflow-x-hidden">
      
      {/* ================= PRICING SECTION ================= */}
      <section className="relative px-4 py-20 lg:py-28 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-sm bg-indigo-500"></span>
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">PRICING</span>
          <span className="w-1.5 h-1.5 rounded-sm bg-indigo-500"></span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-center max-w-3xl mb-10">
          Pay for the leverage, <br />
          <span className="text-neutral-300">not the listings</span>
        </h2>

        {/* Billing Toggle */}
        <div className="inline-flex items-center p-1 rounded-full bg-neutral-900 border border-neutral-800 mb-16 shadow-inner">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              billingCycle === 'monthly'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              billingCycle === 'yearly'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Yearly
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              billingCycle === 'yearly' ? 'bg-fuchsia-600 text-white' : 'bg-fuchsia-950/80 text-fuchsia-400 border border-fuchsia-800/50'
            }`}>
              25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          
          {/* Starter Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0a0a0a] border border-neutral-800/80 p-8 hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200">
                    <Crown className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Starter</h3>
                </div>
              </div>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-semibold tracking-tight">${getPrice(0)}</span>
                <span className="text-sm text-neutral-400">/month</span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Start building your insights hub:
                </p>
                <ul className="space-y-3">
                  {[
                    "Daily AI match brief (top 5)",
                    "Verified salary bands",
                    "Company insight dashboards",
                    "1-click apply, unlimited"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <span className="p-0.5 rounded bg-neutral-800 text-neutral-400 mt-0.5">
                        <Plus className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm flex items-center justify-between group transition-all">
              <span>Choose This Plan</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Growth Card (Highlighted / Featured) */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0f0f12] border border-neutral-700 p-8 shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-[11px] font-semibold tracking-wide uppercase text-white shadow-md">
              Most Popular
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200">
                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Growth</h3>
                </div>
              </div>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-semibold tracking-tight">${getPrice(17)}</span>
                <span className="text-sm text-neutral-400">/month</span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Start building your insights hub:
                </p>
                <ul className="space-y-3">
                  {[
                    "Daily AI match brief (top 5)",
                    "Verified salary bands",
                    "Company insight dashboards",
                    "1-click apply, unlimited"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-200">
                      <span className="p-0.5 rounded bg-neutral-800 text-neutral-300 mt-0.5">
                        <Plus className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="w-full py-3 px-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-medium text-sm flex items-center justify-between group transition-all shadow-lg">
              <span>Choose This Plan</span>
              <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Premium Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0a0a0a] border border-neutral-800/80 p-8 hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200">
                    <Zap className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Premium</h3>
                </div>
              </div>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-semibold tracking-tight">${getPrice(99)}</span>
                <span className="text-sm text-neutral-400">/month</span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Start building your insights hub:
                </p>
                <ul className="space-y-3">
                  {[
                    "Everything in Pro",
                    "Multi-profile career portfolios",
                    "Shared talent rooms",
                    "Recruiter view (read-only)"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <span className="p-0.5 rounded bg-neutral-800 text-neutral-400 mt-0.5">
                        <Plus className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm flex items-center justify-between group transition-all">
              <span>Choose This Plan</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA SECTION ================= */}
      <section className="relative w-full py-28 lg:py-40 px-4 flex flex-col items-center justify-center overflow-hidden border-t border-neutral-900">
        
        {/* Background Image Container with Gradient Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Fallback pattern / gradient if image fails to load, combined with cta-bg.png */}
          <div className="absolute inset-0 bg-[#020205]" />
         
          {/* Radial dark vignettes to match screenshot depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/40 via-transparent to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-tight">
            Your next role is <br className="hidden sm:inline" />
            already looking for you
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mb-10 font-normal">
            Build a profile in three minutes. The matches start arriving tomorrow morning.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all shadow-xl hover:scale-105">
              Create a free account
            </button>
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/40 hover:bg-neutral-900/80 text-white font-medium text-sm border border-neutral-700/80 backdrop-blur-md transition-all">
              View pricing
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}