import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Creates a new hospital in the database
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @returns {Object} - The created hospital object
 */
const createHospital = async (req, res) => {
  try {
    const createHospital = await prisma.hospital.create({
      data: req.body,
    });
    res.status(201);
    res.send(createHospital);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

/**
 * Gets all hospitals from the database
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @returns {Array} - An array of hospital objects
 */
const getAllHospitals = async (req, res) => {
  try {
    const getHopsitals = await prisma.hospital.findMany();
    res.status(200);
    res.send(getHopsitals);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

/**
 * Gets a hospital by its ID from the database
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @returns {Object} - The hospital object with the specified ID
 */
const getHospitalById = async (req, res) => {
  try {
    const hospital = await prisma.hospital.findUnique({
      where: { id: req.params.id },
    });
    res.status(200);
    res.send(req.body);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export { createHospital, getAllHospitals, getHospitalById };
