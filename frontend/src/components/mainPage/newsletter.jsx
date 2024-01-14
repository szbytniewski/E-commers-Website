import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function Newsletter() {
  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/newsletter", {
        email: values.newsletterMail,
      })
      .then((response) => {
        alert("Thanks for subscribing to our newsletter");
      });
  };

  const formik = useFormik({
    initialValues: {
      newsletterMail: "",
    },
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex text-sm border border-border font-body"
    >
      <input
        id="newsletterMail"
        type="email"
        onChange={formik.handleChange}
        placeholder="Subscribe"
        className="p-2 text-textField bg-body"
      />
      <button
        type="submit"
        className="p-2 text-white bg-secondary hover:bg-text hover:text-body transition duration-300"
      >
        &#8594;
      </button>
    </form>
  );
}

export default Newsletter;
