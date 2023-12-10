const sensorService = require("../services/sensorService");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const storeSensorData = async (req, res) => {
  try {
    const { serial, swVersion, temperature, gps } = req.body;
    const date = new Date().toISOString();

    // if (!serial || !swVersion || !temperature || !date || !gps) {
    if (!swVersion || !temperature || !gps) {
      return res.status(400).json({ error: "Incomplete data provided" });
    }

    const newSensorData = await sensorService.storeSensorData({
      serial,
      swVersion,
      temperature,
      date,
      gps,
    });

    res.status(201).json({
      message: "Sensor data created successfully",
      data: newSensorData,
    });
  } catch (error) {
    console.error("Error processing sensor data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Get
 const list = async (req, res) => {
  try {
    const sensors = await prisma.sensorData.findMany({});
    res.json(sensors);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = {
  storeSensorData,
  list,
};
