import Link from 'next/link';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface VehicleCardProps {
  vehicle: any;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-100 relative">
        <img
          src={vehicle.images?.[0] || 'https://via.placeholder.com/400x225?text=Sem+Imagem'}
          alt={vehicle.model}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
          {vehicle.type === 'SALE' ? 'VENDA' : 'ALUGUER'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold uppercase">{vehicle.make} {vehicle.model}</h3>
        <p className="text-gray-600 text-sm mb-4">{vehicle.year} • {vehicle.mileage.toLocaleString()} km</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-700">
            {vehicle.price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
          </span>
          <Link href={`/vehicles/${vehicle.id}`}>
            <Button size="sm">Ver Detalhes</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
