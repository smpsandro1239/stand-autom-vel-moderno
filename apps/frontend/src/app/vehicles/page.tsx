'use client';

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useVehicles } from "@/hooks/useVehicles";

export default function VehiclesPage() {
  const { data: vehicles, isLoading, error } = useVehicles();

  if (isLoading) return <div className="p-8 text-center">A carregar veículos...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Erro ao carregar veículos.</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Veículos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles?.map((v: any) => (
          <Card key={v.id}>
            <img
              src={v.images?.[0] || 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=400'}
              alt={v.model}
              className="w-full h-48 object-cover"
            />
            <CardContent>
              <h2 className="text-xl font-bold">{v.make} {v.model}</h2>
              <p className="text-gray-600">{v.year}</p>
              <p className="text-primary font-bold text-lg mt-2">{v.price?.toLocaleString()} €</p>
              <Button className="w-full mt-4">Ver Detalhes</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
