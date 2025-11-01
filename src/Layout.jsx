import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      {/* OULET espacio reservado donde se va a renderizar la página correspondiente a la ruta (HomePage) actual. */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;
