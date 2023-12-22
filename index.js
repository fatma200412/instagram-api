const express = require("express");
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const Router = require("./src/routers/userRouters");

app.use(bodyParser.json());

app.use("/", Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
