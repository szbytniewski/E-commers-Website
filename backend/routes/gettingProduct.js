const express = require("express");
const driver = require("../db/db");

const router = express.Router();

router.get("/api/product", async (req, res) => {
  const session = driver.session();

  try {
    const results =
      await session.run(`MATCH (p:Product)-[:PRODUCT_SIZE]->(s:Size)
      RETURN p, COLLECT({ size: s.sizeName, amount: s.amount }) AS sizes`);
    const products = results.records.map((record) => {
      const product = record.get("p").properties;
      const sizes = record.get("sizes").map((size) => ({
        sizeName: size.size,
        amount: size.amount,
      }));
      return { ...product, sizes };
    });

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  } finally {
    session.close();
  }
});

module.exports = router;
