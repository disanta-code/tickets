package com.tickets.mi_web_app.controllers;

import com.tickets.mi_web_app.models.Usuario;
import com.tickets.mi_web_app.repositories.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class RegisterController {

    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public RegisterController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public static class RegisterRequest {
        public String username;
        public String email;
        public String password;
    }

    @PostMapping
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        System.out.println("🔥 LLEGO REGISTER: " + (req != null ? req.email : "null"));

        if (req == null || isBlank(req.username) || isBlank(req.email) || isBlank(req.password)) {
            return ResponseEntity.badRequest().body("username, email y password son obligatorios");
        }

        if (usuarioRepository.existsByUsername(req.username)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El username ya existe");
        }
        if (usuarioRepository.existsByEmail(req.email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El email ya existe");
        }

        Usuario u = new Usuario();
        u.setUsername(req.username.trim());
        u.setEmail(req.email.trim());
        u.setPassword(passwordEncoder.encode(req.password));

        usuarioRepository.save(u);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    // (Opcional) Para que en navegador no te salga 405
    @GetMapping
    public ResponseEntity<String> ping() {
        return ResponseEntity.ok("Register endpoint OK. Use POST to register.");
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}
