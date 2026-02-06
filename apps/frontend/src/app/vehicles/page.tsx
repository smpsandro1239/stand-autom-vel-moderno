import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function VehiclesPage() {
  const mockVehicles = [
    { id: '1', make: 'Tesla', model: 'Model 3', price: 45000, year: 2023, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=400' },
    { id: '2', make: 'BMW', model: 'iX', price: 500, year: 2022, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Veículos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockVehicles.map((v) => (
          <Card key={v.id}>
            <img src={v.image} alt={v.model} className="w-full h-48 object-cover" />
            <CardContent>
              <h2 className="text-xl font-bold">{v.make} {v.model}</h2>
              <p className="text-gray-600">{v.year}</p>
              <p className="text-primary font-bold text-lg mt-2">{v.price.toLocaleString()} €</p>
              <Button className="w-full mt-4">Ver Detalhes</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
