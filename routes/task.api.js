const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.post("/tasks", taskController.createTask);

router.get("/tasks", taskController.getTask);

router.put("/tasks:/id", taskController.updateTask);

router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
