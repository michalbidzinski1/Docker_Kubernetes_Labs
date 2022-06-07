const express = require("express");

const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send(`Hello from backend`);
});
const PORT = 5000;
app.listen(PORT, (res) => {
  console.log(`App listening on port  ${PORT}`);
});
