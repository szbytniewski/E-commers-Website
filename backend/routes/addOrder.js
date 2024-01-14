const express = require("express");
const driver = require("../db/db");

const router = express.Router();

router.post("/api/order", (req, res) => {
  const {
    shippingType,
    firstName,
    lastName,
    country,
    city,
    postalCode,
    streetAddress,
    email,
    phoneNumber,
    products,
  } = req.body;

  const session = driver.session();

  session
    .run(
      `CREATE (o:Order {
        shippingType: $shippingType,
        firstName: $firstName,
        lastName: $lastName,
        country: $country,
        city: $city,
        postalCode: $postalCode,
        streetAddress: $streetAddress,
        email: $email,
        phoneNumber: $phoneNumber
      })
      WITH o
      UNWIND $products AS productData
      MATCH (p:Product {productName: productData.productName})
      CREATE (o)-[:CONTAINS {
        quantity: productData.quantity,
        size: productData.size
      }]->(p)`,
      {
        shippingType,
        firstName,
        lastName,
        country,
        city,
        postalCode,
        streetAddress,
        email,
        phoneNumber,
        products,
      }
    )
    .then(() => {
      return products.reduce((previousPromise, product) => {
        return previousPromise.then(() => {
          return session.run(
            `
              MATCH (p:Product {productName: $productName})
              OPTIONAL MATCH (p)-[:PRODUCT_SIZE]->(s:Size {sizeName: $size})
              SET s.amount = s.amount - $quantity
              `,
            product
          );
        });
      }, Promise.resolve());
    })

    .then(() => {
      res.status(200).send("Order placed successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    })
    .finally(() => {
      session.close();
    });
});

module.exports = router;
