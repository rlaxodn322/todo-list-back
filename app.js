const express = require("express");
const mongoose = require("mongoose");
const bodyPaser = require("body-parser");
const indexRouter = require("./routes/index");
const port = 5000;
const app = express();

app.use(bodyPaser.json());
app.use("/api", indexRouter);
const mongoURI = `mongodb://127.0.0.1:27017/todo-demo`;

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
