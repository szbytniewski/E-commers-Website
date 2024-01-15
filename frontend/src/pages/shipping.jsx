import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Shipping() {
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
        <div className="text-center p-4 max-w-2xl mx-auto">
          <h1 className="font-bold text-3xl">shipping & delivery</h1>
          <p>Shipping takes between 5-10 business days after ordering.</p>
          <p>
            Shipping price will depend on the shipping you pick. Right below you
            will find diffrent prices for diffrent type of shipping
          </p>
          <table className="mt-4 mx-auto">
            <tbody>
              <tr>
                <td className="border px-4 py-2">shipping </td>
                <td className="border px-4 py-2">price</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">standard</td>
                <td className="border px-4 py-2">20</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">express</td>
                <td className="border px-4 py-2">40</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">pracel locker</td>
                <td className="border px-4 py-2">15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Navbar change={"/shipping"} />
    </div>
  );
}

export default Shipping;
