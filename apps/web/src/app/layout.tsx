import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

export const metadata = {
  title: 'StandPro | Veículos Premium de Performance',
  description: 'O maior stock de veículos exclusivos e certificados em Portugal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="container mx-auto px-6 h-24 flex justify-between items-center">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-12 h-12 bg-gray-900 rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl group-hover:bg-blue-600 transition-colors shadow-lg">P</div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-2xl tracking-tighter uppercase">Stand<span className="text-blue-600">Pro</span></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Performance</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex space-x-10 font-black text-[11px] uppercase tracking-widest text-gray-400">
                <a href="/" className="hover:text-blue-600 transition-colors text-gray-900 border-b-2 border-blue-600 pb-1">Catálogo</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Serviços</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Institucional</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Contactos</a>
              </div>

              <div className="h-6 w-[1px] bg-gray-100 mx-4"></div>

              <a href="/login" className="bg-gray-900 text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-200">
                Acesso Reservado
              </a>
            </div>

            <button className="lg:hidden w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-100 py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
               <div>
                  <div className="font-black text-xl uppercase tracking-tighter mb-2">Stand<span className="text-blue-600">Pro</span></div>
                  <p className="text-gray-400 text-sm font-medium">A excelência automóvel ao seu alcance.</p>
               </div>
               <div className="flex space-x-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <a href="#" className="hover:text-blue-600">Privacidade</a>
                  <a href="#" className="hover:text-blue-600">Termos</a>
                  <a href="#" className="hover:text-blue-600">Cookies</a>
               </div>
               <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 StandPro Premium Performance. Lisboa, PT.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
