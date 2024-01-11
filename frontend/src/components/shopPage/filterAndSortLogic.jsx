import React from "react";
import { useFormik } from "formik";
import { useProducts } from "../../context/productsContext";

function Filtering() {
  const { products, setFilteredProducts } = useProducts();
}

export default Filtering;
