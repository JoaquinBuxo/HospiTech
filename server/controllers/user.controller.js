import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Creates a new user in the database.
 * @async
 * @function
 * @param {Object} req - The request object that contains the user data in the request body.
 * @param {Object} res - The response object that will send the created user data back to the client.
 * @throws {Error} If there is any error while creating the user in the database.
 */
const createUser = async (req, res) => {
  try {
    const createUser = await prisma.user.create({
      data: req.body,
    });
    res.status(201);
    res.send(createUser);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

/**
 * Retrieves all users from the database.
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object that will send the array of user data back to the client.
 * @throws {Error} If there is any error while retrieving the users from the database.
 */
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await prisma.user.findMany();
    res.status(200);
    res.send(getUsers);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

/**
 * Retrieves a user from the database by their ID.
 * @async
 * @function
 * @param {Object} req - The request object that contains the user ID as a parameter.
 * @param {Object} res - The response object that will send the user data back to the client.
 * @throws {Error} If there is any error while retrieving the user data from the database.
 */
const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    res.status(200);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export { createUser, getAllUsers, getUserById };
