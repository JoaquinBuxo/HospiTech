import { Equipment } from "@prisma/client";
import prisma from "../models/db";
import uploadImages from "../utils/uploadImages"; // todo - need testing for Cloudinary

const createEquipment = async (equipment:Equipment) => {
  try {
    const response = await prisma.equipment.create({
      data: equipment,
    });
    return response;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const getAllEquipments = async () => {
  try {
    const getEquipments = await prisma.equipment.findMany();
    return getEquipments;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const getEquipmentById = async (id:string) => {
  try {
    const equipment = await prisma.equipment.findUnique({
      where: { id },
    });
    return equipment;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default { createEquipment, getAllEquipments, getEquipmentById };
