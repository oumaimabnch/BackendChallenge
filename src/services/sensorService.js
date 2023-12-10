// src/services/sensorService.js
const sensorModel = require("../models/sensorModel");

const storeSensorData = async (sensorData) => {
  try {
    const result = await sensorModel.createSensorData(sensorData);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      status: 500,
      error: "Failed to store sensor data",
    };
  }
};

module.exports = {
  storeSensorData,
};
