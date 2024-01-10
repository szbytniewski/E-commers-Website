import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { useProducts } from "../../context/productsContext";
import { Link } from "react-router-dom";

function LoadingProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();
  const { products } = useProducts();

  const addToCart = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...selectedProduct, size, quantity },
    });

    setHoveredProduct(null);
    setSize("S");
    setQuantity(1);
  };

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.productName}
          onMouseEnter={() => setHoveredProduct(product)}
          onMouseLeave={() => {
            setHoveredProduct(null);
            setSelectedProduct(null);
          }}
        >
          <img src="https://placehold.co/200x200" alt={product.img} />
          <h2>{product.productName}</h2>
          <div>
            <div>Price: {product.price}</div>
            <div>Shipping:{product.shippingCost}</div>
            <div>Descripiton:{product.shortDescription}</div>
            <div>Ammount: {product.totalAmount}</div>
            {hoveredProduct === product && (
              <div>
                {selectedProduct === product ? (
                  <div>
                    <label htmlFor="size">Size:</label>
                    <select
                      id="size"
                      onChange={(e) => setSize(e.target.value)}
                      value={size}
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                    <button onClick={handleAddToCart}>ADD TO CART</button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(product)}>
                    ADD TO CART
                  </button>
                )}
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
