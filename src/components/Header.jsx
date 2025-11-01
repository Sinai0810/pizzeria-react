import React from 'react'
import headerBg from '../assets/imgs/Header.jpg'
const Header = () => {
  const headerStyles = {
    width : '100%',
    position: 'relative',
    backgroundImage: `url(${headerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom : '60px', 
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 1,
  };

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    textAlign : 'center',
  };

  return (
    <div style={headerStyles}>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <h1 className="header-titulo">¡Pizzeria Mamma Mia!</h1>
        <p className='slogan'>Más que pizza, momentos.</p>
      </div>
    </div>
  );
};

export default Header;


