package com.tickets.mi_web_app.controladores;
import com.tickets.mi_web_app.modelos.usuario;
import com.tickets.mi_web_app.servicios.ServicioUsuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3000")
public class ControladorUsuario {

    @Autowired
    private ServicioUsuario usuarioService;

    // GET: obtener todos los usuarios
    @GetMapping
    public List<usuario> obtenerUsuarios() {
        return usuarioService.getUsers();
    }

}