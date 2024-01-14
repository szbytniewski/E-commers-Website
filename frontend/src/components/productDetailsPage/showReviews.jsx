import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowReviews() {
  const { productName } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const askingForReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/reviews?productName=${productName}`
        );
        setReviews(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    askingForReviews();
  }, [productName]);

  return (
    <div>
      <div>
        <h2>Average rating:</h2>
        <div>
          {(
            reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
          ).toFixed(2)}
        </div>
      </div>
      <h2>Reviews:</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <div>{review.rating}</div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowReviews;
