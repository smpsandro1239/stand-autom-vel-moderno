import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stand Automóvel Moderno',
  description: 'Venda e Aluguer de Veículos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <nav className="p-4 bg-gray-900 text-white flex justify-between">
          <div className="font-bold text-xl">StandModerno</div>
          <div className="space-x-4">
            <a href="/">Catálogo</a>
            <a href="/login">Login</a>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
