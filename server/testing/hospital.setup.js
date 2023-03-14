import prisma from '../models/db';

const createHospital = async (hospital) => {
  try {
    const createHospital = await prisma.hospital.create({
      data: hospital,
    });
    return createHospital;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const getAllHospitals = async (req, res) => {
  try {
    const getHopsitals = await prisma.hospital.findMany({});
    return getHopsitals;
  } catch (error) {
    console.log(error);
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

const deleteAllHospitals = async () => {
  try {
    const deleted = await prisma.hospital.deleteMany({});
    return deleted;
  } catch (error) {
    console.log(error);
  }
};

export default {
  createHospital,
  getAllHospitals,
  getHospitalById,
  deleteAllHospitals,
};
