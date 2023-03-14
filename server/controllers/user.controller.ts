import { PrismaClient } from '@prisma/client';
import { Request,Response } from 'express';
const prisma = new PrismaClient();

const createUser = async (req:Request, res:Response) => {
  try {
    const createUser = await prisma.user.create({
      data: req.body,
    });
    res.status(200);
    res.send(createUser);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

const getAllUsers = async (req:Request, res:Response) => {
  try {
    const getUsers = await prisma.user.findMany();
    res.status(200);
    res.send(getUsers);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

const getUserById = async (req:Request, res:Response) => {
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

export { createUser, getAllUsers, getUserById };
