export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Entrar no StandPro</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="exemplo@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="********" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md font-bold hover:bg-blue-600 transition">Entrar</button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem conta? <a href="/auth/register" className="text-primary font-bold">Registe-se</a>
        </p>
      </div>
    </div>
  );
}
