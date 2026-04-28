"use client";

import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  username: string;
  email: string;
};

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {

    fetch("http://localhost:8080/api/usuarios", {
      method: "GET",
      credentials: "include"
    })
      .then((response) => {

        // Si Spring redirige al login
        if (response.redirected) {

          console.log("Redirigido al login");

          window.location.href = response.url;

          return null;
        }

        return response.json();
      })
      .then((data) => {

        if (data && Array.isArray(data)) {
          setUsuarios(data);
        }

      })
      .catch((error) => {

        console.error("Error al obtener usuarios:", error);

        setUsuarios([]);

      });

  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="font-semibold mb-4">
        Usuarios desde Base de Datos
      </h3>

      <div className="flex flex-col gap-3 text-sm">

        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
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