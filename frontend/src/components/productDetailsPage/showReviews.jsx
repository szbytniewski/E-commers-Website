import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

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
    <div className="max-w-80">
      <br />
      <div>
        <h2>Average rating:</h2>
        <Box
          sx={{
            "& > legend": { mt: 2 },
            "& .MuiRating-iconEmpty": { color: "lightgray" },
          }}
        >
          <Rating
            name="read-only"
            value={(
              reviews.reduce((acc, curr) => acc + curr.rating, 0) /
              reviews.length
            ).toFixed(2)}
            precision={0.5}
            readOnly
            size="large"
          />
        </Box>
        <div></div>
      </div>
      <br />
      <h2 className="font-bold text-2xl">Reviews:</h2>
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
