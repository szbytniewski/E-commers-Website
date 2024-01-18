import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

function LoadingProducts({ products }) {
  const { dispatch } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

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
    <div className="flex flex-wrap gap-4 max-w-2xl mx-auto">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.productName}
            className="flex flex-row"
            onMouseEnter={() => setHoveredProduct(product)}
            onMouseLeave={() => {
              setHoveredProduct(null);
              setSelectedProduct(null);
            }}
          >
            <img
              src={product.img}
              alt="https://placehold.co/200x200"
              width={200}
              height={200}
              className={`transition-opacity ${
                hoveredProduct === product ? "opacity-70" : "opacity-100"
              }`}
            />
            <div className="flex flex-col ml-2">
              <h2>{product.productName}</h2>
              <div>
                <div>Price: {product.price}</div>
                <div>Shipping: {product.shippingCost}</div>
                <div>Description: {product.shortDescription}</div>
                <div className="flex flex-row gap-2">
                  <div>
                    {product.sizes[3].sizeName}:{product.sizes[3].amount}
                  </div>
                  <div>
                    {product.sizes[2].sizeName}:{product.sizes[2].amount}
                  </div>
                  <div>
                    {product.sizes[1].sizeName}:{product.sizes[1].amount}
                  </div>
                  <div>
                    {product.sizes[0].sizeName}:{product.sizes[0].amount}
                  </div>
                </div>
              </div>
              {hoveredProduct === product && (
                <div className="flex gap-2">
                  {selectedProduct === product ? (
                    <div>
                      <label htmlFor="size">Size:</label>
                      <select
                        id="size"
                        onChange={(e) => setSize(e.target.value)}
                        value={size}
                        className="text-black"
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
                        className="text-black w-10"
                      />
                      <br />
                      <button
                        onClick={handleAddToCart}
                        className="bg-secondary text-white px-2 py-2"
                      >
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="mr-2"
                        />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-secondary text-white px-2 py-2"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    </button>
                  )}
                  <Link to={`/shop/${product.productName}`}>
                    <button className="bg-secondary text-white px-2 py-2">
                      <FontAwesomeIcon icon={faSearch} className="mr-2" />
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-center">No products match the selected filters.</h1>
      )}
    </div>
  );
}

export default LoadingProducts;
