import React, { useEffect, useState } from "react";
import axios from "axios";
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
      <h2>Reviews:</h2>
      {reviews.map((review) => (
        <div>
          <div>{review.rating}</div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowReviews;
