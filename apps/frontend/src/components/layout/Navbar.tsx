'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-primary">
        StandPro
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/vehicles" className="hover:text-primary transition-colors">Veículos</Link>
        <Link href="/vehicles?type=RENTAL" className="hover:text-primary transition-colors">Aluguer</Link>

        {user ? (
          <>
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-medium">Olá, {user.name}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors"
              >
                Sair
              </button>
            </div>
          </>
        ) : (
          <Link href="/auth/login" className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-semibold">
            Entrar
          </Link>
        )}
      </div>
    </nav>
  );
};
