'use client';

import { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, Fingerprint, ChevronLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col lg:flex-row overflow-hidden text-white font-sans">

      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Visual Side (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0a0a] items-center justify-center p-32 border-r border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-10 scale-110 grayscale"
            alt="Login Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-xl animate-reveal">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 mb-12 shadow-2xl">
             <Fingerprint className="w-5 h-5 text-blue-500" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Security Protocol Alpha</span>
          </div>

          <h2 className="text-8xl font-black tracking-tighter leading-[0.85] mb-10 italic uppercase select-none">
            ELEVATE <br/><span className="text-blue-600">ACCESS.</span>
          </h2>

          <p className="text-2xl text-gray-500 font-medium leading-relaxed mb-16 max-w-lg">
            Plataforma de gestão integrada para frotas de ultra-performance.
            Controle absoluto, segurança militar.
          </p>

          <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
            <div>
              <span className="block text-4xl font-black tracking-tighter mb-2 italic">256-BIT</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Encryption Level</span>
            </div>
            <div>
              <span className="block text-4xl font-black tracking-tighter mb-2 italic">MULTI-TENANT</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Architecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-grow flex flex-col justify-center px-8 lg:px-24 py-12 relative z-10">
        <div className="max-w-md w-full mx-auto animate-reveal" style={{ animationDelay: '0.2s' }}>

          <div className="mb-16">
             <a href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-all mb-12 group">
               <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
               Voltar ao Catálogo
             </a>
             <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-[2.5rem] text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] mb-10">
               <ShieldCheck className="w-10 h-10" />
             </div>
             <h1 className="text-5xl font-black tracking-tighter mb-4 italic uppercase">Identity <span className="text-blue-600">Gateway</span></h1>
             <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">Autentique-se para gerir o inventário</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div className="group relative">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-4 ml-2 group-focus-within:text-blue-600 transition-all">ID Corporativo</label>
                <div className="relative overflow-hidden rounded-[2rem] transition-all">
                  <Mail className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 group-focus-within:text-blue-600 transition-all z-10" />
                  <input
                    type="email"
                    required
                    className="block w-full pl-20 pr-8 py-7 bg-white/5 border border-white/10 rounded-[2rem] text-white font-bold placeholder-gray-800 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600/50 focus:bg-white/10 outline-none transition-all relative z-0"
                    placeholder="ex: admin@standpro.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-focus-within:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
                </div>
              </div>

              <div className="group relative">
                <div className="flex justify-between items-center mb-4 px-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-focus-within:text-blue-600 transition-all">Access Code</label>
                  <a href="#" className="text-[9px] font-black uppercase tracking-widest text-blue-600 hover:text-white transition-all">Recuperar?</a>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] transition-all">
                  <Lock className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 group-focus-within:text-blue-600 transition-all z-10" />
                  <input
                    type="password"
                    required
                    className="block w-full pl-20 pr-8 py-7 bg-white/5 border border-white/10 rounded-[2rem] text-white font-bold placeholder-gray-800 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600/50 focus:bg-white/10 outline-none transition-all relative z-0"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-focus-within:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 px-2">
               <div className="relative flex items-center">
                 <input type="checkbox" id="persist" className="peer w-6 h-6 opacity-0 absolute cursor-pointer" />
                 <div className="w-6 h-6 bg-white/5 border border-white/10 rounded-lg peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                 </div>
               </div>
               <label htmlFor="persist" className="text-[10px] font-black uppercase tracking-widest text-gray-600 cursor-pointer select-none">Persistir Sessão Segura</label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-7 px-8 rounded-[2.5rem] bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-[11px] hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_30px_60px_rgba(37,99,235,0.3)] group overflow-hidden relative"
            >
              <span className="relative z-10">Initialise Authentication</span>
              <ArrowRight className="ml-4 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>

          <div className="mt-20 opacity-30 text-center">
             <span className="text-[8px] font-black uppercase tracking-[0.8em]">StandPro Performance Systems © 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
