import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { useProducts } from "../../context/productsContext";
import { Link } from "react-router-dom";

function LoadingProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { dispatch } = useCart();
  const { products } = useProducts();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

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
                <button onClick={() => addToCart(product)}>ADD TO CART</button>
                <Link to={`/shop/${product.productName}`}>
                  <button>DETAILS</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingProducts;
