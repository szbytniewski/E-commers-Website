import React, { useState } from "react";
import { useProducts } from "../../context/productsContext";

function FilteringAndSort({ setFilteredProducts }) {
  const { products } = useProducts();
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [productName, setProductName] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState("");

  const handleFilterSortChange = () => {
    let filteredProducts = products;

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    if (color) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === color
      );
    }

    if (productName) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(productName.toLowerCase())
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseFloat(priceRange)
    );

    if (sortBy === "asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filteredProducts);
  };

  return (
    <form>
      <div className="flex flex-wrap gap-4 max-w-90 justify-center">
        <div>
          <label htmlFor="productName">search:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="text-body"
          />
        </div>

        <div>
          <label htmlFor="category">type:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-body"
          >
            <option value="" label="select" />
            <option value="shirt" label="shirt" />
            <option value="hoodie" label="hoodie" />
            <option value="pants" label="pants" />
          </select>
        </div>

        <div>
          <label htmlFor="color">color:</label>
          <select
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="text-body"
          >
            <option value="" label="select"></option>
            <option value="black" label="black"></option>
            <option value="white" label="white"></option>
            <option value="grey" label="grey"></option>
            <option value="blue" label="blue"></option>
          </select>
        </div>

        <div className="flex flex-row gap-1">
          <label htmlFor="priceRange">price range:</label>
          <input
            type="range"
            id="maxPrice"
            name="maxPrice"
            min="0"
            max="1000"
            step="1"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="text-body"
          />
          <div>{priceRange}</div>
        </div>

        <div>
          <label htmlFor="sortBy">sort by:</label>
          <select
            id="sortBy"
            name="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-body"
          >
            <option value="" label="Select sorting" />
            <option value="asc" label="price ascending" />
            <option value="desc" label="price descending" />
          </select>
        </div>
      </div>
      <br />
      <div className="text-center bg-secondary text-white px-3 py-1 focus:outline-none hover:bg-text hover:text-body transition duration-300">
        <button
          type="button"
          onClick={handleFilterSortChange}
          className="w-full"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}

export default FilteringAndSort;
