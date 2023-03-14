const baseURL = 'http://localhost:4000';


export const getEquipmentById = async (id) => {
  const getData = await fetch(`${baseURL}/equipment/${id}`);
  const response = await getData.json();
  return response;
};

export const getAllEquipments = async () => {
  const getData = await fetch(`${baseURL}/equipments`);
  const response = await getData.json();
  return response;
};

export const createEquipment = async (equipment) => {
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

export const createUser = async (user) => {
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
