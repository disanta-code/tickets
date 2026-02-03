package com.tickets.mi_web_app.models;

import jakarta.persistence.*; // Importamos las herramientas de JPA
import lombok.Data; // Esto nos ahorra escribir Getters y Setters

@Entity // 1. Le dice a JPA: "Esta clase es una tabla en la DB"
@Table(name = "usuarios") // 2. Opcional: define el nombre de la tabla
@Data // 3. Genera automáticamente los métodos Get/Set gracias a Lombok
public class Usuario {

    @Id // 4. Define que este campo es la Llave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    @Column(nullable = false, unique = true) 
    private String username;

    @Column(nullable = false)
    private String password;
    private String email; 
}