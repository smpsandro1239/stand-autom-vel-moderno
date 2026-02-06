export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catálogo de Veículos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Veículos serão injetados aqui via API */}
        <div className="border p-4 rounded shadow">
          <div className="h-40 bg-gray-200 mb-4"></div>
          <h2 className="text-xl font-semibold">Tesla Model 3</h2>
          <p className="text-gray-600">2023 - Elétrico</p>
          <p className="text-blue-600 font-bold mt-2">45.000 €</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">Ver Detalhes</button>
        </div>
      </div>
    </div>
  );
}
