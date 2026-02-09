'use client';

import { Car, Fuel, Gauge, Euro, Search, Filter } from 'lucide-react';

const vehicles = [
  {
    id: '1',
    make: 'Porsche',
    model: '911 Carrera S',
    year: 2024,
    price: 185000,
    mileage: 1200,
    fuelType: 'GASOLINA',
    transmission: 'PDK',
    description: 'Performance lendária num estado imaculado. Extras GTS e interior em pele Bordeaux.',
    images: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model 3 Performance',
    year: 2024,
    price: 54900,
    mileage: 0,
    fuelType: 'ELÉCTRICO',
    transmission: 'AUTO',
    description: 'O futuro da mobilidade elétrica. 0-100km/h em 3.1 segundos.',
    images: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2023,
    price: 112000,
    mileage: 8500,
    fuelType: 'GASOLINA',
    transmission: 'M-AUTO',
    description: 'Domínio absoluto na estrada. Pacote exterior em carbono M.',
    images: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
  }
];

export default function Home() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-6xl font-black text-gray-900 tracking-tighter mb-4">
            Stock <span className="text-blue-600">Premium</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-xl font-medium">
            A seleção mais exclusiva de veículos de performance e luxo em Portugal.
          </p>
        </div>

        <div className="flex space-x-3">
           <button className="flex items-center space-x-2 bg-white border border-gray-100 px-8 py-4 rounded-3xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
             <Filter className="w-5 h-5" />
             <span>Filtros Avançados</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-50 flex flex-col">
            <div className="relative h-80 overflow-hidden">
              <img
                src={vehicle.images}
                alt={vehicle.make}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-900 shadow-2xl">
                {vehicle.year}
              </div>
            </div>

            <div className="p-10 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {vehicle.make}
                  </h2>
                  <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
                    {vehicle.model}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-gray-900">
                    {vehicle.price.toLocaleString()}€
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-8 border-y border-gray-50 mb-8">
                <div className="flex items-center text-sm font-bold text-gray-600">
                  <Gauge className="w-5 h-5 mr-3 text-blue-600" />
                  {vehicle.mileage.toLocaleString()} km
                </div>
                <div className="flex items-center text-sm font-bold text-gray-600">
                  <Fuel className="w-5 h-5 mr-3 text-blue-600" />
                  {vehicle.fuelType}
                </div>
                <div className="flex items-center text-sm font-bold text-gray-600">
                  <Car className="w-5 h-5 mr-3 text-blue-600" />
                  {vehicle.transmission}
                </div>
                <div className="flex items-center text-sm font-bold text-gray-600">
                  <Euro className="w-5 h-5 mr-3 text-blue-600" />
                  Financiamento
                </div>
              </div>

              <button className="mt-auto w-full bg-gray-900 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-50">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
