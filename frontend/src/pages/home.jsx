import React from "react";
import logo from "../assets/images/logo.jpg";
import Newsletter from "../components/mainPage/newsletter.jsx";
import MenuLinks from "../components/mainPage/mainPageLinks.jsx";

export default function MainPage() {
  return (
    <div className="App min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-10">
        <div className="flex items-center">
          <img
            src={logo}
            className="h-48 w-48 border-4 border-white"
            alt="logo"
          />
        </div>
        <div className="Menu-newsletter">
          <Newsletter />
        </div>
        <div className="w-full">
          <MenuLinks />
        </div>
      </div>
    </div>
  );
}

//Głowna strona gdzie mamy podane import 2 inntch plikow
// pierwszy Newsletter a drugi z lista linków do innych czesci aplikacji (ex. shop, contact)

//Głowna strona gdzie mamy podane import 2 inntch plikow
// pierwszy Newsletter a drugi z lista linków do innych czesci aplikacji (ex. shop, contact)
