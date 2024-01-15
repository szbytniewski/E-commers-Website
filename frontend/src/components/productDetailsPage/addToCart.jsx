import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useProducts } from "../../context/productsContext";

function AddToCart() {
  const { productName } = useParams();
  const { products } = useProducts();
  const { dispatch } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = products.find((p) => p.productName === productName);
    setSelectedProduct(product);
  }, [productName, products]);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...selectedProduct, size, quantity },
    });

    setSize("S");
    setQuantity(1);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <h2>Size:</h2>
          <select
            id="size"
            onChange={(e) => setSize(e.target.value)}
            value={size}
            className="text-body"
          >
            <option value="S">small</option>
            <option value="M">medium</option>
            <option value="L">large</option>
            <option value="XL">xlLarge</option>
          </select>
        </div>
        <div className="flex">
          <h2>Quantity:</h2>
          <input
            type="number"
            id="quantity"
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            className="text-body w-10"
          />
        </div>
      </div>
      <br />
      <br />
      <button
        onClick={handleAddToCart}
        className="bg-secondary text-white px-3 py-1 focus:outline-none hover:bg-text hover:text-body transition duration-300"
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default AddToCart;
