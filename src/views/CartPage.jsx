import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';

const CartPage = () => {
  const { token } = useContext(UserContext);
  const { cartItems, updateQuantity, removeFromCart, getTotal, clearCart } = useContext(CartContext);

  const enviarCarritoAlBackend = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,  // si tu backend lo requiere
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire("¡Compra realizada!", data.message, "success");
        clearCart();  // vacía el carrito para que aparezca vacío
      } else {
        Swal.fire("Error", data.message || "No se pudo completar la compra.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Hubo un problema con la conexión al servidor.", "error");
      console.error("Error al enviar el carrito:", error);
    }
  };

  return (
    <section className="cart-container">
      <h2>Detalles del pedido:</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío 🍕</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <article key={item.id} className="producto">
              <img src={item.img} alt={item.name} />
              <span className="producto-titulo">{item.name}</span>
              <span>${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>

              <div className="cantidad-container">
                <button className="btn-menos" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn-mas" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </article>
          ))}

          <h2>Total: ${getTotal().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
          <button className="btn-pagar" onClick={enviarCarritoAlBackend}>
            Pagar
          </button>
        </>
      )}
    </section>
  );
};

export default CartPage;
