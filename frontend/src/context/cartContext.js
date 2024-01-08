import React, { createContext, useReducer, useContext, useEffect } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      const findItem = state.cart.findIndex(
        (curr) => curr.productName === action.payload.productName
      );

      if (findItem !== -1) {
        const updatedCart = [...state.cart];
        updatedCart.splice(findItem, 1);

        return { cart: updatedCart };
      }
      return state;
    case "REMOVE_TYPE_FROM_CART":
      return {
        cart: state.cart.filter(
          (curr) => curr.productName !== action.payload.productName
        ),
      };
    case "SET_CART":
      return { cart: action.payload };
    default:
      return state;
  }
}

const cartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

function useCart() {
  const context = useContext(cartContext);
  return context;
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: cartFromLocalStorage,
  });

  //useEffect responsible for saving the current cart data to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, useCart };
