import { dividerClasses } from "@mui/material";
import '../styles/dashboard.css';

export default function Dashboard() {
    return (
      <div className="flex h-screen">
        {/* Menú lateral */}
        <aside className="w-64 bg-gray-800 text-white p-5">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/dashboard" className="block p-2 hover:bg-gray-700">Inicio</a></li>
            <li><a href="/dashboard/citas" className="block p-2 hover:bg-gray-700">Mis Citas</a></li>
            <li><a href="/dashboard/perfil" className="block p-2 hover:bg-gray-700">Perfil</a></li>
            <li><a href="/dashboard/mensajes" className="block p-2 hover:bg-gray-700">Mensajes</a></li>
            <li><a href="/dashboard/configuracion" className="block p-2 hover:bg-gray-700">Configuracion</a></li>
          </ul>
        </aside>
  
        {/* Contenido principal */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>
          <p className="mt-2 text-gray-600">Aquí puedes gestionar tus citas y perfil.</p>
  
          {/* Sección de estadísticas */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Citas Pendientes</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Citas Completadas</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Canceladas</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
  