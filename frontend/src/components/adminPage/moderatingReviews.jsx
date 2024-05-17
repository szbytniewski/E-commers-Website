import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProducts } from "../../context/productsContext";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function AdminReviews() {
  const { products } = useProducts();
  const [reviews, setReviews] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    const askingForReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/reviews?productName=${selectedProduct}`
        );
        setReviews(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedProduct) {
      askingForReviews();
    } else if (selectedProduct === "") {
      setReviews([]);
    }
  }, [selectedProduct]);

  const handleUpdateReview = (reviewId, updateReview) => {
    console.log(updateReview);
    axios
      .put(`http://localhost:5000/api/reviews/${reviewId}`, {
        productName: updateReview.properties.productName,
        comment: updateReview.properties.comment,
      })
      .then((response) => {
        const updatedReviews = reviews.map((review) =>
          review.identity === reviewId
            ? { ...review, properties: response.data }
            : review
        );
        setReviews(updatedReviews);
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  const handleDeleteReview = (reviewId) => {
    axios
      .delete(`http://localhost:5000/api/reviews/${reviewId}`)
      .then(() => {
        const updatedReviews = reviews.filter(
          (review) => review.identity !== reviewId
        );
        setReviews(updatedReviews);
      })
      .catch((error) => console.error("Error deleting review:", error));
  };

  return (
    <div className="flex flex-col gap-1 p-2 border border-secondary">
      <div>
        <label htmlFor="productSelect">Select a product: </label>
        <select
          id="productSelect"
          onChange={(e) => setSelectedProduct(e.target.value)}
          value={selectedProduct}
          className="text-body"
        >
          <option value="">Select product</option>
          {products.map((product) => (
            <option
              key={product.productName}
              value={product.productName}
              className="text-body"
            >
              {product.productName}
            </option>
          ))}
        </select>
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="mt-4">
          <Box
            sx={{
              "& > legend": { mt: 2 },
              "& .MuiRating-iconEmpty": { color: "lightgray" },
            }}
          >
            <p>
              Rating:
              <Rating
                name="read-only"
                value={review.properties.rating}
                precision={0.5}
                readOnly
                size="small"
              />
            </p>
          </Box>
          <p>{`Comment: ${review.properties.comment}`}</p>
          <button
            onClick={() => setSelectedReview(review)}
            className="bg-secondary text-white px-3 py-1 hover:bg-text hover:text-body transition duration-300 mr-5"
          >
            Update
          </button>
          <button
            onClick={() => handleDeleteReview(review.identity)}
            className="bg-secondary text-white px-3 py-1 hover:bg-text hover:text-body transition duration-300 "
          >
            Delete
          </button>
        </div>
      ))}

      <br />
      <br />

      {selectedReview && (
        <div>
          <h3>Edit Review</h3>
          <textarea
            onChange={(e) =>
              setSelectedReview({
                ...selectedReview,
                properties: {
                  ...selectedReview.properties,
                  comment: e.target.value,
                },
              })
            }
            className="text-body"
          />
          <br />
          <button
            onClick={() =>
              handleUpdateReview(selectedReview.identity, selectedReview)
            }
            className="bg-secondary text-white px-3 py-1 hover:bg-text hover:text-body transition duration-300 mr-5"
          >
            Save
          </button>
          <button
            onClick={() => setSelectedReview(null)}
            className="bg-secondary text-white px-3 py-1 hover:bg-text hover:text-body transition duration-300"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminReviews;
