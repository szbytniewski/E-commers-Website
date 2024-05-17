import React from "react";
import CartCheckout from "../components/cartPage/cartCheckout";
import CartProductList from "../components/cartPage/cartList";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import LogoButton from "../components/reusable/homeImg/homeImg";
import Navbar from "../components/reusable/navbar/navbar";

function Cart() {
  return (
    <div className="bg-body text-text font-body min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-20">
        <div className="flex flex-col gap-10 max-h-screen justify-center items-center">
          <div>
            <LogoButton />
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
        <div>
          <h1 className="text-center p-4 max-w-2xl mx-auto font-bold text-3xl">
            cart
          </h1>
          <CartProductList />
          <CartCheckout />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Cart;
