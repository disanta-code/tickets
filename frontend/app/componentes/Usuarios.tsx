"use client";

import { useEffect, useState } from "react";

export default function Usuarios() {

  // Estado donde se guardarán los usuarios
  const [usuarios, setUsuarios] = useState([]);

  // Conexion a la API para obtener los usuarios al cargar el componente
  useEffect(() => {

    fetch("http://localhost:8080/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuarios:", data);
        setUsuarios(data);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });

  }, []);
// --------------------------------------------------------------------------
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="font-semibold mb-4">
        Usuarios desde Base de Datos
      </h3>

      <div className="flex flex-col gap-3 text-sm">

        {usuarios.map((usuario, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-2"
          >
            <span className="font-medium">
              {usuario.username} 
            </span>

            <span className="text-gray-500">
              {usuario.email}

            </span>
          </div>
        ))}

      </div>

    </div>
  );
}