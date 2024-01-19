const express = require("express");
const driver = require("../db/db");
const validator = require("validator");

const router = express.Router();

router.post("/api/reviews", (req, res) => {
  const { productName, rating, comment } = req.body;

  if (!productName || !rating || !comment) {
    return res.status(400).send("Invalid or missing input data");
  }

  const session = driver.session();

  session
    .run(
      `MATCH (p:Product {productName: $productName})
      CREATE (r:Review {product: $productName, rating: $rating, comment: $comment})-[:OF]->(p)`,
      { productName, rating, comment }
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
