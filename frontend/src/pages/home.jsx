import React from "react";
import logo from "../assets/images/logo.jpg";
import Newsletter from "../components/newsletter.jsx";
import MenuLinks from "../components/mainPageLinks.jsx";

export default function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Menu-wrapper">
          <div className="Menu-newsletter">
            <Newsletter />
          </div>
          <MenuLinks />
        </div>
        <div className="Menu-icons"></div>
      </header>
    </div>
  );
}

//Głowna strona gdzie mamy podane import 2 inntch plikow
// pierwszy Newsletter a drugi z lista linków do innych czesci aplikacji (ex. shop, contact)
