import React from "react";
import { useCart } from "../../context/cartContext";

function CartCheckout() {
  const { state } = useCart();
  const cartItemCount = state.cart.reduce(
    (total, curr) => total + curr.quantity,
    0
  );
  const subtotal = state.cart.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  );

  const shippingCost = cartItemCount * 10;
  return (
    <div>
      <h3>Subtotal: {subtotal}</h3>
      <p>Shipping cost: {shippingCost}</p>
      <h2>Total: {subtotal + shippingCost}</h2>
      <br />
      <button>Check out</button>
    </div>
  );
}

export default CartCheckout;
