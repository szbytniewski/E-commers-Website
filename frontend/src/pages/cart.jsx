import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import CartProductList from "../components/cartPage/cartList";
import CartCheckout from "../components/cartPage/cartCheckout";

function Cart() {
  return (
    <div>
      <LogoButton />
      <ShoppingCart />
      <CartProductList />
      <CartCheckout />
      <Navbar />
    </div>
  );
}

export default Cart;
