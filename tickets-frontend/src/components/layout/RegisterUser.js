import React, { useState } from "react";
import { register } from "../../services/registerUserService.js";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      await register({ username, email, password });
      setMsg("✅ Usuario registrado correctamente");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMsg(`❌ ${err.message || "Error al registrar"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Crear Cuenta</h2>
        <p>Ingresa los datos para registrarte en el sistema</p>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              placeholder="Ej: JuanPerez"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>

          <button type="submit" className="btn-register" disabled={loading}>
            {loading ? "Registrando..." : "Registrar Usuario"}
          </button>

          {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
