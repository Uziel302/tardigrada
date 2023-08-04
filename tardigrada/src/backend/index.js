#!/usr/bin/env nodejs
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRouter = require("./router.js");
app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", indexRouter);

app.listen(3001, () => console.log("Server is running on port 3001"));
