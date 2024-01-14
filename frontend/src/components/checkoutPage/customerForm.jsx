import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
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
      shippingType: Yup.string().required("Shipping type is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      postalCode: Yup.string().required("Postal code is required"),
      streetAddress: Yup.string().required("Street address is required"),
      contactEmail: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
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
        <h2>Order Confirmation</h2>
        <p>Thank you for your purchase! Your order has been confirmed.</p>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label for="shippingType">Shipping Type:</label>
        <select
          id="shippingType"
          name="shippingType"
          onChange={handleShippingTypeChange}
          onBlur={formik.handleBlur}
          value={formik.values.shippingType}
        >
          <option value="" label="Select a shipping type" />
          <option value="standard" label="Standard Shipping" />
          <option value="express" label="Express Shipping" />
          <option value="locker" label="Parcel locker" />
        </select>
        {formik.touched.shippingType && formik.errors.shippingType && (
          <div>{formik.errors.shippingType}</div>
        )}
      </div>

      <div>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}
      </div>

      <div>
        <label for="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        />
        {formik.touched.country && formik.errors.country && (
          <div>{formik.errors.country}</div>
        )}
      </div>

      <div>
        <label for="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city && (
          <div>{formik.errors.city}</div>
        )}
      </div>

      <div>
        <label for="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postalCode}
        />
        {formik.touched.postalCode && formik.errors.postalCode && (
          <div>{formik.errors.postalCode}</div>
        )}
      </div>

      <div>
        <label for="streetAddress">Street Address:</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.streetAddress}
        />
        {formik.touched.streetAddress && formik.errors.streetAddress && (
          <div>{formik.errors.streetAddress}</div>
        )}
      </div>

      <div>
        <label for="contactEmail">Contact Email:</label>
        <input
          type="text"
          id="contactEmail"
          name="contactEmail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactEmail}
        />
        {formik.touched.contactEmail && formik.errors.contactEmail && (
          <div>{formik.errors.contactEmail}</div>
        )}
      </div>

      <div>
        <label for="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div>{formik.errors.phoneNumber}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerForm;
