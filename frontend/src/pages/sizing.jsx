import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Sizing() {
  return (
    <div>
      <LogoButton />
      <ShoppingCart />
      <h1>Sizing Page</h1>
      <Navbar change={"/sizing"} />
    </div>
  );
}

export default Sizing;
