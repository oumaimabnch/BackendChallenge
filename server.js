const express = require('express');
const sensorRoutes = require('./src/routes/sensorRoutes');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use your routes
app.use('/api', sensorRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});