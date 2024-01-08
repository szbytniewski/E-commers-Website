import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cartContext";

function ShoppingCart() {
  const { state } = useCart();
  const cartItemCount = state.cart.length;

  return (
    <div>
      <div>CART</div>
      <hr />
      <div>{cartItemCount} Items in cart</div>
      <Link to="/cart">
        <button>cart</button>
      </Link>
      <Link to="/shop">
        <button>shop</button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
