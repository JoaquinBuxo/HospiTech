import prisma from '../models/db';

const createUser = async (user) => {
  try {
    const createUser = await prisma.user.create({
      data: user,
    });
    return createUser;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const getAllUsers = async (req, res) => {
  try {
    const getUsers = await prisma.user.findMany();
    res.status(200);
    res.send(getUsers);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    res.status(200);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

export default { createUser, getAllUsers, getUserById };
