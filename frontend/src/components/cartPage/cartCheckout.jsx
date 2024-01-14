import React from "react";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartCheckout() {
  const { state } = useCart();
  const subtotal = state.cart.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  );

  return (
    <div>
      <h3>Subtotal: {subtotal}</h3>
      <h4>Shipping cost: Calculated at checkout</h4>
      <br />
      <Link to="/checkout">
        <button>Check out</button>
      </Link>
    </div>
  );
}

export default CartCheckout;
