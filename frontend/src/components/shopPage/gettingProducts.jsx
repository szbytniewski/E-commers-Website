import React, { useState, useEffect } from "react";
import axios from "axios";

function GettingProducts() {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

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

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.productName}
          onMouseEnter={() => setHoveredProduct(product)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <img src="https://placehold.co/200x200" alt={product.img} />
          <h2>{product.productName}</h2>
          <div>
            <div>Price: {product.price}</div>
            <div>Shipping:{product.priceWithShipping}</div>
            <div>Descripiton:{product.shortDescription}</div>
            <div>Ammount: {product.totalAmount}</div>
            {hoveredProduct === product && (
              <div>
                <button onClick="">ADD TO CART</button>
                <button onClick="">DETAILS</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GettingProducts;
