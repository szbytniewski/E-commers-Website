import React, { useState } from "react";
import CustomerForm from "../components/checkoutPage/customerForm";
import Total from "../components/checkoutPage/totalPayment";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import LogoButton from "../components/reusable/homeImg/homeImg";
import Navbar from "../components/reusable/navbar/navbar";

function Checkout() {
  const [shippingChoice, setShippingChoice] = useState("");
  const [priceClosing, setPriceClosing] = useState(false);

  const handleShippingChoiceChange = (choice) => {
    setShippingChoice(choice);
  };

  //WHEN BUTTTON SUBMIT IS CLICKED IN THE CUSTOMER FORM WE CHANGE THE priceClosing to true
  const handlePriceClosing = () => {
    setPriceClosing(true);
  };

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
          <CustomerForm
            onShippingChoiceChange={handleShippingChoiceChange}
            onPriceClosing={handlePriceClosing}
          />
          <br />
          <br />
          <Total choice={shippingChoice} close={priceClosing} />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Checkout;
