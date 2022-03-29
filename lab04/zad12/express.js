const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from my node app!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
