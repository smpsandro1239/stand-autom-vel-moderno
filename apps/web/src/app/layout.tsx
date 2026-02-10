import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

export const metadata = {
  title: 'StandPro | Luxury Performance Vehicles',
  description: 'O catálogo mais exclusivo de veículos premium em Portugal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-[#050505] text-white antialiased selection:bg-blue-600 selection:text-white`}>
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[#050505]/40 backdrop-blur-2xl border-b border-white/5">
          <div className="container mx-auto px-6 h-24 flex justify-between items-center">
            <a href="/" className="flex items-center space-x-3 group overflow-hidden">
              <div className="w-12 h-12 bg-blue-600 rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-all duration-500">P</div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-2xl tracking-tighter uppercase leading-none">Stand<span className="text-blue-600 italic">Pro</span></span>
                <span className="text-[7px] font-black uppercase tracking-[0.6em] text-gray-500">Performance Elite</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center space-x-12">
              <div className="flex space-x-10 font-black text-[10px] uppercase tracking-[0.2em] text-gray-500">
                <a href="/" className="hover:text-white transition-colors text-white border-b-2 border-blue-600 pb-1">Catálogo</a>
                <a href="#" className="hover:text-white transition-colors">Vender</a>
                <a href="#" className="hover:text-white transition-colors">Clube</a>
                <a href="#" className="hover:text-white transition-colors">Suporte</a>
              </div>

              <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

              <a href="/login" className="relative group">
                <div className="absolute inset-0 bg-blue-600 blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Área Reservada
                </div>
              </a>
            </nav>

            <button className="lg:hidden w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-[#0a0a0a] border-t border-white/5 py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
               <div>
                  <div className="font-black text-2xl uppercase tracking-tighter mb-4">Stand<span className="text-blue-600 italic">Pro</span></div>
                  <p className="text-gray-500 text-sm font-medium max-w-sm">A excelência automóvel elevada ao seu expoente máximo. Veículos certificados e acompanhamento personalizado.</p>
               </div>
               <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest text-gray-600">
                  <a href="#" className="hover:text-blue-600 transition-all">Privacidade</a>
                  <a href="#" className="hover:text-blue-600 transition-all">Termos</a>
                  <a href="#" className="hover:text-blue-600 transition-all">Imprensa</a>
               </div>
               <div className="text-right flex flex-col items-center md:items-end">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">© 2026 StandPro Premium Performance. Lisboa, PT.</p>
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-all cursor-pointer"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></div>
                  </div>
               </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
