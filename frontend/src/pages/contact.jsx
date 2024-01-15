import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Contact() {
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
        <div className="text-center p-4">
          <h1 className="font-bold text-3xl">contact</h1>
          <p>
            FOR CUSTOMER SERVICE:
            <a href="mailto:xedfjmnuimavbuvtkk@ckptr.com" className="underline">
              xedfjmnuimavbuvtkk@ckptr.com
            </a>
          </p>
          <p>
            FOR BUSINESS INQUIRES:
            <a href="mailto:xyt71100@nezid.com" className="underline">
              xyt71100@nezid.com
            </a>
          </p>
        </div>
      </div>
      <Navbar change={"/contact"} />
    </div>
  );
}

export default Contact;
