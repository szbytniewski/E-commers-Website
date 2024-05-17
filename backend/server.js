const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require("./routes/newsletterRoute.js"));
app.use(require("./routes/addingProduct.js"));
app.use(require("./routes/addReviews.js"));
app.use(require("./routes/getReviews.js"));
app.use(require("./routes/gettingProduct"));
app.use(require("./routes/addOrder.js"));
app.use(require("./routes/deleteReview.js"));
app.use(require("./routes/updateReview.js"));
// Tutaj podajam wszystkie routey

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
