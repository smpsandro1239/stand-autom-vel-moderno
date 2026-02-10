'use client';

import { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, Github, ChevronLeft, Fingerprint, Key } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col lg:flex-row overflow-hidden text-white pt-24 lg:pt-0">

      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-600/5 blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Visual Side (Lado Esquerdo - Imersivo) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0a0a] items-center justify-center p-32 border-r border-white/5">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-10 scale-110"
            alt="Login Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
          {/* Subtle noise texture simulation */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 mb-12">
             <Fingerprint className="w-4 h-4 text-blue-500" />
             <span className="text-[9px] font-black tracking-[0.4em] uppercase text-gray-400">Security Core v5.0</span>
          </div>

          <h2 className="text-8xl font-black tracking-tighter leading-[0.85] mb-10 italic uppercase">
            SECURE <br/><span className="text-blue-600">GATEWAY.</span>
          </h2>

          <p className="text-2xl text-gray-500 font-medium leading-relaxed mb-16">
            Aceda ao centro de comando StandPro. Gerencie a sua frota de alta performance com ferramentas analíticas de precisão.
          </p>

          <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
            <div className="flex flex-col">
              <span className="text-4xl font-black tracking-tighter mb-2 italic">AES-256</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">Encriptação Militar</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black tracking-tighter mb-2 italic">12ms</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">Latência de Sistema</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side (Lado Direito - Moderno) */}
      <div className="flex-grow flex flex-col justify-center px-8 lg:px-24 py-12 relative z-10">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-16">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-[2.5rem] text-white shadow-[0_0_50px_rgba(37,99,235,0.4)] mb-10 group cursor-none">
               <ShieldCheck className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
             </div>
             <h1 className="text-5xl font-black tracking-tighter mb-4 italic uppercase">Identificação <span className="text-blue-600">Requerida</span></h1>
             <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">Utilize as suas credenciais profissionais</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div className="group relative">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-4 ml-2 group-focus-within:text-blue-600 transition-all">ID Profissional</label>
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Mail className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 group-focus-within:text-blue-600 transition-all z-10" />
                  <input
                    type="email"
                    required
                    className="block w-full pl-20 pr-8 py-7 bg-white/5 border border-white/10 rounded-[2rem] text-white font-bold placeholder-gray-800 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 focus:bg-white/10 outline-none transition-all relative z-0"
                    placeholder="ex: admin@standpro.com"
                  />
                  <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-focus-within:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
                </div>
              </div>

              <div className="group relative">
                <div className="flex justify-between items-center mb-4 px-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-focus-within:text-blue-600 transition-all">Access Key</label>
                  <a href="#" className="text-[9px] font-black uppercase tracking-widest text-blue-600 hover:text-white transition-all border-b border-blue-600/30 hover:border-white">Perdeu o Acesso?</a>
                </div>
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Key className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 group-focus-within:text-blue-600 transition-all z-10" />
                  <input
                    type="password"
                    required
                    className="block w-full pl-20 pr-8 py-7 bg-white/5 border border-white/10 rounded-[2rem] text-white font-bold placeholder-gray-800 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 focus:bg-white/10 outline-none transition-all relative z-0"
                    placeholder="••••••••••••"
                  />
                  <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-focus-within:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 px-2">
               <input type="checkbox" id="persist" className="w-5 h-5 rounded-lg bg-white/5 border-white/10 text-blue-600 focus:ring-blue-600 transition-all cursor-pointer" />
               <label htmlFor="persist" className="text-[10px] font-black uppercase tracking-widest text-gray-600 cursor-pointer select-none">Persistir Sessão Encriptada</label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-7 px-8 rounded-[2rem] bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_25px_60px_rgba(37,99,235,0.3)] group"
            >
              <span>Autenticar Sistema</span>
              <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </form>

          <div className="mt-20 flex flex-col items-center">
             <div className="w-full h-[1px] bg-white/5 mb-12 relative">
                <div className="absolute inset-0 flex items-center justify-center -translate-y-1/2">
                   <span className="px-6 bg-[#050505] text-[9px] font-black uppercase tracking-[0.5em] text-gray-700">Protocolos Externos</span>
                </div>
             </div>

             <button className="w-full flex items-center justify-center py-6 px-8 rounded-[1.5rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/10 transition-all group">
                <Github className="w-4 h-4 mr-4 text-gray-400 group-hover:text-white" />
                Continuar com GitHub Enterprise
             </button>
          </div>
        </div>

        {/* Footer info floating */}
        <div className="absolute bottom-12 left-0 right-0 text-center opacity-20 hidden lg:block">
           <span className="text-[7px] font-black uppercase tracking-[1em] text-white">StandPro Performance Systems — Core 2026</span>
        </div>
      </div>
    </div>
  );
}
