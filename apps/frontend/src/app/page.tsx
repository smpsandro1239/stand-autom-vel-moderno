'use client';

import { useVehicles } from '@/hooks/useVehicles';
import { VehicleCard } from '@/components/vehicles/VehicleCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  const { data: vehicles, isLoading } = useVehicles();
  const featured = vehicles?.slice(0, 3) || [];

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white text-center bg-gray-900">
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">O SEU PRÓXIMO CARRO ESTÁ AQUI</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">A plataforma premium para venda e aluguer de veículos em Portugal.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vehicles?type=SALE">
              <Button size="lg" className="px-8 text-lg">Comprar Agora</Button>
            </Link>
            <Link href="/vehicles?type=RENTAL">
              <Button variant="outline" size="lg" className="px-8 text-lg bg-white/10 text-white border-white hover:bg-white hover:text-black">Aluguer Flexível</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold">Destaques da Semana</h2>
            <p className="text-gray-600">Explore os veículos mais populares do nosso inventário.</p>
          </div>
          <Link href="/vehicles">
            <Button variant="outline">Ver Todos</Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] bg-gray-100 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((vehicle: any) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Garantia Total</h3>
            <p className="text-gray-600">Todos os nossos veículos passam por uma inspeção rigorosa de 150 pontos.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-2">Financiamento</h3>
            <p className="text-gray-600">Soluções de crédito à sua medida com aprovação em menos de 24 horas.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-2">Retoma</h3>
            <p className="text-gray-600">Avaliamos o seu carro atual de forma justa e transparente.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
