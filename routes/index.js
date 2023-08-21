const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");

router.use("/", taskApi);

module.exports = router;
