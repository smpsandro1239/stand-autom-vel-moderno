'use client';

import { useSearchParams } from 'next/navigation';
import { useVehicles } from '@/hooks/useVehicles';
import { VehicleCard } from '@/components/vehicles/VehicleCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';

export default function VehiclesPage() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || '';

  const [filter, setFilter] = useState({
    type: initialType,
    search: '',
  });

  const { data: vehicles, isLoading } = useVehicles();

  const filteredVehicles = vehicles?.filter((v: any) => {
    const matchesType = filter.type ? v.type === filter.type : true;
    const matchesSearch = filter.search
      ? `${v.make} ${v.model}`.toLowerCase().includes(filter.search.toLowerCase())
      : true;
    return matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Catálogo de Veículos</h1>
          <p className="text-gray-600">Encontrados {filteredVehicles?.length || 0} veículos</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter.type === '' ? 'default' : 'outline'}
            onClick={() => setFilter({ ...filter, type: '' })}
            size="sm"
          >
            Todos
          </Button>
          <Button
            variant={filter.type === 'SALE' ? 'default' : 'outline'}
            onClick={() => setFilter({ ...filter, type: 'SALE' })}
            size="sm"
          >
            Venda
          </Button>
          <Button
            variant={filter.type === 'RENTAL' ? 'default' : 'outline'}
            onClick={() => setFilter({ ...filter, type: 'RENTAL' })}
            size="sm"
          >
            Aluguer
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <Input
          placeholder="Pesquisar marca ou modelo..."
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          className="max-w-md"
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-[350px] bg-gray-100 animate-pulse rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVehicles?.map((vehicle: any) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
          {filteredVehicles?.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-gray-500">Nenhum veículo encontrado para estes filtros.</p>
              <Button
                variant="link"
                onClick={() => setFilter({ type: '', search: '' })}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
