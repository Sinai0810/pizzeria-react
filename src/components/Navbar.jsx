import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { cartItems, getTotal } = useContext(CartContext);
  const total = getTotal();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // elimina el token y email
    navigate('/login'); // Redirige a la página de login 
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <button className='nav-btn'>🍕Inicio</button>
      </Link>

      {token ? (
        <>
          <Link to='/perfil'>
            <button className='nav-btn'>🔒Perfil</button>
          </Link>
          {token && ( <button className='nav-btn' onClick={handleLogout}>
            🔒Cerrar Sesión
          </button> )}
          
        </>
      ) : (
        <>
          <Link to='/login'>
            <button className='nav-btn'>🔐Iniciar Sesión</button>
          </Link>
          <Link to='/registro'>
            <button className='nav-btn'>🔐Registrarse</button>
          </Link>
        </>
      )}

      <div className='nav-right'>
        <Link to='/cart'>
          <button
            className='total-navbar'
          >
            🛒Total:{' '}
            {total.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
