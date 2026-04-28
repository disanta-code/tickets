package com.tickets.mi_web_app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filtroSeguridad(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> {})

            .authorizeHttpRequests(auth -> auth

                // públicos
                .requestMatchers(
                        "/iniciar-sesion",
                        "/error"
                ).permitAll()

                // verificación de sesión
                .requestMatchers(
                        "/api/autenticacion/verificar"
                ).authenticated()

                // todo lo demás protegido
                .anyRequest().authenticated()
            )

            .formLogin(form -> form

                // endpoint de login en español
                .loginProcessingUrl("/iniciar-sesion")

                // página de login en español
                .loginPage("/iniciar-sesion")

                // redirección si login correcto
                .defaultSuccessUrl(
                        "http://localhost:3000/principal",
                        true
                )

                // redirección si falla
                .failureUrl(
                        "http://localhost:3000/iniciar-sesion?error"
                )

                .permitAll()
            )

            .logout(logout -> logout

                .logoutUrl("/cerrar-sesion")

                .logoutSuccessUrl(
                        "http://localhost:3000/iniciar-sesion"
                )
            );

        return http.build();
    }

    // Usuario de prueba
    @Bean
    public UserDetailsService servicioUsuarios() {

        UserDetails usuario = User
                .withUsername("admin")
                .password("{noop}1234")
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(usuario);
    }

}