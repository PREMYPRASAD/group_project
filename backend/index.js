const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //access to get body as json data
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});