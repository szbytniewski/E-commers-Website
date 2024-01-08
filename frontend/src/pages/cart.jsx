import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import CartProductList from "../components/cartPage/cartList";

function Cart() {
  return (
    <div>
      <LogoButton />
      <ShoppingCart />
      <CartProductList />
      <Navbar />
    </div>
  );
}

export default Cart;
