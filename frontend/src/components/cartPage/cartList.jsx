import React from "react";
import { useCart } from "../../context/cartContext";

function CartProductList() {
  const { state } = useCart();

  return (
    <div>
      {state.cart.map((curr) => (
        <div>{curr.productName}</div>
      ))}
    </div>
  );
}

export default CartProductList;
