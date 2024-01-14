import React, { useState } from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import CustomerForm from "../components/checkoutPage/customerForm";
import Total from "../components/checkoutPage/totalPayment";

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
    <div>
      <LogoButton />
      <ShoppingCart />
      <CustomerForm
        onShippingChoiceChange={handleShippingChoiceChange}
        onPriceClosing={handlePriceClosing}
      />
      <Total choice={shippingChoice} close={priceClosing} />
      <Navbar />
    </div>
  );
}

export default Checkout;
