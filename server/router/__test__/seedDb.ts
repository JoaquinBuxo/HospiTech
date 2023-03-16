import seedFunctions from '../../testing/db-seeding-functions';

export default async () => {
  await seedFunctions.createMockHospital();
  await seedFunctions.createMockUser();
  await seedFunctions.createMockEquipment();
};
