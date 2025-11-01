import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import HomePage from './views/HomePage'
import RegistroPage from './views/RegistroPage'
import PerfilPage from './views/PerfilPage'
import LoginPage from './views/LoginPage'
import CartPage from './views/CartPage'
import PizzaPage from './views/PizzaPage'
import NotFoundPage from './views/NotFoundPage'
import Layout from './Layout.jsx'
import { CartProvider } from './Context/CartContext.jsx';
import { UserProvider } from './Context/UserContext.jsx';
import RutaPublica from "./components/RutaPublica.jsx";
import RutaProtegida from "./components/RutaProtegida.jsx";


function App() {
  const [count, setCount] = useState(0)
  // shift + opt + f = ordenar el codigo //
  // Alt + Z = ajustar (acortar) el texto en el editor // 
  return (

    <div>
      <UserProvider>
      <CartProvider>
      <Routes>
        {/* Layout es el componente que contiene el navbar y el footer*/}
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/registro" element={ <RutaPublica><RegistroPage/></RutaPublica>} />
          <Route path="/login" element={ <RutaPublica><LoginPage/> </RutaPublica>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pizza/001" element={ <RutaProtegida> <PizzaPage /> </RutaProtegida>} />
          <Route path="/perfil" element={<PerfilPage/>} />
          <Route path="/404" element={<NotFoundPage />} />
          {/* Ruta comodin. cualquier URL que no sea reconocida mostrara NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />


        </Route>
      </Routes>
      </CartProvider>
      </UserProvider>




    </div>

  )
}

export default App
