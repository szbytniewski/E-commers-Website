import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";

const Shipping = () => {
  return (
    <div>
      <LogoButton />
      <h1>Shipping Page</h1>
      <Navbar change={"/shipping"} />
    </div>
  );
};

export default Shipping;
