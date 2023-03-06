import { PrismaClient } from '@prisma/client';
import uploadImages from '../utils/uploadImages.js';
const prisma = new PrismaClient();

const createEquipment = async (req, res) => {
  try {
    const images = req.body.images[0];
    const imagesURL = await uploadImages(images);
    req.body.images = [imagesURL];
    const createEquipment = await prisma.equipment.create({
      data: req.body,
    });
    res.status(200);
    res.send(createEquipment);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

const getAllEquipments = async (req, res) => {
  try {
    const getEquipments = await prisma.equipment.findMany();
    res.status(200);
    res.send(getEquipments);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await prisma.equipment.findUnique({
      where: { id: req.params.id },
    });
    res.status(200);
    res.send(equipment);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

export { createEquipment, getAllEquipments, getEquipmentById };
