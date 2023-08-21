const express = require("express");
const mongoose = require("mongoose");
const bodyPaser = require("body-parser");
const port = 5000;
const app = express();

app.use(bodyPaser.json());

const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(port, () => {
  console.log("Server on 5000");
});
