import app from '../../app';
import request from 'supertest';
import seedDb from './seedDb';
import seedDbFunctions from '../../testing/db-seeding-functions';
import * as mockData from '../../testing/mocks';

const hospitalFields = ['id', 'name', 'address', 'email', 'phone', 'country'];

beforeAll(async () => {
  await seedDb();
});

afterAll(async () => {
  await seedDbFunctions.cleanDatabase();
});

describe('/hospitals', () => {

  test('Returns status code 200 on success',async () => {
      const res = await request(app).get("/hospitals");
    expect(res.statusCode).toEqual(200);
  });

  test('Returns array of hospitals', async() => {
    const res = await request(app).get("/hospitals");
    expect(Array.isArray(res.body)).toBe(true);
    const hospitalKeys = Object.keys(res.body[0]);
    expect(hospitalKeys).toEqual(expect.arrayContaining(hospitalFields));
  });
});

describe('/hospital/:id', () => {
  const mockHospital = mockData.mockHospital;
  test('Returns status code 200 on success', async () => {
    const res = await request(app).get(`/hospital/${mockHospital.id}`);

    expect(res.statusCode).toEqual(200);
  });

  test('Returns status code 400 on fail', async () => {
    const res = await request(app).get(`/hospital/123`);
    expect(res.statusCode).toEqual(400);
  });

  test('Returns a hospital object', async () => {
    const res = await request(app).get(`/hospital/${mockHospital.id}`);

    const hospitalObj = res.body;
    expect(typeof hospitalObj).toEqual('object');

    const hospitalKeys = Object.keys(hospitalObj);
    expect(hospitalKeys).toEqual(expect.arrayContaining(hospitalFields));
  });
});
