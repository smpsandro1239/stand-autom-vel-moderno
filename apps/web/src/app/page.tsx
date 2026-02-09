'use client';

import { useEffect, useState } from 'react';
import { Car, Fuel, Gauge, Euro } from 'lucide-react';

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
    return <div className="flex justify-center items-center h-64 text-xl">A carregar catálogo...</div>;
  }

  return (
    <div className="py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Stock Premium</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore a nossa seleção exclusiva de veículos de luxo e alta performance.
          Qualidade garantida e revisões certificadas.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img
                src={Array.isArray(vehicle.images) ? vehicle.images[0] : vehicle.images}
                alt={vehicle.make}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {vehicle.year}
              </div>
            </div>

            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{vehicle.make}</h2>
                  <p className="text-gray-500 font-medium">{vehicle.model}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-blue-600 flex items-center">
                    {vehicle.price.toLocaleString()}€
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Gauge className="w-4 h-4 mr-2 text-blue-500" />
                  {vehicle.mileage.toLocaleString()} km
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Fuel className="w-4 h-4 mr-2 text-blue-500" />
                  {vehicle.fuelType}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Car className="w-4 h-4 mr-2 text-blue-500" />
                  {vehicle.transmission}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Euro className="w-4 h-4 mr-2 text-blue-500" />
                  Financiamento
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 italic mb-6">
                "{vehicle.description}"
              </p>

              <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors duration-300">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
