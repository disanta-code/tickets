package com.tickets.mi_web_app.controllers; // Asegúrate que esto sea igual a tu carpeta

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @GetMapping("/")
    public String inicio() {
        return "<html>" +
               "<body style='font-family: sans-serif; text-align: center; margin-top: 50px;'>" +
               "<h1 style='color: #2c3e50;'>Sistema de tickets</h1>" +
               "</body>" +
               "</html>";
    }
}