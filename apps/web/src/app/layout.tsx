import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

export const metadata = {
  title: 'StandPro | Veículos de Performance',
  description: 'O catálogo mais exclusivo de veículos premium em Portugal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#050505]/60 backdrop-blur-2xl border-b border-white/5">
          <div className="container mx-auto px-6 h-24 flex justify-between items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-all">P</div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter uppercase leading-none">Stand<span className="text-blue-600 italic">Pro</span></span>
                <span className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-500">Performance</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex space-x-10 font-black text-[10px] uppercase tracking-[0.2em] text-gray-500">
                <a href="/" className="hover:text-blue-600 transition-colors text-white">Catálogo</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Vender</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Serviços</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Clube</a>
              </div>

              <a href="/login" className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                Área Restrita
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
