package com.tickets.mi_web_app.controladores;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/autenticacion")
public class ControladorAutenticacion {

    @GetMapping("/verificar")
    public ResponseEntity<String> verificarAutenticacion(
            Authentication autenticacion) {

        // Devuelve el nombre del usuario autenticado
        String usuario = autenticacion.getName();

        return ResponseEntity.ok(usuario);

    }

}