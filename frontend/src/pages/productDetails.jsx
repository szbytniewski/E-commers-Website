import React from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "../components/productDetailsPage/addToCart";
import CreateReview from "../components/productDetailsPage/createReview";
import ProductInfo from "../components/productDetailsPage/productInfo";
import ShowReviews from "../components/productDetailsPage/showReviews";
import ShoppingCart from "../components/reusable/cart/shoppingCart";
import LogoButton from "../components/reusable/homeImg/homeImg";
import Navbar from "../components/reusable/navbar/navbar";
import { useProducts } from "../context/productsContext";

const ProductDetails = () => {
  const { productName } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.productName === productName);

  if (!product) {
    return (
      <div className="bg-body text-text font-body min-h-screen flex flex-col items-center justify-center">
        <div className="flex gap-20 mt-20 mb-40">
          <div className="flex flex-col gap-10 max-h-screen justify-center items-center">
            <div>
              <LogoButton />
            </div>
            <div>
              <ShoppingCart />
            </div>
          </div>
          <div>
            <h1>404 Page Not Found</h1>
            <p>The page you requested does not exist.</p>
            <Link to="/shop">
              <button>Continue shopping &#8594;</button>
            </Link>
          </div>
        </div>
        <Navbar change={"/shop"} />
      </div>
    );
  }

  return (
    <div className="bg-body text-text font-body min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-20 mt-20 mb-40">
        <div className="flex flex-col gap-10 max-h-screen justify-center items-center">
          <div>
            <LogoButton />
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col">
          <ProductInfo />
          <AddToCart />
          <CreateReview />
          <ShowReviews />
        </div>
      </div>
      <Navbar change={"/shop"} />
    </div>
  );
};

export default ProductDetails;
