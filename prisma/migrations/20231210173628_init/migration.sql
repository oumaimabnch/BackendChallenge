-- CreateTable
CREATE TABLE "SensorData" (
    "id" SERIAL NOT NULL,
    "serial" TEXT NOT NULL,
    "swVersion" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gps" TEXT NOT NULL,

    CONSTRAINT "SensorData_pkey" PRIMARY KEY ("id")
);
