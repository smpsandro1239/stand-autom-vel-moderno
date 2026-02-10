'use client';

import { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, Fingerprint, ChevronLeft, Key, Terminal } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col lg:flex-row overflow-hidden text-white font-sans selection:bg-blue-600">

      {/* Decorative Layer */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/10 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>

      {/* Left Panel: Immersive Brand Experience */}
      <div className="hidden lg:flex lg:w-3/5 relative bg-[#0a0a0a] items-center justify-center p-32 border-r border-white/5 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2500"
            className="w-full h-full object-cover opacity-10 scale-110 grayscale transition-transform duration-[20s] ease-in-out"
            alt="Elite Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-2xl animate-reveal">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-3xl px-8 py-4 rounded-full border border-white/10 mb-16 shadow-2xl">
             <Fingerprint className="w-5 h-5 text-blue-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-400">Security Architecture v7.0.2</span>
          </div>

          <h2 className="text-[10vw] font-black tracking-tighter leading-[0.8] mb-12 italic uppercase select-none drop-shadow-2xl">
            ELITE <br/><span className="text-blue-600">CORE.</span>
          </h2>

          <p className="text-3xl text-gray-400 font-medium leading-relaxed mb-20 max-w-xl border-l-2 border-blue-600 pl-12">
            Centralized Management Hub for high-performance assets.
            Exclusive access only.
          </p>

          <div className="grid grid-cols-2 gap-20 border-t border-white/5 pt-20">
            <div>
              <span className="block text-5xl font-black tracking-tighter mb-4 italic italic">SHA-512</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">Hash Protocol</span>
            </div>
            <div>
              <span className="block text-5xl font-black tracking-tighter mb-4 italic">RSA-4096</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">Encrypted Tunnel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Advanced Authentication Portal */}
      <div className="flex-grow flex flex-col justify-center px-12 lg:px-24 py-12 relative z-20">
        <div className="max-w-md w-full mx-auto animate-reveal" style={{ animationDelay: '0.15s' }}>

          <div className="mb-20">
             <a href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 hover:text-blue-500 transition-all mb-16 group">
               <ChevronLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" />
               Return to Catalogue
             </a>
             <div className="flex items-center space-x-6 mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-[2.5rem] text-white shadow-[0_25px_50px_rgba(37,99,235,0.4)] group overflow-hidden relative">
                  <ShieldCheck className="w-12 h-12 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
                <div>
                   <h1 className="text-5xl font-black tracking-tighter italic uppercase select-none leading-none">SECURE<br/><span className="text-blue-600">LOGIN.</span></h1>
                </div>
             </div>
             <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] border-l border-blue-600/30 pl-6">Authorised Personnel Only</p>
          </div>

          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              <div className="group relative">
                <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 mb-5 ml-4 group-focus-within:text-blue-500 transition-all italic underline decoration-blue-600/20 underline-offset-8">Corporate ID</label>
                <div className="relative overflow-hidden rounded-[2.5rem] transition-all group-focus-within:shadow-[0_0_40px_rgba(37,99,235,0.1)]">
                  <Mail className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-700 w-5 h-5 group-focus-within:text-blue-600 transition-all z-10" />
                  <input
                    type="email"
                    required
                    className="block w-full pl-24 pr-10 py-8 bg-white/5 border border-white/5 rounded-[2.5rem] text-white font-black placeholder-gray-800 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600/50 focus:bg-[#111] outline-none transition-all relative z-0 text-sm tracking-widest"
                    placeholder="ADMIN@STANDPRO.COM"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.toUpperCase())}
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="flex justify-between items-center mb-5 px-4">
                  <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 group-focus-within:text-blue-600 transition-all italic underline decoration-blue-600/20 underline-offset-8">Secret Key</label>
                  <a href="#" className="text-[9px] font-black uppercase tracking-widest text-blue-600 hover:text-white transition-all border-b border-blue-600/20 hover:border-white">Reset?</a>
                </div>
                <div className="relative overflow-hidden rounded-[2.5rem] transition-all group-focus-within:shadow-[0_0_40px_rgba(37,99,235,0.1)]">
                  <Key className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-700 w-5 h-5 group-focus-within:text-blue-600 transition-all z-10" />
                  <input
                    type="password"
                    required
                    className="block w-full pl-24 pr-10 py-8 bg-white/5 border border-white/5 rounded-[2.5rem] text-white font-black placeholder-gray-800 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600/50 focus:bg-[#111] outline-none transition-all relative z-0 text-lg tracking-[1em]"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 px-4 group/persist cursor-pointer">
               <div className="relative flex items-center">
                 <input type="checkbox" id="persist" className="peer w-6 h-6 opacity-0 absolute cursor-pointer" />
                 <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-xl peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center shadow-lg group-hover/persist:border-blue-600/50">
                    <div className="w-3 h-3 bg-white rounded-sm opacity-0 peer-checked:opacity-100 transition-all scale-50 peer-checked:scale-100"></div>
                 </div>
               </div>
               <label htmlFor="persist" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 cursor-pointer select-none group-hover/persist:text-gray-400 transition-colors">Remember Station</label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-8 px-10 rounded-[2.5rem] bg-blue-600 text-white font-black uppercase tracking-[0.5em] text-[12px] hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-700 shadow-[0_30px_70px_rgba(37,99,235,0.4)] group overflow-hidden relative"
            >
              <span className="relative z-10">AUTHORISE SYSTEM ACCESS</span>
              <Terminal className="ml-6 w-6 h-6 relative z-10 group-hover:text-blue-900 transition-colors" />
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </button>
          </form>

          {/* Infrastructure status simulation */}
          <div className="mt-24 pt-12 border-t border-white/5">
             <div className="flex justify-between items-center opacity-40">
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Node Status: Active</span>
                </div>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-600 italic">2026 StandPro Performance</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
