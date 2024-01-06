import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import GettingProducts from "../components/shopPage/gettingProducts";
import filtering from "../components/shopPage/filterLogic";

function Shop() {
  return (
    <div>
      <LogoButton />
      <h1>shop Page</h1>
      <GettingProducts />
      <Navbar change={"/shop"} />
    </div>
  );
}

export default Shop;
