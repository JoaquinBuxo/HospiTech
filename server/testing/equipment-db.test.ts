// /*
// README:
// This file tests the that the DB is saving data correctly, but it is not testing HTTP end-points.
// */
// import { mockEquipment } from './mocks';
// import seedDb from './db-seeding-functions';
// import equipmentSetup from './equipment.setup';
// import { Equipment } from '@prisma/client';

// beforeAll(async () => {
//   await seedDb.cleanDatabase();
// });

// describe('Equipment', () => {
//   beforeEach(async () => {
//     await seedDb.createMockHospital();
//     await seedDb.createMockUser();
//   });
//   afterEach(async () => {
//     await seedDb.cleanDatabase();
//   });

//   let savedEquipment = [];

//   test('Create new equipment', async () => {
//     const result= await seedDb.createMockEquipment(mockEquipment[0]);

//     expect(result).toMatchObject({
//       ...mockEquipment[0],
//       id: result.id,
//       createdAt: result.createdAt,
//       lastRevision: result.lastRevision,
//     });

//     savedEquipment.push(result);
//   });

//   test('Get all equipment', async () => {
//     for (let i = 0; i < mockEquipment.length; i++) {
//       savedEquipment.push(await seedDb.createMockEquipment(mockEquipment[i]));
//     }

//     expect(savedEquipment).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           id: mockEquipment[mockEquipment.length - 1].id,
//         }),
//       ])
//     );

//     expect(mockEquipment.length).toBe(3);
//   });

//   test('Get equipment by ID', async () => {
//     await seedDb.createMockEquipment(mockEquipment[0]);

//     const equipmentFromId = await equipmentSetup.getEquipmentById(
//       mockEquipment[0].id
//     );

//     expect(equipmentFromId.condition).toEqual(mockEquipment[0].condition);
//   });
// });
