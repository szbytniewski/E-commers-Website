import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";

function CreateReview() {
  const { productName } = useParams();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/reviews", {
        productName: productName,
        rating: values,
        comment: values,
      })
      .then((response) => {
        alert("Thanks for subscribing to our newsletter");
      });
  };
  const formik = useFormik({
    initialValues: {
      rating: rating,
      comment: "",
    },
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                size={40}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <label for="comment">Comment</label>
      <textarea
        id="comment"
        cols="30"
        rows="10"
        onChange={formik.handleChange}
      ></textarea>
      <button type="submit">Add Review</button>
    </form>
  );
}

export default CreateReview;
