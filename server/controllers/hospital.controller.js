import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getAllHospitals = async (req, res) => {
  try {
    const getHopsitals = await prisma.hospital.findMany();
    res.status(200);
    res.send(getHopsitals);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

export { createHospital, getAllHospitals };
