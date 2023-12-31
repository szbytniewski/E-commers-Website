import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import filtering from "../components/shopPage/filterLogic";
import { data } from "../assets/jsonData/data.json";

function Shop() {
  return (
    <div>
      <LogoButton />
      <h1>shop Page</h1>
      <Navbar change={"/shop"} />
    </div>
  );
}

export default Shop;
