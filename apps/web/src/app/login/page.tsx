'use client';

import { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, Github, ChevronLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col lg:flex-row overflow-hidden text-white">
      {/* Visual Side */}
      <div className="hidden lg:flex lg:w-3/5 relative bg-[#111] items-center justify-center p-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 scale-110"
            alt="Login Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <a href="/" className="inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-blue-500 mb-12 hover:text-white transition-all">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </a>
          <h2 className="text-8xl font-black tracking-tighter leading-none mb-8 italic">
            CONDUZA O <span className="text-blue-600">EXTRAORDINÁRIO</span>
          </h2>
          <p className="text-2xl text-gray-400 font-medium leading-relaxed">
            Aceda à plataforma de gestão mais avançada do mercado e tenha o controlo total sobre a sua frota premium.
          </p>
          <div className="mt-12 flex space-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter">100%</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Auditado</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter">256-bit</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Segurança</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter">Real-time</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-grow flex flex-col justify-center px-8 lg:px-24 py-12 relative">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
             <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-8">
               <ShieldCheck className="w-8 h-8" />
             </div>
             <h1 className="text-4xl font-black tracking-tight mb-2 uppercase">Acesso <span className="text-blue-600">Restrito</span></h1>
             <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Identifique-se para continuar</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 ml-2 group-focus-within:text-blue-500 transition-all">Email Profissional</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 group-focus-within:text-blue-600 transition-all" />
                  <input
                    type="email"
                    required
                    className="block w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-3xl text-white font-bold placeholder-gray-700 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 focus:bg-white/10 outline-none transition-all"
                    placeholder="email@standpro.com"
                  />
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between items-center mb-3 px-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-blue-500 transition-all">Palavra-Passe</label>
                  <a href="#" className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-white transition-all">Recuperar?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 group-focus-within:text-blue-600 transition-all" />
                  <input
                    type="password"
                    required
                    className="block w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-3xl text-white font-bold placeholder-gray-700 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 focus:bg-white/10 outline-none transition-all"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-6 px-6 rounded-3xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
            >
              Autenticar Sistema
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>
          </form>

          <div className="mt-12 text-center">
             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
               Problemas no acesso? <a href="#" className="text-blue-600 hover:text-white transition-all">Suporte Técnico</a>
             </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-12 left-0 right-0 text-center">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">StandPro Performance Systems</span>
        </div>
      </div>
    </div>
  );
}
