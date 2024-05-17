import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";

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
      <div className="text-right">
        <Link to="/checkout">
          <button className="bg-secondary text-white px-3 py-1 focus:outline-none hover:bg-text hover:text-body transition duration-300">
            Check out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartCheckout;
