'use client';

import { useEffect, useState } from 'react';
import { Car, Fuel, Gauge, Euro, Search, Filter, ArrowUpRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';

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

const mockVehicles = [
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
    model: 'RS 6 Avant',
    year: 2023,
    price: 184500,
    mileage: 8200,
    fuelType: 'GASOLINA',
    transmission: 'TIPTRONIC',
    description: 'A carrinha mais desejada do mundo. Espaço, luxo e performance RS sem compromissos.',
    images: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200',
  }
];

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white pb-32">
      {/* Hero Section Imersivo */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2500"
            className="w-full h-full object-cover opacity-30 scale-105"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mt-24">
          <div className="inline-flex items-center space-x-3 bg-blue-600/10 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-600/30 mb-12 animate-pulse">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-blue-400">Novos Veículos de Performance Adicionados</span>
          </div>

          <h1 className="text-[10vw] md:text-[8vw] font-black tracking-[-0.05em] leading-[0.85] italic mb-12 uppercase">
            POWER <span className="text-blue-600">UNLEASHED.</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
            Bem-vindo ao destino final para entusiastas de performance.
            O catálogo mais exclusivo e rigoroso do mercado nacional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
              <span className="relative z-10">Ver Catálogo Completo</span>
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-3xl font-black uppercase tracking-widest text-xs transition-all hover:border-white/30">
              Agendar Consultoria
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-30 animate-bounce">
           <span className="text-[8px] font-black uppercase tracking-[0.5em] rotate-90 mb-8">Scroll</span>
           <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 border-b border-white/5 relative z-20 overflow-hidden">
         <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: '120+', label: 'Veículos em Stock' },
              { val: '24h', label: 'Suporte Elite' },
              { val: '100%', label: 'Certificação Rigorosa' },
              { val: '0 KM', label: 'Opções Novo' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                 <div className="text-5xl font-black tracking-tighter mb-2 italic">{stat.val}</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-gray-600">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* Filter & Search Imersivo */}
      <section className="container mx-auto px-6 mt-32 relative z-20">
        <div className="bg-[#111] p-3 rounded-[3rem] border border-white/5 shadow-2xl flex flex-col lg:flex-row items-center gap-4">
          <div className="relative flex-grow w-full group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 group-focus-within:text-blue-600 transition-all" />
            <input
              type="text"
              placeholder="Pesquisar por Marca, Modelo ou Características..."
              className="bg-transparent w-full pl-20 pr-8 py-6 outline-none font-bold text-lg placeholder:text-gray-700"
            />
          </div>
          <div className="h-10 w-[1px] bg-white/5 hidden lg:block"></div>
          <button className="bg-white/5 hover:bg-white/10 text-white p-6 rounded-[2rem] border border-white/10 transition-all group">
            <Filter className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
          <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[2.25rem] font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-950">
            Filtrar Stock
          </button>
        </div>
      </section>

      {/* Grid de Veículos - Estilo Elite */}
      <section className="container mx-auto px-6 mt-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-6 md:space-y-0">
          <div>
             <h2 className="text-5xl font-black tracking-tighter italic uppercase mb-4">Stock <span className="text-blue-600">Disponível</span></h2>
             <div className="flex items-center space-x-3">
               <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></div>
               <span className="text-xs font-black uppercase tracking-widest text-gray-500">Apenas veículos certificados</span>
             </div>
          </div>
          <div className="flex space-x-4 font-black text-[10px] uppercase tracking-widest">
            <button className="text-white border-b-2 border-blue-600 pb-1 transition-all">Todos</button>
            <button className="text-gray-600 hover:text-white transition-all">Performance</button>
            <button className="text-gray-600 hover:text-white transition-all">SUV Luxo</button>
            <button className="text-gray-600 hover:text-white transition-all">Elétricos</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {mockVehicles.map((v) => (
            <div key={v.id} className="group relative">
              {/* Card Container */}
              <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-700 group-hover:border-blue-600/30 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]">

                {/* Background Image */}
                <img
                  src={v.images}
                  alt={v.make}
                  className="w-full h-full object-cover grayscale-[30%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                {/* Badge Superior */}
                <div className="absolute top-10 right-10 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {v.year}
                </div>

                {/* Main Content Overlay */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-all duration-700 ease-out">
                  <div className="mb-8">
                     <span className="inline-block text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">{v.fuelType} // {v.transmission}</span>
                     <h3 className="text-5xl font-black tracking-tighter leading-none mb-3 italic">{v.make}</h3>
                     <p className="text-2xl text-gray-400 font-bold tracking-tight uppercase mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">{v.model}</p>

                     <div className="flex items-center space-x-6 text-xs font-bold text-gray-500">
                        <div className="flex items-center space-x-2 border-r border-white/10 pr-6">
                           <Gauge className="w-4 h-4 text-blue-600" />
                           <span>{v.mileage.toLocaleString()} KM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <Euro className="w-4 h-4 text-blue-600" />
                           <span>Preço Sob Consulta</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="text-4xl font-black tracking-tighter text-white">
                      {v.price.toLocaleString()}<span className="text-blue-600 text-xl italic ml-1">€</span>
                    </div>
                    <button className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-xl shadow-blue-950/40 group-hover:rotate-[360deg] duration-700">
                      <ArrowUpRight className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating detail on hover */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-blue-600 p-4 rounded-2xl text-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 shadow-2xl z-30 pointer-events-none">
                 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">Configurar Reserva Agora</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 mt-60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl group">
              <img src="https://images.unsplash.com/photo-1520050206274-a1ae446cb3cc?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="Detail" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                    <ShieldCheck className="w-10 h-10" />
                 </div>
              </div>
           </div>
           <div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Certificação StandPro</span>
              <h2 className="text-6xl font-black tracking-tighter italic uppercase mb-10 leading-[0.9]">O SEU RIGOR É O <span className="text-blue-600">NOSSO PADRÃO.</span></h2>
              <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">Cada veículo no nosso stock passa por uma inspeção técnica de 180 pontos, garantindo que a sua única preocupação seja o prazer de conduzir.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                 {[
                   'Histórico Garantido', 'Financiamento Custom', 'Garantia de 36 Meses', 'Entrega Premium'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="font-bold text-sm uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
              <button className="bg-white text-black px-12 py-6 rounded-3xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all">Saber Mais Sobre Garantia</button>
           </div>
        </div>
      </section>
    </div>
  );
}
