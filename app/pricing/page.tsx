"use client";

import Head from "next/head";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      <Head>
        <title>Pricing - TrueMail API</title>
      </Head>

      <header className="border-b border-slate-800 backdrop-blur-md fixed w-full z-10 top-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-xl">T</div>
                <span className="font-bold text-xl tracking-tight">TrueMail API</span>
            </a>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="/#features" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="text-white font-semibold">Pricing</a>
            <a href="/#docs" className="hover:text-white transition-colors">Documentation</a>
          </nav>
          <a href="/#get-started" className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-indigo-50 transition-colors">
            Get API Key
          </a>
        </div>
      </header>

      <main className="pt-40 pb-20">
        <div className="text-center mb-16 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stop fake users for less than the cost of a coffee. No hidden fees.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Hobby</h3>
            <div className="text-4xl font-extrabold text-white mb-6">$0<span className="text-lg font-normal text-slate-400">/mo</span></div>
            <p className="text-slate-400 mb-8">Perfect for side projects and testing.</p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> 100 API Calls / month</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> Disposable Domain Check</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> Format Validation</li>
              <li className="flex items-center gap-3"><span className="text-slate-600">✗</span> MX Record Lookup</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-slate-600 font-semibold hover:bg-slate-700 transition-colors">Start for Free</button>
          </div>

          {/* Pro Tier */}
          <div className="relative p-8 rounded-2xl bg-slate-800 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">MOST POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">Startup</h3>
            <div className="text-4xl font-extrabold text-white mb-6">$29<span className="text-lg font-normal text-slate-400">/mo</span></div>
            <p className="text-slate-400 mb-8">For growing SaaS and e-commerce.</p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> 10,000 API Calls / month</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> Everything in Hobby</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> Advanced Risk Score</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> Email Support</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg">Get Started</button>
          </div>

          {/* Enterprise Tier */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-extrabold text-white mb-6">$99<span className="text-lg font-normal text-slate-400">/mo</span></div>
            <p className="text-slate-400 mb-8">High volume and SLA guarantees.</p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> 100,000+ API Calls</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> Dedicated Support</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> 99.99% Uptime SLA</li>
              <li className="flex items-center gap-3"><span className="text-indigo-400">✓</span> Custom Contracts</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-slate-600 font-semibold hover:bg-slate-700 transition-colors">Contact Sales</button>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-12 text-center text-slate-500 text-sm">
        <p>&copy; 2026 DishIs Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}
