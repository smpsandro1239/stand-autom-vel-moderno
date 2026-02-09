import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StandPro | Veículos Premium',
  description: 'A melhor seleção de veículos de luxo e performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="container mx-auto px-4 h-20 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white font-black text-xl">S</div>
              <span className="font-black text-2xl tracking-tighter">Stand<span className="text-blue-600">Pro</span></span>
            </div>
            <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-widest text-gray-500">
              <a href="/" className="hover:text-blue-600 transition-colors">Catálogo</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Sobre Nós</a>
            </div>
            <div>
              <a href="/login" className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
                Área de Membro
              </a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 min-h-screen">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-100 py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">© 2026 StandPro Premium Vehicles. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
