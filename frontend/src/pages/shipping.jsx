import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Shipping() {
  return (
    <div>
      <LogoButton />
      <ShoppingCart />
      <h1>Shipping Page</h1>
      <Navbar change={"/shipping"} />
    </div>
  );
}

export default Shipping;
