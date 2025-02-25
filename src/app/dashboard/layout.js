'use client'

import { usePathname } from 'next/navigation';
import '../styles/dashboard.css';

export default function Layout({ children }) {
    const pathname = usePathname();
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold">Menu</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="/dashboard/Calendario" className="block p-2 hover:bg-gray-700">Calendario</a></li>
          <li><a href="/dashboard/Empleados" className="block p-2 hover:bg-gray-700">Empleados</a></li>
          <li><a href="/dashboard/Reportes" className="block p-2 hover:bg-gray-700">Reportes</a></li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
