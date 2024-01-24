const express = require("express");
const driver = require("../db/db");
const validator = require("validator");

const router = express.Router();

router.post("/api/product", (req, res) => {
  const {
    productName,
    category,
    color,
    price,
    img,
    shortDescription,
    longDescription,
    smallAmmount,
    mediumAmmount,
    largeAmmount,
    extraLargeAmmount,
  } = req.body;

  const currentDate = new Date().toISOString();

  if (
    validator.isEmpty(productName) ||
    validator.isEmpty(category) ||
    validator.isEmpty(color) ||
    validator.isEmpty(img) ||
    validator.isEmpty(shortDescription) ||
    validator.isEmpty(longDescription) ||
    parseFloat(price) <= 0 ||
    parseFloat(smallAmmount) < 0 ||
    parseFloat(mediumAmmount) < 0 ||
    parseFloat(largeAmmount) < 0 ||
    parseFloat(extraLargeAmmount) < 0
  ) {
    return res.status(400).send("Invalid or missing input data");
  }

  const session = driver.session();

  session
    .run(
      `
    CREATE (p:Product {
      productName: $productName,
      category: $category,
      color: $color,
      price: $price,
      image: $img,
      shortDescription: $shortDescription,
      longDescription: $longDescription,
      createdDate: $currentDate
    })
    WITH p
    CREATE (p)-[:PRODUCT_SIZE]->(:Size {sizeName: 'S', amount: $smallAmmount})
    CREATE (p)-[:PRODUCT_SIZE]->(:Size {sizeName: 'M', amount: $mediumAmmount})
    CREATE (p)-[:PRODUCT_SIZE]->(:Size {sizeName: 'L', amount: $largeAmmount})
    CREATE (p)-[:PRODUCT_SIZE]->(:Size {sizeName: 'XL', amount: $extraLargeAmmount})
    `,
      {
        productName,
        category,
        color,
        price,
        img,
        shortDescription,
        longDescription,
        smallAmmount,
        mediumAmmount,
        largeAmmount,
        extraLargeAmmount,
        currentDate,
      }
    )
    .then((result) => {
      res.status(200).send("Success");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    })
    .finally(() => {
      session.close();
    });
});

module.exports = router;
