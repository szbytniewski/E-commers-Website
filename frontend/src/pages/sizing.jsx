import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";

const Sizing = () => {
  return (
    <div>
      <LogoButton />
      <h1>Sizing Page</h1>
      <Navbar change={"/sizing"} />
    </div>
  );
};

export default Sizing;
