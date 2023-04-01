import { PrismaClient } from '@prisma/client';
import uploadImages from '../utils/uploadImages.js';
const prisma = new PrismaClient();

/**
 * Creates a new equipment with the provided data.
 * @async
 * @function createEquipment
 * @param {Object} req - The request object containing the data for the new equipment.
 * @param {Object} res - The response object.
 * @returns {Object} The newly created equipment.
 * @throws {Error} If an error occurs while creating the equipment.
 */
const createEquipment = async (req, res) => {
  try {
    const imagesURL = await uploadImages(req.body.images);
    req.body.images = imagesURL;
    const createEquipment = await prisma.equipment.create({
      data: req.body,
    });
    res.status(201);
    res.send(createEquipment);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

/**
 * Retrieves all equipments in the database.
 * @async
 * @function getAllEquipments
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} An array of all equipments in the database.
 * @throws {Error} If an error occurs while retrieving the equipments.
 */
const getAllEquipments = async (req, res) => {
  try {
    const getEquipments = await prisma.equipment.findMany();
    res.status(200);
    res.send(getEquipments);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

/**
 * Retrieves the equipment with the specified ID.
 * @async
 * @function getEquipmentById
 * @param {Object} req - The request object containing the ID of the equipment to retrieve.
 * @param {Object} res - The response object.
 * @returns {Object} The equipment with the specified ID.
 * @throws {Error} If an error occurs while retrieving the equipment.
 */
const getEquipmentById = async (req, res) => {
  try {
    const equipment = await prisma.equipment.findUnique({
      where: { id: req.params.id },
    });
    res.status(200);
    res.send(equipment);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export { createEquipment, getAllEquipments, getEquipmentById };
