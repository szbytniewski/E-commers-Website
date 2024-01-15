import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import CartProductList from "../components/cartPage/cartList";
import CartCheckout from "../components/cartPage/cartCheckout";

function Cart() {
  return (
    <div className="bg-body text-text font-body min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-20">
        <div className="flex flex-col gap-10">
          <div>
            <LogoButton />
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
        <div>
          <CartProductList />
          <CartCheckout />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Cart;
