// 1. Importaciones
import React from 'react';
import '../../assets/styles/Home/NavBarHome.css';

function NavBarHome() {
  return (
    <header>
      <nav aria-label="Barra de navegación principal">
        
        {/* Logo / Título */}
        <div>
          <h1>TicketSystem</h1>
        </div>

        {/* Menú de navegación */}
        <ul>
          <li>
            <button type="button">Inicio</button>
          </li>

          <li>
            <button type="button">Mis Tickets</button>
          </li>

          <li>
            <button type="button">Cerrar Sesión</button>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default NavBarHome;
