import React, { useState, useEffect } from "react";
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
      <h2>Size:</h2>
      <select id="size" onChange={(e) => setSize(e.target.value)} value={size}>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">XLarge</option>
      </select>
      <h2>Quantity:</h2>
      <input
        type="number"
        id="quantity"
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
      />
      <br />
      <br />
      <button onClick={handleAddToCart}>ADD TO CART</button>
    </div>
  );
}

export default AddToCart;
