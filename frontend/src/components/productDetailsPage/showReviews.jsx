import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
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
            value={
              reviews.reduce((acc, curr) => acc + curr.properties.rating, 0) /
              reviews.length
            }
            precision={0.5}
            readOnly
            size="large"
          />
        </Box>
      </div>
      <br />
      <h2 className="font-bold text-2xl">Reviews:</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <Box
            sx={{
              "& > legend": { mt: 2 },
              "& .MuiRating-iconEmpty": { color: "lightgray" },
            }}
          >
            <Rating
              name="read-only"
              value={review.properties.rating}
              precision={0.5}
              readOnly
              size="small"
            />
          </Box>
          <p>{review.properties.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowReviews;
