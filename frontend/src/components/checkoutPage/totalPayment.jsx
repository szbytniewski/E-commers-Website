import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cartContext";

function Total({ choice, close }) {
  const { state } = useCart();
  const [shippingCost, setShippingCost] = useState(0);
  const [total, setTotal] = useState(0);

  const subtotal = state.cart.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  );

  useEffect(() => {
    switch (choice) {
      case "standard":
        setShippingCost(20);
        break;
      case "express":
        setShippingCost(40);
        break;
      case "locker":
        setShippingCost(15);
        break;
      default:
        setShippingCost(0);
    }
  }, [choice, close]);

  useEffect(() => {
    setTotal(subtotal + shippingCost);
  }, [subtotal, shippingCost]);

  if (close) {
    return null;
  }

  return (
    <div>
      <h3>Subtotal: {subtotal}</h3>
      <h4>Shipping cost: {shippingCost}</h4>
      <h3>Total: {total}</h3>
      <br />
    </div>
  );
}

export default Total;
