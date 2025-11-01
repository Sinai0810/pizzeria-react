import napolitanaImg from '../assets/imgs/napolitana.jpg';
import espanolaImg from '../assets/imgs/espanola.jpg';
import pepperoniImg from '../assets/imgs/peperoni.jpg';
import burrataImg from '../assets/imgs/burrata.jpg'
import vegetalesImg from '../assets/imgs/vegetales.jpg'
import prosciutoImg from '../assets/imgs/prosciutto.jpg'








export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: napolitanaImg,
    ingredientes: ["🧀 Mozzarella", "🍅 Tomates", "🥓 Jamón", "🌱 Orégano"],
    name: "Pizza Napolitana",
    precio: 11.99,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: espanolaImg,
    ingredientes: ["🧀 Mozzarella", "🧀 Gorgonzola", "🧀 Parmesano", "🧀 Provolone"],
    name: "Pizza Española",
    precio: 15.99,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: pepperoniImg,
    ingredientes: ["🧀 Mozzarella", "🥓 Pepperoni", "🌱 Orégano"],
    name: "Pizza Peperoni",
    precio: 16.99, 
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: vegetalesImg,
    ingredientes: ["🧀 Mozzarella", "🌶️ Pimientos", "🫒 Aceitunas", "🍄 Champiñones"],
    name: "Pizza de Vegetales",
    precio: 20.99,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: burrataImg,
    ingredientes: ["🧀 Mozzarella", "🍅 Tomates cherry", "🌱 Albahaca", "🧀 Burrata"],
    name: "Pizza de Burrata",
    precio: 15.99,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: prosciutoImg,
    ingredientes: ["🧀 Mozzarella", "🌱 Rucula", " 🧀 Parmesano", "🍖 Prociutto"],
    name: "Pizza de Prosciutto",
    precio: 17.99,
  },
];

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: "P001",
    nombre: "Pizza Napolitana",
    precio: 11.99,
    cantidad: 1,
    img: napolitanaImg,
  },
  {
    id: "P002",
    nombre: "Pizza Española",
    precio: 15.99,
    cantidad: 1,
    img: espanolaImg,
  },
  {
    id: "P003",
    nombre: "Pizza de Pepperoni",
    precio: 16.99,
    cantidad: 1,
    img: pepperoniImg
  },
];
