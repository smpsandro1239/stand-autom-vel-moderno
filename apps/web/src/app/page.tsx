'use client';

import { useEffect, useState } from 'react';
import { Car, Fuel, Gauge, Euro, Search, Filter, ArrowUpRight, Sparkles, Activity, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  images: string;
  description: string;
}

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/vehicles')
      .then(res => res.json())
      .then(data => {
        setVehicles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-[#050505] min-h-screen flex flex-col items-center justify-center space-y-8">
         <div className="w-24 h-24 border-t-2 border-blue-600 rounded-full animate-spin"></div>
         <span className="text-[10px] font-black uppercase tracking-[0.8em] text-blue-600 animate-pulse">Initialising Elite Experience</span>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600 overflow-x-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-blue-600/10 blur-[180px] rounded-full -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full translate-y-1/3"></div>
      </div>

      {/* Hero Section V7 - Imersão Total */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden border-b border-white/5 z-10">
        <div className="absolute inset-0 z-0 scale-105 transition-transform duration-[10s] ease-linear">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2500"
            className="w-full h-full object-cover opacity-40 grayscale-[50%]"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/20 to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-7xl animate-reveal">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-3xl px-8 py-4 rounded-full border border-white/10 mb-16 shadow-[0_0_50px_rgba(37,99,235,0.1)] group cursor-none">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-[9px] font-black tracking-[0.6em] uppercase text-gray-400 group-hover:text-blue-400 transition-colors">Acuracy In Every Detail // Edition 2026</span>
          </div>

          <h1 className="text-[12vw] md:text-[9vw] font-black tracking-[-0.08em] leading-[0.75] italic mb-16 uppercase select-none drop-shadow-2xl">
            BEYOND <br/><span className="text-blue-600">LIMITS.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-24">
            <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:scale-110 active:scale-95 shadow-[0_20px_60px_rgba(37,99,235,0.5)] overflow-hidden">
              <span className="relative z-10">Explorar Portfólio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-2xl text-white border border-white/10 px-16 py-8 rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:border-blue-600/50">
              Private Concierge
            </button>
          </div>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section className="relative z-20 -translate-y-1/2">
         <div className="container mx-auto px-6">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 grid grid-cols-2 lg:grid-cols-4 gap-12 shadow-2xl">
               {[
                 { icon: Globe, val: 'GLOBAL', label: 'Sourcing Network' },
                 { icon: ShieldCheck, val: 'CERTIFIED', label: '180 Points Audit' },
                 { icon: Cpu, val: 'PREDICTIVE', label: 'Maintenance Tech' },
                 { icon: Euro, val: 'EXCLUSIVE', label: 'Private Finance' }
               ].map((m, i) => (
                 <div key={i} className="flex flex-col items-center text-center space-y-3">
                    <m.icon className="w-5 h-5 text-blue-600" />
                    <div className="text-2xl font-black italic tracking-tighter uppercase">{m.val}</div>
                    <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-600">{m.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Filter Section - Imersive Design */}
      <section className="container mx-auto px-6 mt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-40">
           <div className="animate-reveal">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.8em] mb-6 block underline decoration-blue-600/30 underline-offset-8">The Collection</span>
              <h2 className="text-7xl font-black tracking-tighter italic uppercase leading-none select-none">STOCK <span className="text-blue-600 underline decoration-blue-600/30 underline-offset-[12px]">DE ELITE.</span></h2>
           </div>

           <div className="flex flex-wrap justify-center gap-4 animate-reveal" style={{ animationDelay: '0.2s' }}>
              {['Hypercars', 'Super SUV', 'Electric Elite', 'Classics'].map(cat => (
                <button key={cat} className="px-10 py-5 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:border-blue-600 transition-all hover:scale-105 active:scale-95">{cat}</button>
              ))}
           </div>
        </div>

        {/* Gallery Grid V7 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24">
          {vehicles.map((v, i) => (
            <div key={v.id} className="group relative animate-reveal" style={{ animationDelay: `${0.15 * (i + 1)}s` }}>

              {/* Luxury Frame */}
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-1000 group-hover:border-blue-600/40 shadow-2xl group-hover:shadow-[0_80px_120px_-30px_rgba(0,0,0,1)]">

                <img
                  src={v.images}
                  alt={v.make}
                  className="w-full h-full object-cover grayscale-[60%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                />

                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-700"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[4rem]"></div>

                {/* Dynamic Content Overlay */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="mb-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                     <div className="flex items-center space-x-4 mb-8">
                        <span className="bg-blue-600 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(37,99,235,0.3)]">{v.year}</span>
                        <div className="h-[1px] w-8 bg-white/20"></div>
                        <span className="text-gray-500 font-black text-[9px] uppercase tracking-[0.3em]">{v.fuelType} // {v.transmission}</span>
                     </div>

                     <h3 className="text-6xl font-black tracking-tighter leading-none mb-4 italic uppercase group-hover:text-blue-500 transition-colors duration-500">{v.make}</h3>
                     <p className="text-2xl text-gray-400 font-bold tracking-tight uppercase mb-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-200">{v.model}</p>

                     <div className="grid grid-cols-2 gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-10">
                        <div className="flex items-center space-x-4 group/item">
                           <Gauge className="w-5 h-5 text-blue-600 group-hover/item:scale-125 transition-transform" />
                           <span className="group-hover/item:text-white transition-colors">{v.mileage.toLocaleString()} KM</span>
                        </div>
                        <div className="flex items-center space-x-4 group/item">
                           <Zap className="w-5 h-5 text-blue-600 group-hover/item:scale-125 transition-transform" />
                           <span className="group-hover/item:text-white transition-colors italic">PERFORMANCE+</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-300">
                    <div className="text-5xl font-black tracking-tighter text-white">
                      {v.price.toLocaleString()}<span className="text-blue-600 text-2xl italic ml-2">€</span>
                    </div>
                    <button className="w-24 h-24 bg-white/5 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 border border-white/10 group/btn shadow-2xl overflow-hidden relative">
                      <ArrowUpRight className="w-10 h-10 relative z-10 group-hover/btn:rotate-45 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Background Ghost Text */}
              <div className="absolute -z-10 -top-10 -left-10 text-[25rem] font-black text-white/[0.015] uppercase pointer-events-none select-none italic group-hover:text-blue-600/[0.015] transition-colors duration-1000">
                 {v.make.substring(0, 2)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury Vision Section */}
      <section className="py-80 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-6xl mx-auto text-center">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[1em] mb-12 block">Philosophy of Excellence</span>
              <h2 className="text-[9vw] font-black tracking-tighter italic uppercase leading-[0.8] mb-24 drop-shadow-2xl">
                WE DON'T SELL CARS. <br/>WE <span className="text-blue-600">CURATE ASSETS.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-left">
                 {[
                   { t: 'AUDIT', d: 'Processo de validação técnica com transparência absoluta em cada componente.' },
                   { t: 'TRUST', d: 'Garantia total de 36 meses com assistência personalizada 24/7.' },
                   { t: 'VIP', d: 'Acesso prioritário a lançamentos mundiais e eventos exclusivos.' }
                 ].map((item, i) => (
                   <div key={i} className="group cursor-none">
                      <div className="w-12 h-[2px] bg-blue-600 mb-10 group-hover:w-24 transition-all duration-700"></div>
                      <h4 className="text-2xl font-black uppercase italic mb-6 group-hover:text-blue-500 transition-colors">{item.t}</h4>
                      <p className="text-xl text-gray-500 font-medium leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50rem] font-black text-white/[0.01] uppercase select-none pointer-events-none italic">
           ELITE
        </div>
      </section>
    </div>
  );
}
