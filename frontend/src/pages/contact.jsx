import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Contact() {
  return (
    <div>
      <LogoButton />
      <ShoppingCart />
      <h1>Contact Page</h1>
      <Navbar change={"/contact"} />
    </div>
  );
}

export default Contact;
