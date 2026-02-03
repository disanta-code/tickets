import React from 'react';


const Login = () => {
    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Crear Cuenta</h2>
                <p>Ingresa los datos de inicio de sesion</p>
                
                <form>
                    <div className="form-group">
                        <label>Nombre de Usuario</label>
                        <input type="text" placeholder="Ej: JuanPerez" />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" placeholder="********" />
                    </div>

                    <button type="button" className="btn-register">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;