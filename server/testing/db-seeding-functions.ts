import prisma from "../models/db";
import * as mockData from "./mocks";
import user from "./user.setup";
import hospital from "./hospital.setup";
import equipment from "./equipment.setup";
import { Equipment, Hospital } from "@prisma/client";

const cleanDatabase = async () => {
  await prisma.equipment.deleteMany();
  await prisma.hospital.deleteMany();
  await prisma.user.deleteMany();
};

/* Hospital */
const createMockHospital = async () => {
  try {
    const hospCreated = await hospital.createHospital(mockData.mockHospital);
    return hospCreated;
  } catch (error) {
    console.log("--- Error seeding mockHospital ---");
  }
};

/* User */
const createMockUser = async () => {
  try {
    const userCreated = await user.createUser(mockData.mockUser);
    return userCreated;
  } catch (error) {
    console.log("--- Error seeding mockUser ---");
  }
};

/* Equipment */
const createMockEquipment = async (
  oneEquipment = mockData.mockEquipment[0]
) => {
  try {
    const equipCreated = await equipment.createEquipment(oneEquipment);
    return equipCreated;
  } catch (error) {
    console.log("--- Error seeding mockEquipment ---");
  }
};

export default {
  cleanDatabase,
  createMockHospital,
  createMockUser,
  createMockEquipment,
};
