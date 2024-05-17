const express = require("express");
const driver = require("../db/db");
const validator = require("validator");

const router = express.Router();

router.post("/api/newsletter", (req, res) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).send("Invalid email address");
  }

  const session = driver.session();

  session
    .run(`CREATE (:Newsletter {email: $email})`, { email })
    .then((result) => {
      res.status(200).send("Success");
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
