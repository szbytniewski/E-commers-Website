import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function CreateReview() {
  const { productName } = useParams();
  const [rating, setRating] = useState(null);

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
      <br />
      <label htmlFor="comment" className="font-bold text-2xl">
        rate our product
      </label>
      <div className="flex flex-row">
        <Box
          sx={{
            "& > legend": { mt: 2 },
            "& .MuiRating-iconEmpty": { color: "lightgray" },
          }}
        >
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
              formik.setFieldValue("rating", newValue);
            }}
            size="large"
          />
        </Box>
      </div>

      <br />
      <div className="text-body">
        <textarea
          id="comment"
          cols="30"
          rows="10"
          onChange={formik.handleChange}
        />
      </div>

      <br />
      <div className="text-center bg-secondary text-white px-3 py-1 focus:outline-none hover:bg-text hover:text-body transition duration-300">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CreateReview;
