import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/productsContext";

const ProductDetails = () => {
  const { productName } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.productName === productName);

  if (!product) {
    return (
      <div>
        <LogoButton />
        <ShoppingCart />
        <h1>404 Page Not Found</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/shop">
          <button>Continue shopping &#8594;</button>
        </Link>
        <Navbar change={"/shop"} />
      </div>
    );
  }

  return (
    <div>
      <LogoButton />
      <ShoppingCart />
      <div>
        {/*Container for all pictures*/}
        <div>
          <img src="https://placehold.co/200x200" alt={product.img} />
          {/* the rest of picture that when clicked on will how as the main big picture */}
        </div>
      </div>
      <div>
        {/*Product Info*/}
        <h1>{product.productName}</h1>
        <div>
          {/* Price info */}
          <h3>Product price:{product.price}</h3>
          <h3>With shipping: {product.priceWithShipping}</h3>
        </div>
        <br />
        <br />
        <div>
          <label for="">Size</label>
        </div>
      </div>

      <Navbar change={"/shop"} />
    </div>
  );
};

export default ProductDetails;
