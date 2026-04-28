"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();

  useEffect(() => {

    fetch("http://localhost:8080/api/autenticacion/verificar", {
      method: "GET",
      credentials: "include"
    })
      .then((response) => {

        if (response.ok) {

          // Usuario autenticado
          router.push("/principal");

        } else {

          // Usuario no autenticado
          router.push("/iniciar-sesion");

        }

      })
      .catch(() => {

        router.push("/iniciar-sesion");

      });

  }, []);

  return <p>Verificando sesión...</p>;

}