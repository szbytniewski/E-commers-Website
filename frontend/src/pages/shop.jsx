import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import LoadingProducts from "../components/shopPage/loadingProducts";
import Filtering from "../components/shopPage/filterAndSortLogic";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Shop() {
  return (
    <div>
      <LogoButton />
      <ShoppingCart />
      <h1>shop Page</h1>
      <LoadingProducts />
      <Navbar change={"/shop"} />
    </div>
  );
}

export default Shop;
