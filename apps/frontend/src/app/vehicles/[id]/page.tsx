'use client';

import { useVehicle } from '@/hooks/useVehicles';
import { Button } from '@/components/ui/Button';

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const { data: vehicle, isLoading, isError } = useVehicle(params.id);

  if (isLoading) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p className="text-xl">A carregar detalhes do veículo...</p>
      </div>
    );
  }

  if (isError || !vehicle) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p className="text-xl text-red-500">Erro ao carregar o veículo ou veículo não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <img
            src={vehicle.imageUrl || 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full rounded-lg shadow-lg object-cover max-h-[500px]"
          />
          <h1 className="text-4xl font-bold mt-8">{vehicle.make} {vehicle.model}</h1>
          <p className="text-xl text-gray-600">{vehicle.year} • {vehicle.mileage} km</p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Descrição</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{vehicle.description}</p>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="border p-6 rounded-lg shadow-md bg-gray-50 sticky top-8">
            <p className="text-3xl font-bold text-primary">{vehicle.price.toLocaleString()} €</p>
            <div className="space-y-4 mt-6">
              <Button className="w-full" size="lg">Contactar Vendedor</Button>
              <Button className="w-full" variant="outline" size="lg">Agendar Test Drive</Button>
            </div>
            {vehicle.type === 'RENTAL' && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-lg font-semibold mb-2">Preço por dia</p>
                <p className="text-2xl font-bold text-green-600">{(vehicle.price / 30).toFixed(2)} € / dia</p>
                <Button className="w-full mt-4" variant="primary" size="lg">Reservar Agora</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
