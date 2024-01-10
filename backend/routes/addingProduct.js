const express = require("express");
const driver = require("../db/db");

const router = express.Router();

// Could add a get request here to see how many items we have and what id to give

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

  const session = driver.session();
  const shippingCost = 10;

  session
    .run(
      `
    CREATE (p:Product {
      productName: $productName,
      category: $category,
      color: $color,
      price: $price,
      shippingCost: $shippingCost,
      image: $img,
      shortDescription: $shortDescription,
      longDescription: $longDescription
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
        shippingCost,
        img,
        shortDescription,
        longDescription,
        smallAmmount,
        mediumAmmount,
        largeAmmount,
        extraLargeAmmount,
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
