import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PizzaPage = () => {
    const {id} = useParams(); // Obtener el id de la pizza desde la URL
    // Estado para almacenar la información de la pizza
    // useState es un hook que permite manejar el estado en componentes funcionales
    // pizza es el estado, setPizza es la función para actualizarlo
    // Inicialmente, pizza es null hasta que se obtenga la información de la API
    // useEffect es un hook que permite ejecutar efectos secundarios en componentes funcionales
    // Se usa para realizar la consulta a la API cuando el componente se monta
    // y para actualizar el estado de la pizza con los datos obtenidos
    // consultarApi es una función asíncrona que realiza la consulta a la API
    // y actualiza el estado de la pizza con los datos obtenidos
    // Si pizza es null, se muestra un mensaje de carga
    // Si pizza tiene datos, se muestra la información de la pizza en un artículo
    // con su imagen, nombre, descripción, ingredientes y precio
    // El componente devuelve un artículo con la información de la pizza
    // que se mostrará en la página de detalles de la pizza
    // Se usa un efecto para consultar la API al cargar el componente
    // y se actualiza el estado de la pizza con los datos obtenidos
    // Si no hay datos de la pizza, se muestra un mensaje de carga  
    const [pizza, setPizza] = useState(null)



    useEffect(() => {
        consultarApi()
    }, [id])

    const consultarApi = async () => {
        try {
        const url = 'http://localhost:5001/api/pizzas/{id}';
        const response = await fetch(url);
        const data = await response.json()
        //setear constante para guardar lo obtenido 
        setPizza(data);
        } catch (error) {
        console.log("Error al obtener pizza:", error);
        }
    };

        if (!pizza) return <p>Cargando pizza...</p>;

    
    return (


        <article className='card-container'>

            <img src={pizza.img} alt={pizza.name} />
            <h2> {pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p>{pizza.ingredients}</p>
            <p>{pizza.price}</p>





        </article>

    )
}

export default PizzaPage
