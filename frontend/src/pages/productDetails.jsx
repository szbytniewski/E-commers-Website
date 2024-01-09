import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import ProductInfo from "../components/productDetailsPage/productInfo";
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
      <ProductInfo />
      <Navbar change={"/shop"} />
    </div>
  );
};

export default ProductDetails;
