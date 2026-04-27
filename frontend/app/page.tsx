"use client";

import {
  Home,
  Ticket,
  ClipboardList,
  Clock,
  CheckCircle,
  Settings,
  Plus,
  Search,
  User,
  MapPinned
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-200 via-blue-100 to-yellow-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 px-6 py-5 border-b">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            ✓
          </div>
          <span className="text-xl font-semibold text-purple-600">
            TaskManager
          </span>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 p-4 flex-1">

          <MenuItem icon={<Home size={18} />} label="Inicio" active />
          <MenuItem icon={<MapPinned size={18} />} label="Mis Tickets" />
          <MenuItem icon={<ClipboardList size={18} />} label="Asignados" />
          <MenuItem icon={<Clock size={18} />} label="En Proceso" />
          <MenuItem icon={<CheckCircle size={18} />} label="Resueltos" />
          <MenuItem icon={<Settings size={18} />} label="Configuración" />

        </nav>

        <div className="p-4">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Ticket
          </button>
        </div>

      </aside>

      {/* CONTENT */}
      <div className="flex flex-col flex-1">

        {/* NAVBAR */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-6 font-medium">

            <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
              Dashboard
            </span>

            <span className="text-gray-500">Mis Tickets</span>
            <span className="text-gray-500">Proyectos</span>
            <span className="text-gray-500">Reportes</span>

          </div>

          <div className="flex items-center gap-4">

            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
              <Search size={18} />
              <input
                className="bg-transparent outline-none ml-2"
                placeholder="Buscar..."
              />
            </div>

            <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center">
              <User />
            </div>

          </div>

        </header>

        {/* MAIN */}
        <main className="p-6 flex flex-col gap-6">

          {/* STATS */}
          <div className="grid grid-cols-4 gap-6">

            <StatCard
              title="Abiertos"
              value="5"
              color="bg-blue-400"
            />

            <StatCard
              title="En Proceso"
              value="8"
              color="bg-orange-400"
            />

            <StatCard
              title="En Espera"
              value="2"
              color="bg-purple-400"
            />

            <StatCard
              title="Resueltos"
              value="18"
              color="bg-green-400"
            />

          </div>

          {/* TICKETS + ACTIVITY */}
          <div className="grid grid-cols-4 gap-6">

            {/* TABLE */}
            <div className="col-span-3 bg-white rounded-xl shadow p-6">

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-semibold">
                  Mis Tickets
                </h2>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Plus size={18} />
                  Crear Ticket
                </button>

              </div>

              <table className="w-full text-left">

                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="py-3">ID</th>
                    <th>Title</th>
                    <th>Estado</th>
                    <th>Prioridad</th>
                    <th>Asignado A</th>
                  </tr>
                </thead>

                <tbody>

                  <TicketRow
                    id="#1024"
                    title="Problema con el servidor"
                    status="En Proceso"
                    priority="Alta"
                    user="Carlos M."
                  />

                  <TicketRow
                    id="#1018"
                    title="Solicitud de acceso a VPN"
                    status="Abierto"
                    priority="Media"
                    user="Laura G."
                  />

                  <TicketRow
                    id="#1007"
                    title="Error en la página web"
                    status="Pendiente"
                    priority="Alta"
                    user="Ana P."
                  />

                  <TicketRow
                    id="#1003"
                    title="Actualización de software"
                    status="Resuelto"
                    priority="Baja"
                    user="Sergio L."
                  />

                  <TicketRow
                    id="#1001"
                    title="Solicitud de nuevo equipo"
                    status="En Proceso"
                    priority="Alta"
                    user="Daniel R."
                  />

                </tbody>

              </table>

            </div>

            {/* ACTIVITY */}
            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold mb-4">
                Actividades Recientes
              </h3>

              <div className="flex flex-col gap-4 text-sm">

                <Activity
                  text='Ana cerró el ticket "Error en la página web"'
                  time="hace 1 hora"
                />

                <Activity
                  text='Carlos asignó un ticket a "Laura G."'
                  time="hace 2 horas"
                />

                <Activity
                  text='Daniel comentó en "Solicitud de nuevo equipo"'
                  time="hace 3 horas"
                />

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

/* COMPONENTES */

function MenuItem({
  icon,
  label,
  active = false,
}: any) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
        active
          ? "bg-gray-100 font-semibold"
          : "hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}

function StatCard({
  title,
  value,
  color,
}: any) {
  return (
    <div
      className={`text-white p-6 rounded-xl shadow ${color}`}
    >
      <div className="text-sm opacity-90">
        {title}
      </div>
      <div className="text-3xl font-bold">
        {value}
      </div>
    </div>
  );
}

function TicketRow({
  id,
  title,
  status,
  priority,
  user,
}: any) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3">{id}</td>
      <td className="font-medium text-blue-600">
        {title}
      </td>
      <td>
        <span className="bg-orange-200 text-orange-700 px-3 py-1 rounded-full text-sm">
          {status}
        </span>
      </td>
      <td>
        <span className="bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm">
          {priority}
        </span>
      </td>
      <td>{user}</td>
    </tr>
  );
}

function Activity({
  text,
  time,
}: any) {
  return (
    <div className="border-b pb-2">
      <div>{text}</div>
      <div className="text-gray-400">
        {time}
      </div>
    </div>
  );
}