import { dividerClasses } from "@mui/material";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Bienvenido</h1>
      <p className="mt-2 text-gray-600">Aquí puedes gestionar tus citas y perfil.</p>

      {/* Secciónes*/}
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
    </div>
  );
}
