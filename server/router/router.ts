import { Router } from 'express';
import * as hospitalController from '../controllers/hospital.controller';
import * as equipmentController from '../controllers/equipment.controller';
import * as userController from '../controllers/user.controller';

const router = Router();

// hospital routes
router.get('/hospital/:id', hospitalController.getHospitalById);
router.get('/hospitals', hospitalController.getAllHospitals);
router.post('/hospital', hospitalController.createHospital);

// equipment routes
router.get('/equipment/:id', equipmentController.getEquipmentById);
router.get('/equipments', equipmentController.getAllEquipments);
router.post('/equipment', equipmentController.createEquipment);

// user routes
router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.post('/user', userController.createUser);

export default router;
