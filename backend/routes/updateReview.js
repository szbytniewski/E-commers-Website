const express = require("express");
const driver = require("../db/db");

const router = express.Router();

router.put("/api/reviews/:reviewId", async (req, res) => {
  const session = driver.session();
  const { reviewId } = req.params;
  const { comment } = req.body;

  try {
    const result = await session.run(
      `MATCH (r:Review) WHERE ID(r) = toInteger($reviewId)
       SET r.comment = $comment
       RETURN r`,
      { reviewId, comment }
    );

    if (result.records.length === 0) {
      res.status(404).send("Review not found");
    } else {
      const updatedReview = result.records[0].get("r").properties;
      res.json(updatedReview);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  } finally {
    session.close();
  }
});

module.exports = router;
