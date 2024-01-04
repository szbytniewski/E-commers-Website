import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/home.jsx";
import Shop from "../pages/shop.jsx";
import Ship from "../pages/shipping.jsx";
import Size from "../pages/sizing.jsx";
import Contact from "../pages/contact.jsx";
import Admin from "../pages/admin.jsx";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/shop" element={<Shop />} />
      <Route path="/sizing" element={<Size />} />
      <Route path="/shipping" element={<Ship />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

// Mamy podane wszystkie mozliwe sciezki w naszej aplikacji w tym miejscu
// Gdzie default strona to Main Page pod adresem "/" gdzie reszta linkow do stron sie znajduje
