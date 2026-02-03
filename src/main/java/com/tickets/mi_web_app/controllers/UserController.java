package com.tickets.mi_web_app.controllers;

import com.tickets.mi_web_app.models.Usuario;
import com.tickets.mi_web_app.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
// IMPORTANTE: Esto permite que tu React (puerto 3000) se comunique con Spring (8080)
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Método para obtener todos los usuarios (opcional, para probar)
    @GetMapping
    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    // MÉTODO PARA INSERTAR: Recibe el JSON del formulario y lo guarda en MySQL
    @PostMapping("/registrar")
    public Usuario registrarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}