package com.tickets.mi_web_app;

import jakarta.persistence.*; // Importamos las herramientas de JPA
import lombok.Data; // Esto nos ahorra escribir Getters y Setters

@Entity // 1. Le dice a JPA: "Esta clase es una tabla en la DB"
@Table(name = "usuarios") // 2. Opcional: define el nombre de la tabla
@Data // 3. Genera automáticamente los métodos Get/Set gracias a Lombok
public class Usuario {

    @Id // 4. Define que este campo es la Llave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 5. El ID se incrementa solo (1, 2, 3...)
    private Long id;

    @Column(nullable = false, unique = true) // 6. No puede ser nulo y no se puede repetir
    private String username;

    @Column(nullable = false)
    private String password;

    private String correo; // Ejemplo: 'ADMIN' o 'TECNICO'
}