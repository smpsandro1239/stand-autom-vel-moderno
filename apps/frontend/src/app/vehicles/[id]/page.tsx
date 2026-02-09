'use client';

import { useVehicle } from '@/hooks/useVehicles';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';
import { sdk } from '@/lib/sdk';

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const { data: vehicle, isLoading } = useVehicle(params.id);
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLeadStatus('sending');
    const formData = new FormData(e.currentTarget);

    try {
      await sdk.leads.create({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: `Interesse no veículo ${vehicle.make} ${vehicle.model}`,
        vehicleId: vehicle.id,
      });
      setLeadStatus('success');
    } catch (error) {
      console.error(error);
      setLeadStatus('idle');
    }
  };

  if (isLoading) return <div className="max-w-7xl mx-auto px-4 py-20 text-center animate-pulse">Carregando detalhes...</div>;
  if (!vehicle) return <div className="max-w-7xl mx-auto px-4 py-20 text-center">Veículo não encontrado.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Gallery & Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-inner">
            <img
              src={vehicle.images?.[0] || 'https://via.placeholder.com/1200x675?text=Destaque'}
              alt={vehicle.model}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-extrabold uppercase">{vehicle.make} {vehicle.model}</h1>
              <span className="text-3xl font-bold text-blue-700">
                {vehicle.price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
              </span>
            </div>

            <div className="flex gap-6 text-gray-600 border-y py-4 mb-6">
              <span>📅 {vehicle.year}</span>
              <span>🛣️ {vehicle.mileage.toLocaleString()} km</span>
              <span>⛽ Diesel</span>
              <span>🕹️ Manual</span>
            </div>

            <h3 className="text-xl font-bold mb-3">Descrição</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {vehicle.description || 'Nenhuma descrição fornecida para este veículo.'}
            </p>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            {leadStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Pedido Enviado!</h3>
                <p className="text-gray-600">Um dos nossos consultores entrará em contacto em breve.</p>
                <Button variant="link" onClick={() => setLeadStatus('idle')} className="mt-4">Enviar outro pedido</Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4">Tenho Interesse</h3>
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome Completo</label>
                    <Input name="name" required placeholder="Ex: João Silva" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input name="email" type="email" required placeholder="joao@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensagem (Opcional)</label>
                    <textarea
                      className="w-full border rounded-md p-2 text-sm min-h-[100px]"
                      placeholder="Gostaria de agendar um test-drive..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={leadStatus === 'sending'}
                  >
                    {leadStatus === 'sending' ? 'A enviar...' : 'Solicitar Informações'}
                  </Button>
                </form>
              </>
            )}
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-100">
            <h3 className="font-bold mb-2">Precisa de Ajuda?</h3>
            <p className="text-sm text-gray-600 mb-4">Fale diretamente com um dos nossos especialistas via WhatsApp ou Telefone.</p>
            <Button variant="outline" className="w-full bg-white">📞 800 123 456</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
