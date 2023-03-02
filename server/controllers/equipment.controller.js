import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createEquipment = async (req, res) => {
  try {
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
    const { id } = req.params;
    const equipment = await prisma.equipment.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200);
    res.send(equipment);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

export { createEquipment, getAllEquipments, getEquipmentById };
