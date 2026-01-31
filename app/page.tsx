"use client";

import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkEmail = async () => {
    if (!email) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`/api/check?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      <Head>
        <title>TrueMail API - Block Fake Users</title>
      </Head>

      <header className="border-b border-slate-800 backdrop-blur-md fixed w-full z-10 top-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-xl">T</div>
            <span className="font-bold text-xl tracking-tight">TrueMail API</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
          </nav>
          <a href="#get-started" className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-indigo-50 transition-colors">
            Get API Key
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/20">
            B2B Fraud Protection
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Stop Fake Signups. <br />
            Protect Your Growth.
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Detect disposable emails, bots, and high-risk domains instantly with our high-speed JSON API. 
            Keep your database clean and your SDRs happy.
          </p>

          {/* Interactive Demo */}
          <div className="max-w-xl mx-auto bg-slate-800/50 p-2 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-sm">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="test@temp-mail.org" 
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkEmail()}
              />
              <button 
                onClick={checkEmail}
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Scanning...' : 'Scan Now'}
              </button>
            </div>
          </div>

          {/* Result Card */}
          {result && (
            <div className="max-w-xl mx-auto mt-6 text-left">
              <div className={`p-6 rounded-xl border ${result.verdict === 'block' ? 'bg-red-500/10 border-red-500/50' : 'bg-emerald-500/10 border-emerald-500/50'} backdrop-blur-sm transition-all animate-in fade-in slide-in-from-bottom-4`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${result.verdict === 'block' ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                    <span className={`font-bold text-lg ${result.verdict === 'block' ? 'text-red-400' : 'text-emerald-400'} uppercase`}>
                      {result.verdict}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">RISK SCORE: {result.risk_score}/100</span>
                </div>
                <pre className="bg-slate-950/50 p-4 rounded-lg overflow-x-auto text-xs md:text-sm font-mono text-slate-300">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </section>

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Real-time Detection", desc: "Sub-millisecond response time. We check MX records and domain reputation instantly." },
            { title: "Block Disposable Emails", desc: "Our database tracks 50,000+ temp mail domains, updated hourly." },
            { title: "Developer First", desc: "Simple REST API. Copy-paste integration for Node, Python, and PHP." }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-800 py-12 text-center text-slate-500 text-sm">
        <p>&copy; 2026 DishIs Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}
