'use client';

import { useAuth } from '@/hooks/useAuth';
import { useUserVehicles } from '@/hooks/useVehicles';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PlusCircle, Car, MessageSquare, Calendar } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const { data: vehicles, isLoading } = useUserVehicles(user?.id);

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo de volta, {user?.name}</p>
        </div>
        <Button className="flex items-center gap-2">
          <PlusCircle size={20} />
          Adicionar Veículo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <Car size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Meus Veículos</p>
              <p className="text-2xl font-bold">{vehicles?.length || 0}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <MessageSquare size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Leads Ativas</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Alugueres Ativos</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6">A Minha Garagem</h2>

      {isLoading ? (
        <p>A carregar veículos...</p>
      ) : vehicles?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle: any) => (
            <Card key={vehicle.id}>
              <CardContent className="p-0">
                <img
                  src={vehicle.imageUrl || 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'}
                  alt={vehicle.model}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{vehicle.make} {vehicle.model}</h3>
                  <p className="text-gray-600 text-sm">{vehicle.year} • {vehicle.mileage} km</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-primary">{vehicle.price.toLocaleString()} €</span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded uppercase font-bold">{vehicle.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
          <p className="text-gray-500">Ainda não tem veículos listados.</p>
          <Button variant="outline" className="mt-4">Listar o meu primeiro veículo</Button>
        </div>
      )}
    </div>
  );
}
