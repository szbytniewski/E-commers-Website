import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const productsContext = createContext();

function useProducts() {
  const context = useContext(productsContext);
  return context;
}

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const askingForProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    askingForProducts();
  }, []);

  return (
    <productsContext.Provider value={{ products }}>
      {children}
    </productsContext.Provider>
  );
}

export { ProductsProvider, useProducts };
