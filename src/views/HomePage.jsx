import React from 'react'
import Header from '../components/Header'
import napolitanaImg from '../assets/imgs/napolitana.jpg';
import espanolaImg from '../assets/imgs/espanola.jpg';
import pepperoniImg from '../assets/imgs/peperoni.jpg';
import Cards from '../components/Cards'
import { pizzas } from '../components/pizzas';
import Pizza from './PizzaPage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    consultarApi()
  }, [])
  const consultarApi = async () => {
    try {
      const url = 'http://localhost:5001/api/pizzas';
      const response = await fetch(url);
      const data = await response.json()

      //setear constante para guardar lo obtenido 
      setPizzas(data)


    } catch (error) {
      console.error('Error al obtener pizzas:', error);

    }

  }


  return (
    <div>
      <Header />


      <section className='cards-container'>


        {pizzas.map(pizza => (
          <div key={pizza.id} className='card-container'>
            <img src={pizza.img} />
            <h1> {pizza.name}</h1>
            <hr />
            <p className='descripcion'> {pizza.desc}</p>
            <hr />
            <ul className='list-container'>
              {pizza.ingredients.map((ingrediente, id) =>
                <li key={id} className='ingrediente-list'> {ingrediente} </li>)}
            </ul>
            <hr />
            <h3 className='precio'> ${pizza.price.toLocaleString()}</h3>
            {/* <button className='ver-mas'> Ver más </button> */}

              <button className='agg-al-carrito' onClick={() => addToCart(pizza)} > Agregar al Carrito </button>
            



          </div>


        ))}


        {/* {pizzas.map(pizza => (
             <Cards key={pizza.id}  pizza={pizza} />
  
            ))} */}


        {/* <Cards imagen={napolitanaImg}  titulo="Pizza Napolitana" ingredientes="Ingredientes:" descripcion="Mozzarella, toamte, jamón, oregano." precio="Precio: $11.99" /> */}

        {/* <Cards imagen={espanolaImg} titulo="Pizza Española" ingredientes= "Ingredientes:" descripcion="Mozzarella, gorgonzola, parmesano, provolone." precio="Precio: $15.99" /> */}

        {/*//<Cards imagen= {pepperoniImg} titulo="Pizza Pepperoni" ingredientes="Ingredientes:" descripcion="Mozzarela, pepperoni, oregano." precio="Precio: $10.99" />*/}
      </section>
    </div>





  )
}

export default HomePage


