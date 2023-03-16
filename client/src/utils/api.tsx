const baseURL = import.meta.env.VITE_API_SERVER_URL;
import { Equipment, userData } from '../Typescript-Interfaces/Types';

export const getEquipmentById = async (id: string) => {
  const getData = await fetch(`${baseURL}/equipment/${id}`);
  const response = await getData.json();
  return response;
};

export const getAllEquipments = async () => {
  const getData = await fetch(`${baseURL}/equipments`);
  const response = await getData.json();
  return response;
};

export const createEquipment = async (equipment: Equipment) => {
  const response = await fetch(`${baseURL}/equipment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(equipment),
  });
  const responseJson = await response.json();
  return responseJson;
};

export const getAllHospitals = async () => {
  const response = await fetch(`${baseURL}/hospitals`);
  const responseJson = await response.json();
  return responseJson;
};

export const createUser = async (user: userData) => {
  const response = await fetch(`${baseURL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const responseJson = await response.json();
  return responseJson;
};

export const getAllUsers = async () => {
  const response = await fetch(`${baseURL}/users`);
  const responseJson = await response.json();
  return responseJson;
};
