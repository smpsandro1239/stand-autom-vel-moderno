'use client';

import { useState } from 'react';
import { useVehicles } from '@/hooks/useVehicles';
import { useLeads, useRentals } from '@/hooks/useBusiness';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'leads' | 'rentals'>('vehicles');

  const { data: vehicles } = useVehicles();
  const { data: leads } = useLeads();
  const { data: rentals } = useRentals();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Painel de Controlo</h1>
        <div className="flex gap-2">
          <Button size="sm">Adicionar Veículo</Button>
          <Button size="sm" variant="outline">Exportar Relatórios</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <p className="text-sm font-medium text-gray-500 uppercase">Total Veículos</p>
          <p className="text-3xl font-bold">{vehicles?.length || 0}</p>
        </Card>
        <Card className="p-6 border-l-4 border-blue-500">
          <p className="text-sm font-medium text-gray-500 uppercase">Leads Pendentes</p>
          <p className="text-3xl font-bold text-blue-600">{leads?.length || 0}</p>
        </Card>
        <Card className="p-6 border-l-4 border-green-500">
          <p className="text-sm font-medium text-gray-500 uppercase">Alugueres Ativos</p>
          <p className="text-3xl font-bold text-green-600">{rentals?.length || 0}</p>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveTab('vehicles')}
            className={`pb-4 text-sm font-medium ${activeTab === 'vehicles' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
          >
            Garagem
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`pb-4 text-sm font-medium ${activeTab === 'leads' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
          >
            Leads (CRM)
          </button>
          <button
            onClick={() => setActiveTab('rentals')}
            className={`pb-4 text-sm font-medium ${activeTab === 'rentals' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
          >
            Reservas
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        {activeTab === 'vehicles' && (
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4">Veículo</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Preço</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {vehicles?.map((v: any) => (
                <tr key={v.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-bold">{v.make} {v.model}</p>
                    <p className="text-sm text-gray-500">{v.year} • {v.mileage}km</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${v.type === 'SALE' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                      {v.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {v.price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="link" size="sm">Editar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'leads' && (
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Veículo de Interesse</th>
                <th className="px-6 py-4">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {leads?.map((l: any) => (
                <tr key={l.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-bold">{l.name}</p>
                    <p className="text-sm text-gray-500">{l.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    {l.vehicle?.make} {l.vehicle?.model}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'rentals' && (
          <div className="p-12 text-center text-gray-500">
            Nenhuma reserva ativa no momento.
          </div>
        )}
      </div>
    </div>
  );
}
