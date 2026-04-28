package com.tickets.mi_web_app.servicios;

import com.tickets.mi_web_app.modelos.usuario;
import com.tickets.mi_web_app.repositorios.RepositorioUsuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioUsuarioImpl implements ServicioUsuario {

    @Autowired
    private RepositorioUsuario userRepository;

    @Override
    public List<usuario> getUsers() {
        return userRepository.findAll();
    }

}