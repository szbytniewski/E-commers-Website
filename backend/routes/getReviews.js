const express = require("express");
const driver = require("../db/db");

const router = express.Router();

router.get("/api/reviews", async (req, res) => {
  const session = driver.session();
  const { productName } = req.query;

  try {
    const results = await session.run(
      `MATCH (r:Review)-[:OF]->(p:Product {productName: $productName})
      RETURN r`,
      { productName }
    );
    const reviews = results.records.map((record) => ({
      identity: record.get("r").identity.low,
      properties: record.get("r").properties,
    }));

    res.json(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  } finally {
    session.close();
  }
});

module.exports = router;
