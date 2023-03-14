import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createHospital = async (req, res) => {
  try {
    const createHospital = await prisma.hospital.create({
      data: req.body,
    });
    res.status(201);
    res.send(createHospital);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

const getAllHospitals = async (req, res) => {
  try {
    const getHopsitals = await prisma.hospital.findMany();
    res.status(200);
    res.send(getHopsitals);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

const getHospitalById = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await prisma.hospital.findUnique({
      where: { id },
    });
    if (!hospital) throw Error;
    res.status(200);
    res.send(hospital);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send({ error });
  }
};

export { createHospital, getAllHospitals, getHospitalById };
