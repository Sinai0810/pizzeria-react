import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nombre, setNombre] = useState(localStorage.getItem("nombre") || "");
  const [apellido, setApellido] = useState(localStorage.getItem("apellido") || "");
  const [token, setToken] = useState(localStorage.getItem("token") || null); 
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  // Sincronizar nombre y apellido con localStorage
  useEffect(() => {
    if (nombre) localStorage.setItem("nombre", nombre);
    else localStorage.removeItem("nombre");

    if (apellido) localStorage.setItem("apellido", apellido);
    else localStorage.removeItem("apellido");
  }, [nombre, apellido]);

  // Sincronizar token y email con localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }

    if (email) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }
  }, [token, email]);

  // Actualiza todos los datos de usuario a la vez
  const setUserData = ({ nombre, apellido, email, token }) => {
    if (nombre !== undefined) setNombre(nombre);
    if (apellido !== undefined) setApellido(apellido);
    if (email !== undefined) setEmail(email);
    if (token !== undefined) setToken(token);
  };

  // Login: espera que backend retorne { nombre, apellido, email, token }
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setUserData({
          nombre: data.nombre || "",
          apellido: data.apellido || "",
          email: data.email || "",
          token: data.token || null,
        });
        return data; // retorna los datos para que el loginPage los use
      } else {
        alert(data.error || "Error al iniciar sesión");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  // Registro: igual espera { nombre, apellido, email, token } desde backend
  const register = async (email, password, nombre = "", apellido = "") => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, nombre, apellido }),
      });
      const data = await res.json();

      if (res.ok) {
        setUserData({
          nombre: data.nombre || nombre,
          apellido: data.apellido || apellido,
          email: data.email || email,
          token: data.token || null,
        });
        return true;
      } else {
        alert(data.error || "Error al registrarse");
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  const logout = () => {
    setNombre("");
    setApellido("");
    setToken(null);
    setEmail("");
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  return (
    <UserContext.Provider
      value={{
        nombre,
        apellido,
        email,
        token,
        login,
        register,
        logout,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

