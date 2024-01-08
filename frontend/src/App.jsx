import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Routes.jsx";
import { ProductsProvider } from "./context/productsContext.js";
import { CartProvider } from "./context/cartContext.js";
import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
