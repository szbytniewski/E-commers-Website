const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require("./routes/newsletterRoute.js"));
app.use(require("./routes/addingProduct.js"));
app.use(require("./routes/reviews.js"));
// Tutaj podajam wszystkie routey

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
