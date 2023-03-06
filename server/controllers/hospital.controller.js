import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createHospital = async (req, res) => {
  try {
    const createHospital = await prisma.hospital.create({
      data: req.body,
    });
    res.status(200);
    res.send(createHospital);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

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

const getHospitalById = async (req, res) => {
  try {
    const hospital = await prisma.hospital.findUnique({
      where: { id: req.params.id },
    });
    res.status(200);
    res.send(req.body);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

export { createHospital, getAllHospitals, getHospitalById };
