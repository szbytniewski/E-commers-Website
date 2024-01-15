import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useCart } from "../../context/cartContext";

function CustomerForm({ onShippingChoiceChange, onPriceClosing }) {
  const [purchaseConfirmation, setPurchaseConfirmation] = useState(false);
  const { state, dispatch } = useCart();

  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/order", {
        shippingType: values.shippingType,
        firstName: values.firstName,
        lastName: values.lastName,
        country: values.country,
        city: values.city,
        postalCode: values.postalCode,
        streetAddress: values.streetAddress,
        email: values.contactEmail,
        phoneNumber: values.phoneNumber,
        products: state.cart,
      })
      .then(() => {
        dispatch({ type: "CLEAR_CART" });
        onPriceClosing();
      });
  };

  const handleShippingTypeChange = (event) => {
    formik.handleChange(event);
    onShippingChoiceChange(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      shippingType: "",
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      postalCode: "",
      streetAddress: "",
      contactEmail: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      shippingType: Yup.string().required("shipping type is required"),
      firstName: Yup.string().required("first name is required"),
      lastName: Yup.string().required("last name is required"),
      country: Yup.string().required("country is required"),
      city: Yup.string().required("city is required"),
      postalCode: Yup.string().required("postal code is required"),
      streetAddress: Yup.string().required("street address is required"),
      contactEmail: Yup.string()
        .email("invalid email address")
        .required("email is required"),
      phoneNumber: Yup.string().required("phone number is required"),
    }),
    onSubmit: (values) => {
      setPurchaseConfirmation(true);
      onShippingChoiceChange(values.shippingType);
      onSubmit(values);
    },
  });

  if (purchaseConfirmation) {
    return (
      <div>
        <h2 className="font-bold text-2xl text-center">Order Confirmation</h2>
        <p className="text-center">
          Thank you for your purchase! Your order has been confirmed.
        </p>
      </div>
    );
  }

  //make the width of the inputs smaller and make longer if there is a need for more space
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">contact & delivery</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-left gap-3"
      >
        <div>
          <label for="shippingType">shipping Type:</label>
          <select
            id="shippingType"
            name="shippingType"
            onChange={handleShippingTypeChange}
            onBlur={formik.handleBlur}
            value={formik.values.shippingType}
            className="text-body"
          >
            <option value="" label="Select a shipping type" />
            <option value="standard" label="Standard Shipping" />
            <option value="express" label="Express Shipping" />
            <option value="locker" label="Parcel locker" />
          </select>
          {formik.touched.shippingType && formik.errors.shippingType && (
            <div className="text-red-500">{formik.errors.shippingType}</div>
          )}
        </div>

        <div>
          <label for="firstName">first Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="text-body"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500">{formik.errors.firstName}</div>
          )}
        </div>

        <div>
          <label for="lastName">last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className="text-body"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500">{formik.errors.lastName}</div>
          )}
        </div>

        <div>
          <label for="country">country:</label>
          <input
            type="text"
            id="country"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
            className="text-body"
          />
          {formik.touched.country && formik.errors.country && (
            <div className="text-red-500">{formik.errors.country}</div>
          )}
        </div>

        <div>
          <label for="city">city:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            className="text-body"
          />
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-500">{formik.errors.city}</div>
          )}
        </div>

        <div>
          <label for="postalCode">postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postalCode}
            className="text-body"
          />
          {formik.touched.postalCode && formik.errors.postalCode && (
            <div className="text-red-500">{formik.errors.postalCode}</div>
          )}
        </div>

        <div>
          <label for="streetAddress">street Address:</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.streetAddress}
            className="text-body"
          />
          {formik.touched.streetAddress && formik.errors.streetAddress && (
            <div className="text-red-500">{formik.errors.streetAddress}</div>
          )}
        </div>

        <div>
          <label for="contactEmail">contact Email:</label>
          <input
            type="text"
            id="contactEmail"
            name="contactEmail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactEmail}
            className="text-body"
          />
          {formik.touched.contactEmail && formik.errors.contactEmail && (
            <div className="text-red-500">{formik.errors.contactEmail}</div>
          )}
        </div>

        <div>
          <label for="phoneNumber">phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="text-body"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500">{formik.errors.phoneNumber}</div>
          )}
        </div>

        <button
          type="submit"
          className="bg-secondary text-white px-3 py-1 focus:outline-none hover:bg-text hover:text-body transition duration-300"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
