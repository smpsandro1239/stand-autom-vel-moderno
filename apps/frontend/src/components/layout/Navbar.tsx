import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-primary">
        StandPro
      </Link>
      <div className="space-x-4">
        <Link href="/vehicles" className="hover:text-primary">Veículos</Link>
        <Link href="/rentals" className="hover:text-primary">Aluguer</Link>
        <Link href="/auth/login" className="px-4 py-2 bg-primary text-white rounded-md">Entrar</Link>
      </div>
    </nav>
  );
};
