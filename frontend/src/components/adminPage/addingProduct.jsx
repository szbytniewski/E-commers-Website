import axios from "axios";
import { useFormik } from "formik";
import React from "react";

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
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-1 items-start p-2 border border-secondary"
    >
      <div>
        <label htmlFor="productName">product name:</label>
        <input
          id="productName"
          type="text"
          onChange={formik.handleChange}
          className="text-body"
        />
      </div>

      <div>
        <label htmlFor="category">category:</label>
        <select
          id="category"
          onChange={formik.handleChange}
          defaultValue="shirt"
          className="text-body"
        >
          <option value="shirt">shirt</option>
          <option value="hoodie">hoodie</option>
          <option value="pants">pants</option>
        </select>
      </div>

      <div>
        <label htmlFor="color">color:</label>
        <select
          id="color"
          onChange={formik.handleChange}
          defaultValue="black"
          className="text-body"
        >
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="blue">blue</option>
          <option value="grey">grey</option>
        </select>
      </div>

      <div>
        <label htmlFor="price">price:</label>
        <input
          id="price"
          type="number"
          onChange={formik.handleChange}
          className="text-body"
        />
      </div>

      <div>
        <label htmlFor="img">image:</label>
        <input
          id="img"
          type="url"
          placeholder="https://example.com"
          pattern="https://.*"
          title="URL"
          onChange={formik.handleChange}
          className="text-body"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="shortDescription">short description:</label>
        <textarea
          id="shortDescription"
          cols="25"
          rows="5"
          onChange={formik.handleChange}
          className="text-body"
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label htmlFor="longDescription">long description:</label>
        <textarea
          id="longDescription"
          cols="25"
          rows="5"
          onChange={formik.handleChange}
          className="text-body"
        ></textarea>
      </div>

      <div>
        <label htmlFor="smallAmmount">S:</label>
        <input
          id="smallAmmount"
          type="number"
          onChange={formik.handleChange}
          className="text-body"
        />
      </div>

      <div>
        <label htmlFor="mediumAmmount">M:</label>
        <input
          id="mediumAmmount"
          type="number"
          onChange={formik.handleChange}
          className="text-body"
        />
      </div>

      <div>
        <label htmlFor="largeAmmount">L:</label>
        <input
          id="largeAmmount"
          type="number"
          onChange={formik.handleChange}
          className="text-body"
        />
      </div>

      <div>
        <label htmlFor="extraLargeAmmount">XL:</label>
        <input
          id="extraLargeAmmount"
          type="number"
          onChange={formik.handleChange}
          className="text-body"
        />
      </div>

      <button
        type="submit"
        className="bg-secondary text-white px-3 py-1 hover:bg-text hover:text-body transition duration-300 w-full"
      >
        ADD PRODUCT
      </button>
    </form>
  );
}

export default AddingProduct;
