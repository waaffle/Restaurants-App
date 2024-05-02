const express = require("express");
const api = require("./api");
const bodyParser = require("body-parser");
const port = 3001;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use("/api", api);

app.listen(port, "0.0.0.0", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://176.109.103.144:" + port);
});
