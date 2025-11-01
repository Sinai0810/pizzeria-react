import React from 'react'
import { Link } from 'react-router-dom';
import BurnPizza from '../assets/imgs/Burnt_pizza-removebg-preview.PNG'


const NotFoundPage = () => {
    return (
        <section className='background-container'>
            <div className='info-container'>
                <img src={BurnPizza} alt="pizza quemada" srcset="" />
                <h1>¡OOPS ESTA PIZZA SE NOS QUEMO!</h1>
                <p>Parece que esta pagina no existe..</p>
                <Link to='/'>
                    <button className='btn-home'>Volver al inicio</button>
                </Link>


            </div>
        </section>

    )
}

export default NotFoundPage
