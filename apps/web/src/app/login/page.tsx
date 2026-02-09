'use client';

import { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, Github } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-[2rem] text-white shadow-2xl shadow-blue-200 mb-6">
             <ShieldCheck className="w-10 h-10" />
           </div>
           <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">Bem-vindo de volta.</h1>
           <p className="text-gray-500 font-medium">Aceda à sua área reservada para gerir o seu inventário.</p>
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-14 pr-6 py-5 bg-gray-50 border-none rounded-2xl text-gray-900 font-semibold placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none"
                  placeholder="Seu endereço de email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-14 pr-6 py-5 bg-gray-50 border-none rounded-2xl text-gray-900 font-semibold placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none"
                  placeholder="Sua palavra-passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm px-2">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-blue-600 focus:ring-blue-500 transition-all" />
                <span className="text-gray-500 font-bold group-hover:text-gray-900">Lembrar-me</span>
              </label>
              <a href="#" className="font-bold text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4">Esqueceu a senha?</a>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-5 px-6 rounded-2xl bg-gray-900 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-gray-200"
            >
              Iniciar Sessão
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>
          </form>

          <div className="mt-12">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative px-6 bg-white text-xs font-black uppercase tracking-widest text-gray-400">Ou continuar com</span>
            </div>

            <div className="mt-8">
              <button className="w-full flex items-center justify-center py-5 px-6 rounded-2xl bg-white border border-gray-200 text-gray-900 font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all">
                <Github className="w-5 h-5 mr-3" />
                GitHub Account
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-bold text-gray-400">
          Não tem uma conta? <a href="#" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4">Solicite acesso agora.</a>
        </p>
      </div>
    </div>
  );
}
