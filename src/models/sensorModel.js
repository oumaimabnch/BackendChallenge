const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createSensorData = async (data) => {
  return await prisma.sensorData.create({ data });
  
};

module.exports = {
  createSensorData,
};