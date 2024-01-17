import React, { useState, useEffect } from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import LoadingProducts from "../components/shopPage/loadingProducts";
import FilteringAndSort from "../components/shopPage/filterAndSort";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import { useProducts } from "../context/productsContext";

function Shop() {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState("");

  const getInitialProducts = () => {
    setFilteredProducts(products);
  };

  useEffect(() => {
    getInitialProducts();
  }, [products]);

  return (
    <div className="bg-body text-text font-body min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-20 mt-20 mb-40">
        <div className="flex flex-col gap-10 max-h-screen justify-center items-center">
          <div>
            <LogoButton />
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <FilteringAndSort setFilteredProducts={setFilteredProducts} />
          </div>
          <br />
          <div>
            <LoadingProducts products={filteredProducts} />
          </div>
        </div>
      </div>
      <Navbar change={"/shop"} />
    </div>
  );
}

export default Shop;
