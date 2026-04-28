"use client";

export default function PaginaInicioSesion() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-yellow-100">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        {/* Título */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-purple-600">
            Iniciar sesión
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Accede a tu cuenta del sistema
          </p>
        </div>

        {/* Formulario */}
        <form
          method="POST"
          action="http://localhost:8080/iniciar-sesion"
          className="flex flex-col gap-4"
        >

          {/* Usuario */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Usuario
            </label>

            <input
              type="text"
              name="username"
              placeholder="Ingresa tu usuario"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Contraseña
            </label>

            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Iniciar sesión
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Sistema de gestión de tickets
        </div>

      </div>

    </div>
  );

}