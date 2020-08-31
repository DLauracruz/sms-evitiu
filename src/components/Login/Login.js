import React from "react";

import "./Login.scss";

export const Login = () => {
  return (
    <div className="Login">
      <div className="login">
        <div className="action">
          <legend>Inicia sesión</legend>
          <div className="campo">
            <input type="text" id="usuario" />
            <label>Email o número de teléfono</label>
          </div>
          <div className="campo">
            <input type="password" id="password" />
            <label>Contraseña</label>
            <span>Mostrar</span>
          </div>
          <div className="submit">
            <input type="submit" value="Iniciar sesión" />
          </div>
        </div>
      </div>
    </div>
  );
};
