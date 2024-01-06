const express = require("express");
const driver = require("../db/db");

const router = express.Router();

router.get("/api/product", async (req, res) => {
  const session = driver.session();

  try {
    const results =
      await session.run(`MATCH (p:Product)-[:PRODUCT_SIZE]->(s:Size)
    WITH
      p,
      SUM(s.amount) AS totalAmount
    SET p.totalAmount = totalAmount
    RETURN p`);
    const products = results.records.map(
      (record) => record.get("p").properties
    );

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  } finally {
    session.close();
  }
});

module.exports = router;
