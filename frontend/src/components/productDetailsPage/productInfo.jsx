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
        <img src="https://placehold.co/200x200" alt={product.img} />
      </div>
      <div>
        <h1 className="text-3xl text-center">{product.price} zł</h1>
        <br />
        <p>{product.longDescription}</p>
        <br />
        <div className="flex flex-row justify-between underline">
          {/* placeholder later will be each size sepreatly */}
          <div>S:{product.totalAmount}</div>
          <div>M:4</div>
          <div>L:1</div>
          <div>XL:10</div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
