export default function DashboardPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-600">Meus Veículos</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-600">Leads Ativas</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-600">Alugueres Ativos</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </div>
    </div>
  );
}
