import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import LoadingProducts from "../components/shopPage/loadingProducts";
import Filtering from "../components/shopPage/filterAndSortLogic";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Shop() {
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
          <div>filtrowanie/sortwanie placeholder</div>
          <div>
            <LoadingProducts />
          </div>
        </div>
      </div>
      <Navbar change={"/shop"} />
    </div>
  );
}

export default Shop;
