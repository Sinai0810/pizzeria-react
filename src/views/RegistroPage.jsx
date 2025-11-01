import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext'; 

const RegistroPage = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const validarDatos = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !apellido.trim() || !email.trim() || !password.trim()) {
      return Swal.fire({
        title: '¡Campos vacíos!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Entendido',
      });
    }

    if (password.length < 6) {
      return Swal.fire({
        title: '¡Contraseña débil!',
        text: 'Debe tener al menos 6 caracteres.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
      });
    }

    if (password !== confirmarPassword) {
      return Swal.fire({
        title: '¡Contraseñas no coinciden!',
        text: 'Revisa que ambas contraseñas coincidan.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
      });
    }

    // Enviamos todos los datos al contexto para crear el usuario
    const success = await register(email, password, nombre, apellido);


    if (success) {
      Swal.fire('¡Registro exitoso!', 'Ahora puedes iniciar sesión.', 'success');
      navigate('/login');
    } else {
      Swal.fire('Error', 'No se pudo crear la cuenta.', 'error');
    }
  };

  return (
    <section className='container-register'>
      <div className='container2-register'>
        <div>
          <h1 className='tittle-register'>¡Únete a la familia Mamma Mia!</h1>
          <p className='subtittle-register'>
            Crea tu cuenta y comienza a disfrutar de nuestras pizzas artesanales, ofertas exclusivas y mucho más.
            ¡Porque más que pizza, son momentos! 🍕
          </p>
        </div>
        <form className='formulario' onSubmit={validarDatos}>
          <div className='form-group'>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type="password"
              name="confirmarPassword"
              placeholder="Confirmar Contraseña"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
            />
          </div>

          <div className='container-btn'>
            <button className='btn-registro' type="submit">CREAR CUENTA</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistroPage;
