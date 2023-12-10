const express = require("express");
const router = express.Router();
const sensorController = require("../controllers/sensorController");
const list = require("../controllers/sensorController");

router.post("/sensors", sensorController.storeSensorData);
router.get("/sensors", sensorController.list);

module.exports = router;
