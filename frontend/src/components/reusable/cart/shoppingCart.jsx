import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cartContext";

function ShoppingCart() {
  const { state } = useCart();
  const cartItemCount = state.cart.reduce(
    (total, curr) => total + curr.quantity,
    0
  );

  return (
    <div className="bg-body text-white p-4 text-sm max-w-44 mx-auto font-body border border-border">
      <div>CART</div>
      <hr />
      <div>{cartItemCount} Items in cart</div>
      <Link to="/cart" className="block mt-2">
        <button className="bg-secondary text-white px-3 py-1 focus:outline-none hover:bg-text hover:text-body transition duration-300">
          View Cart
        </button>
      </Link>
      <Link to="/shop" className="block mt-2">
        <button className="bg-secondary text-white px-3 py-1 focus:outline-none hover:bg-text hover:text-body transition duration-300">
          Shop
        </button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
