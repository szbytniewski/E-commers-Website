import React from "react";
import AddingProduct from "../components/adminPage/addingProduct";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import AdminReviews from "../components/adminPage/moderatingReviews";

function Admin() {
  return (
    <div className="bg-body text-text font-body min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-20">
        <div className="flex flex-col gap-10 max-h-screen justify-center items-center">
          <div>
            <LogoButton />
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
        <div className="text-center p-4">
          <div className="font-bold text-3xl">ADMIN PAGE</div>
          <div className="flex flex-row gap-5">
            <div>
              <AddingProduct />
            </div>
            <br />
            <div>
              <AdminReviews />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Admin;

//Website for an adming to add products, moderate the reviews and maybe upadete products(like adding more or sizes or editing descripitons)
