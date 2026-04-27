package com.tickets.mi_web_app.servicios;

import java.util.List;

import com.tickets.mi_web_app.modelos.Usuario;

public interface ServicioUsuario {

    // Obtener todos los usuarios
    List<Usuario> getUsers();

}