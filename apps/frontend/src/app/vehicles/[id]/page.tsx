export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  // Mock data
  const vehicle = {
    id: params.id,
    make: 'Tesla',
    model: 'Model 3',
    price: 45000,
    year: 2023,
    mileage: 0,
    description: 'Veículo elétrico de alta performance com autonomia extendida.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <img src={vehicle.image} alt={vehicle.model} className="w-full rounded-lg shadow-lg" />
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
            <button className="w-full mt-6 bg-primary text-white py-3 rounded-md font-bold text-lg">Contactar Vendedor</button>
            <button className="w-full mt-4 border border-primary text-primary py-3 rounded-md font-bold text-lg">Agendar Test Drive</button>
          </div>
        </div>
      </div>
    </div>
  );
}
