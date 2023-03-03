const baseUrl = 'http://localhost:4000';

export const getEquipmentById = async (id) => {
  const getData = await fetch(`${baseUrl}/equipment/${id}`);
  const response = await getData.json();
  return response;
};

export const getAllEquipments = async () => {
  const getData = await fetch(`${baseUrl}/equipments`);
  const response = await getData.json();
  return response;
};

export const createEquipment = async (equipment) => {
  const response = await fetch(`${baseUrl}/equipment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(equipment),
  });
  const responseJson = await response.json();
  return responseJson;
};
