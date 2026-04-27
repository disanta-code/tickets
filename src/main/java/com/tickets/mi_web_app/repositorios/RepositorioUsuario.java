package com.tickets.mi_web_app.repositorios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tickets.mi_web_app.modelos.Usuario;

@Repository
public interface RepositorioUsuario extends JpaRepository<Usuario, Long> {
    boolean existsByUsername(String username);
    
}