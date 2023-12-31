import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";

const Contact = () => {
  return (
    <div>
      <LogoButton />
      <h1>Contact Page</h1>
      <Navbar change={"/contact"} />
    </div>
  );
};

export default Contact;
