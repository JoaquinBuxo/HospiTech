import { User } from '@prisma/client';
import prisma from '../models/db';
import { Request, Response } from "express";

const createUser = async (user:User) => {
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

export default { createUser, getAllUsers, getUserById };
