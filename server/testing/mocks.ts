const mockHospital = {
  id: 'test',
  name: 'StPau',
  address: 'Barcelona',
  email: 'StPau@Barcelona.com',
  phone: '12345',
  image:'https://machbel.com/fotos/2014/12/Fachada-principal-del-Hospital-de-Sant-Pau-Visita-al-Hospital-de-Sant-Pau-modernismo-en-Barcelona-Catalu%C3%B1a-Espa%C3%B1a-by-machbel.jpg',
  description: 'The most beautiful hospital ever built',
  country: 'Spain',
};

const mockUser = {
  id: 'userId',
  accountStatus: null,
  email: 'joshtest@test.com',
  hospitalId: mockHospital.id,
  image: null,
  name: 'joshtest@test.com',
  password: null,
  registrationDate:new Date(),
  role: null,
};

const mockEquipment = [
  {
    condition: "TEST CONDITION 1",
    description: "TEST DESCRIPTION 1",
    id: "id1",
    images: ["TEST IMAGE 1"],
    model: "TEST MODEL 1",
    ownerId: mockHospital.id,
    repairs: [],
    serialNumber: "TEST SERIAL NUMBER 1",
    type: "TEST TYPE 1",
    userId: mockUser.id,
    createdAt: new Date(),
    lastRevision: new Date(),
  },
  {
    condition: "TEST CONDITION 2",
    description: "TEST DESCRIPTION 2",
    id: "id2",
    images: ["TEST IMAGE 2"],
    model: "TEST MODEL 2",
    ownerId: mockHospital.id,
    repairs: [],
    serialNumber: "TEST SERIAL NUMBER 2",
    type: "TEST TYPE 2",
    userId: mockUser.id,
    createdAt: new Date(),
    lastRevision: new Date(),
  },
  {
    condition: "TEST CONDITION 3",
    description: "TEST DESCRIPTION 3",
    id: "id3",
    images: ["TEST IMAGE 3"],
    model: "TEST MODEL 3",
    ownerId: mockHospital.id,
    repairs: [],
    serialNumber: "TEST SERIAL NUMBER 3",
    type: "TEST TYPE 3",
    userId: mockUser.id,
    createdAt: new Date(),
    lastRevision: new Date(),
  },
];

export { mockUser, mockHospital, mockEquipment };
