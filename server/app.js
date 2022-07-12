const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
