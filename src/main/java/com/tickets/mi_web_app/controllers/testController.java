package com.tickets.mi_web_app.controllers; // Asegúrate que esto sea igual a tu carpeta

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000") // Permite que React (puerto 3000) hable con Java
@RestController
public class testController {

    @GetMapping("/api/tickets")
    public List<Map<String, String>> getTickets() {
        // Esto crea una lista de prueba para que React la reciba como JSON
        return List.of(
            Map.of("id", "1", "asunto", "Falla de internet", "estado", "Abierto"),
            Map.of("id", "2", "asunto", "Cambio de tóner", "estado", "En Proceso"),
            Map.of("id", "3", "asunto", "Instalación de Software", "estado", "Cerrado")
        );
    }
}