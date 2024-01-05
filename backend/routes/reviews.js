const express = require("express");
const driver = require("../db/db");

const router = express.Router();

//Dziala dobrze ale trzeba jeszcze wprowadzic walidacje zeby wyswiewtlał sie dobry komunikat
// jak nie ma podanego produkt (backend specific bo ze strony frontendu nie ma jak tego zrobic)

router.post("/api/reviews", (req, res) => {
  const { productName, rating, comment } = req.body;

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
