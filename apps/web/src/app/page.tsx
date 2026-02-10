'use client';

import { useEffect, useState } from 'react';
import { Car, Fuel, Gauge, Euro, Search, Filter, ArrowUpRight, Sparkles } from 'lucide-react';

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
    price: 245000,
    mileage: 150,
    fuelType: 'GASOLINA',
    transmission: 'PDK',
    description: 'A expressão máxima da performance em pista, legalizada para estrada. Pack Weissach incluído.',
    images: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 109000,
    mileage: 0,
    fuelType: 'ELÉCTRICO',
    transmission: 'AUTO',
    description: 'A aceleração mais rápida de qualquer veículo em produção. 0-100 km/h em 2.1s.',
    images: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    make: 'BMW',
    model: 'M8 Competition',
    year: 2023,
    price: 168000,
    mileage: 4500,
    fuelType: 'GASOLINA',
    transmission: 'M-AUTO',
    description: 'O luxo encontra a performance bruta. Interior em pele Merino e sistema de som Bowers & Wilkins.',
    images: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
  }
];

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold tracking-widest uppercase">Novidades de 2026 chegaram</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none italic">
            DEFINA O <span className="text-blue-600">LIMITE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto mb-12">
            Experiência de condução inigualável. O catálogo mais exclusivo de veículos de alta performance em Portugal.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Explorar Catálogo
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all">
              Agendar Test Drive
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-[#111] p-2 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-2">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar por marca, modelo ou ano..."
              className="bg-transparent w-full pl-16 pr-6 py-5 outline-none font-bold text-lg placeholder:text-gray-600"
            />
          </div>
          <button className="bg-[#1a1a1a] hover:bg-[#222] text-white p-5 rounded-3xl transition-all">
            <Filter className="w-6 h-6" />
          </button>
          <button className="bg-white text-black px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-gray-200 transition-all">
            Pesquisar
          </button>
        </div>
      </div>

      {/* Vehicle Grid */}
      <section className="container mx-auto px-6 mt-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2 uppercase">Stock <span className="text-blue-600">Disponível</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Mostrando os veículos mais exclusivos</p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-10 bg-white/10"></div>
          <span className="text-blue-600 font-black text-sm uppercase tracking-widest">3 Veículos Encontrados</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {vehicles.map((v) => (
            <div key={v.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#111] border border-white/5 transition-all duration-500 group-hover:border-blue-600/50 group-hover:shadow-[0_0_50px_rgba(37,99,235,0.15)]">
                <img
                  src={v.images}
                  alt={v.make}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <span className="text-blue-500 font-black text-xs uppercase tracking-[0.2em] mb-2 block">{v.year} — {v.fuelType}</span>
                      <h3 className="text-4xl font-black tracking-tighter leading-none mb-1">{v.make}</h3>
                      <p className="text-xl text-gray-400 font-bold tracking-tight uppercase">{v.model}</p>
                    </div>
                    <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div className="flex items-center text-sm font-bold text-gray-300">
                      <Gauge className="w-4 h-4 mr-2 text-blue-500" />
                      {v.mileage.toLocaleString()} KM
                    </div>
                    <div className="flex items-center text-sm font-bold text-gray-300">
                      <Car className="w-4 h-4 mr-2 text-blue-500" />
                      {v.transmission}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-3xl font-black tracking-tighter text-white">
                      {v.price.toLocaleString()}<span className="text-blue-600 text-xl">€</span>
                    </span>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
