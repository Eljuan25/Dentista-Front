
import '../styles/dashboard.css';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold">Menu</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="/dashboard" className="block p-2 hover:bg-gray-700">Inicio</a></li>
          <li><a href="/dashboard/citas" className="block p-2 hover:bg-gray-700">Mis Citas</a></li>
          <li><a href="/dashboard/perfil" className="block p-2 hover:bg-gray-700">Perfil</a></li>
          <li><a href="/dashboard/mensajes" className="block p-2 hover:bg-gray-700">Mensajes</a></li>
          <li><a href="/dashboard/configuracion" className="block p-2 hover:bg-gray-700">Configuración</a></li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
