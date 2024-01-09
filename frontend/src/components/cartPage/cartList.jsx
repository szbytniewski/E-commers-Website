import React from "react";
import { useCart } from "../../context/cartContext";

function CartProductList() {
  const { state, dispatch } = useCart();

  const removeProduct = (productName, size) => {
    dispatch({ type: "REMOVE_TYPE_FROM_CART", payload: { productName, size } });
  };

  const increaseQuantity = (productName, size) => {
    dispatch({ type: "ADD_ONE", payload: { productName, size } });
  };

  const decreaseQuantity = (productName, size) => {
    dispatch({ type: "REMOVE_ONE", payload: { productName, size } });
  };

  return (
    <table>
      {state.cart.map((curr) => (
        <tr key={`${curr.productName}-${curr.size}`}>
          <td>
            <img src="https://placehold.co/100x100" alt={curr.img} />
          </td>
          <td>
            <div>
              <div>{curr.productName}</div>
              <div>{curr.price}</div>
              <br />
              <div>Size: {curr.size}</div>
              <button
                onClick={() => removeProduct(curr.productName, curr.size)}
              >
                remove
              </button>
            </div>
          </td>
          <td>
            <button
              onClick={() => decreaseQuantity(curr.productName, curr.size)}
            >
              -
            </button>
            <input type="text" value={curr.quantity} readOnly />
            <button
              onClick={() => increaseQuantity(curr.productName, curr.size)}
            >
              +
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default CartProductList;
