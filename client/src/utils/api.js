const baseUrl = 'http://localhost:4000';

export const getAllEquipments = async () => {
  const getData = await fetch(`${baseUrl}/equipments`);
  const response = await getData.json();
  return response;
};
