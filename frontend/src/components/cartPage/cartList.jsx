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
    <table className="table-fixed">
      <tbody>
        {state.cart.map((curr) => (
          <tr key={`${curr.productName}-${curr.size}`}>
            <td className="w-1/4">
              <img
                src={curr.image}
                alt="https://placehold.co/100x100"
                height={100}
                width={100}
              />
            </td>
            <td className="w-1/2">
              <div className="ml-2">
                <div>{curr.productName}</div>
                <div>Price: {curr.price}</div>
                <br />
                <div>Size: {curr.size}</div>
                <button
                  onClick={() => removeProduct(curr.productName, curr.size)}
                  className="hover:text-red-500 px-2 py-1 rounded"
                >
                  remove
                </button>
              </div>
            </td>
            <td className="w-1/4">
              <div className="flex items-center ml-2">
                <button
                  onClick={() => decreaseQuantity(curr.productName, curr.size)}
                  className="bg-secondary text-white px-2"
                >
                  -
                </button>
                <input
                  type="text"
                  value={curr.quantity}
                  readOnly
                  name={`quantity-${curr.productName}-${curr.size}`}
                  className="w-8 text-center text-body"
                />
                <button
                  onClick={() => increaseQuantity(curr.productName, curr.size)}
                  className="bg-secondary text-white px-2"
                >
                  +
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartProductList;
