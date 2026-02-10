'use client';

import { useEffect, useState } from 'react';
import { Car, Fuel, Gauge, Euro, Search, Filter, ArrowUpRight, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

const vehicles = [
  {
    id: '1',
    make: 'Porsche',
    model: '911 GT3 RS',
    year: 2024,
    price: 268500,
    mileage: 450,
    fuelType: 'GASOLINA',
    transmission: 'PDK',
    description: 'A joia da coroa da Porsche. Performance pura de competição num veículo legal para estrada.',
    images: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 112900,
    mileage: 0,
    fuelType: 'ELÉCTRICO',
    transmission: 'AUTO',
    description: '1020cv de potência instantânea. O futuro da aceleração chegou hoje.',
    images: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    make: 'Audi',
    model: 'RS 6 Avant Performance',
    year: 2023,
    price: 194500,
    mileage: 4200,
    fuelType: 'GASOLINA',
    transmission: 'TIPTRONIC',
    description: 'A carrinha mais rápida do mundo. Espaço, luxo e performance RS sem compromissos.',
    images: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200',
  }
];

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600">

      {/* Hero Section Imersivo */}
      <section className="relative h-[98vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2500"
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-7xl animate-reveal">
          <div className="inline-flex items-center space-x-3 bg-blue-600/10 backdrop-blur-3xl px-8 py-4 rounded-full border border-blue-600/30 mb-16 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
            <Zap className="w-5 h-5 text-blue-400 fill-blue-400" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-400">Curadoria Exclusiva // 2026 Collection</span>
          </div>

          <h1 className="text-[12vw] md:text-[10vw] font-black tracking-[-0.07em] leading-[0.8] italic mb-16 uppercase select-none">
            UNLEASH <br/><span className="text-blue-600">EMOTION.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
            <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 shadow-[0_25px_60px_rgba(37,99,235,0.4)] overflow-hidden">
              <span className="relative z-10">Explorar Catálogo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/10 px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-widest text-[11px] transition-all hover:border-white/30">
              Solicitar Private Viewing
            </button>
          </div>
        </div>

        {/* Detail indicators */}
        <div className="absolute bottom-20 left-20 hidden xl:block animate-reveal" style={{ animationDelay: '0.4s' }}>
           <div className="flex items-center space-x-6">
              <div className="w-[1px] h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
              <div>
                 <span className="block text-2xl font-black italic">PT / LX</span>
                 <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Localização Central</span>
              </div>
           </div>
        </div>
      </section>

      {/* Grid de Veículos - Luxury Stand */}
      <section className="container mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 space-y-10 md:space-y-0">
          <div className="animate-reveal">
             <span className="text-blue-600 font-black text-xs uppercase tracking-[0.6em] mb-6 block">Elite Stock</span>
             <h2 className="text-7xl font-black tracking-tighter italic uppercase leading-none">THE <span className="text-blue-600">COLLECTION.</span></h2>
          </div>

          <div className="flex flex-wrap gap-4 animate-reveal" style={{ animationDelay: '0.2s' }}>
             {['Performance', 'Luxury SUV', 'Hypercars', 'Electric Elite'].map(cat => (
               <button key={cat} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:border-blue-600 transition-all">{cat}</button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {vehicles.map((v, i) => (
            <div key={v.id} className="group relative animate-reveal" style={{ animationDelay: `${0.2 * (i + 1)}s` }}>
              {/* Image Container with Custom Shadow */}
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-1000 group-hover:border-blue-600/40 group-hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,1)]">

                <img
                  src={v.images}
                  alt={v.make}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>

                {/* Information Overlay */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="mb-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                     <div className="flex items-center space-x-3 mb-6">
                        <span className="bg-blue-600 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl">{v.year}</span>
                        <span className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">{v.fuelType} // {v.transmission}</span>
                     </div>
                     <h3 className="text-6xl font-black tracking-tighter leading-none mb-3 italic group-hover:text-blue-600 transition-colors duration-500">{v.make}</h3>
                     <p className="text-2xl text-gray-400 font-bold tracking-tight uppercase mb-8">{v.model}</p>

                     <div className="flex items-center space-x-8 text-[11px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-8">
                        <div className="flex items-center space-x-3">
                           <Gauge className="w-4 h-4 text-blue-600" />
                           <span>{v.mileage.toLocaleString()} KM</span>
                        </div>
                        <div className="flex items-center space-x-3">
                           <ShieldCheck className="w-4 h-4 text-blue-600" />
                           <span>Garantia 36M</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <div className="text-4xl font-black tracking-tighter text-white">
                      {v.price.toLocaleString()}<span className="text-blue-600 text-xl italic ml-1">€</span>
                    </div>
                    <button className="w-20 h-20 bg-blue-600 rounded-[2.5rem] flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-2xl shadow-blue-950/40">
                      <ArrowUpRight className="w-10 h-10" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative background text */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] uppercase pointer-events-none select-none">
                 {v.make.charAt(0)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-60 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-5xl">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.8em] mb-10 block">Luxury Tailored</span>
              <h2 className="text-[8vw] font-black tracking-tighter italic uppercase leading-[0.85] mb-20">
                O SEU INVESTIMENTO, <br/>NOSSA <span className="text-blue-600">OBSESSÃO.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                 <p className="text-2xl text-gray-500 font-medium leading-relaxed">
                   Na StandPro, não vendemos apenas automóveis. Facilitamos a aquisição de activos de alta performance com um processo de auditoria interna único em Portugal.
                 </p>
                 <div className="space-y-12">
                    {[
                      { t: 'CONDIÇÕES PRIVATE', d: 'Acesso a taxas de financiamento exclusivas para membros do clube Performance Elite.' },
                      { t: 'LOGÍSTICA GLOBAL', d: 'Entregamos o seu veículo em qualquer ponto da Europa com transporte especializado e seguro total.' }
                    ].map((item, i) => (
                      <div key={i} className="border-l-2 border-blue-600 pl-10">
                         <h4 className="text-xl font-black uppercase italic mb-4">{item.t}</h4>
                         <p className="text-gray-500 font-medium">{item.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Large Background Text */}
        <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 text-[40rem] font-black text-white/[0.01] uppercase select-none pointer-events-none">
           PRO
        </div>
      </section>
    </div>
  );
}
