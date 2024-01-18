const express = require("express");
const driver = require("../db/db");

const router = express.Router();

router.delete("/api/reviews/:reviewId", async (req, res) => {
  const session = driver.session();
  const { reviewId } = req.params;

  try {
    const result = await session.run(
      "MATCH (r:Review) WHERE ID(r) = toInteger($reviewId) DETACH DELETE r",
      { reviewId }
    );

    if (result.summary.counters && result.summary.counters.nodesDeleted === 0) {
      res.status(404).send("Review not found");
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  } finally {
    session.close();
  }
});

module.exports = router;
