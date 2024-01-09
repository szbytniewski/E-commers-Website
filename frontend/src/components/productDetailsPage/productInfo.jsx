import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/productsContext";

function ProductInfo() {
  const { productName } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.productName === productName);
  return (
    <div>
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
          <h3>
            Normal: {product.price}zł With shipping: {product.priceWithShipping}
            zł
          </h3>
        </div>
        <br />
        <p>{product.longDescription}</p>
        <br />
      </div>
    </div>
  );
}

export default ProductInfo;
