import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/productsContext";

function ProductInfo() {
  const { productName } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.productName === productName);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">{product.productName}</h1>
      <div className="">
        <img
          src={product.image}
          alt="https://placehold.co/300x300"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h1 className="text-3xl text-center">{product.price} zł</h1>
        <br />
        <p>{product.longDescription}</p>
        <br />
        <div className="flex flex-row justify-between underline">
          <div>S:{product.sizes[3].amount}</div>
          <div>M:{product.sizes[2].amount}</div>
          <div>L:{product.sizes[1].amount}</div>
          <div>XL:{product.sizes[0].amount}</div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ProductInfo;
