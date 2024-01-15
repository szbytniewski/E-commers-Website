import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

function CreateReview() {
  const { productName } = useParams();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/reviews", {
        productName: productName,
        rating: values.rating,
        comment: values.comment,
      })
      .then((response) => {
        alert("Thanks for leaving a review");
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
      <label for="comment" className="font-bold text-1xl">
        rate our product
      </label>
      <div className="flex flex-row">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => {
                  setRating(currentRating);
                  formik.setFieldValue("rating", currentRating);
                }}
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

      <br />
      <textarea
        id="comment"
        cols="30"
        rows="10"
        onChange={formik.handleChange}
      ></textarea>
      <br />
      <button type="submit">Add Review</button>
    </form>
  );
}

export default CreateReview;
