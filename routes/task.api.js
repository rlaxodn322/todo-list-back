const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.post("/tasks", taskController.createTask);

router.get("/tasks", taskController.getTask);

router.put("/tasks:/id", (req, res) => {
  res.send("update task");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("delete task");
});

module.exports = router;
