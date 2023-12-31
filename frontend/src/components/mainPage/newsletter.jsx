import React from "react";
import { useFormik } from "formik";

function Newsletter() {
  const formik = useFormik({
    initialValues: {
      newsletterMail: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="newsletterMail"
        type="email"
        onChange={formik.handleChange}
        placeholder="Subscribe"
      />
      <button type="submit">&#8594;</button>
    </form>
  );
}

export default Newsletter;
