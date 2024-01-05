import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function AddingProduct() {
  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/product", {
        productName: values.productName,
        category: values.category,
        color: values.color,
        price: values.price,
        img: values.img,
        shortDescription: values.shortDescription,
        longDescription: values.longDescription,
        smallAmmount: values.smallAmmount,
        mediumAmmount: values.mediumAmmount,
        largeAmmount: values.largeAmmount,
        extraLargeAmmount: values.extraLargeAmmount,
      })
      .then((response) => {
        alert("Product has been added");
      });
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      category: "",
      color: "",
      price: "",
      img: "",
      shortDescription: "",
      longDescription: "",
      smallAmmount: "",
      mediumAmmount: "",
      largeAmmount: "",
      extraLargeAmmount: "",
    },
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label for="productName">Product Name</label>
      <input id="productName" type="text" onChange={formik.handleChange} />
      <br />

      <label for="category">Category</label>
      <select id="category" onChange={formik.handleChange} defaultValue="shirt">
        <option value="shirt">shirt</option>
        <option value="hoodie">hoodie</option>
        <option value="pants">pants</option>
      </select>
      <br />

      <label for="color">Color</label>
      <select id="color" onChange={formik.handleChange} defaultValue="black">
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="blue">blue</option>
        <option value="grey">grey</option>
      </select>
      <br />

      <label for="price">Price</label>
      <input id="price" type="number" onChange={formik.handleChange} />
      <br />
      <label for="img">Image</label>
      <input id="img" type="file" onChange={formik.handleChange} />
      <br />
      <label for="shortDescription"></label>
      <textarea
        id="shortDescription"
        cols="30"
        rows="10"
        onChange={formik.handleChange}
      ></textarea>
      <br />
      <label for="longDescription"></label>
      <textarea
        id="longDescription"
        cols="30"
        rows="10"
        onChange={formik.handleChange}
      ></textarea>
      <br />
      <label for="smallAmmount"></label>
      <input id="smallAmmount" type="number" onChange={formik.handleChange} />
      <br />
      <label for="mediumAmmount"></label>
      <input id="mediumAmmount" type="number" onChange={formik.handleChange} />
      <br />
      <label for="largeAmmount"></label>
      <input id="largeAmmount" type="number" onChange={formik.handleChange} />
      <br />
      <label for="extraLargeAmmount"></label>
      <input
        id="extraLargeAmmount"
        type="number"
        onChange={formik.handleChange}
      />
      <br />
      <button type="submit">ADD PRODUCT</button>
    </form>
  );
}

export default AddingProduct;
