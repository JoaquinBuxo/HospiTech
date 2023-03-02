import { Router } from 'express';
import * as hospitalController from './controllers/hospital.controller.js';

const router = Router();

router.get('/hospitals', hospitalController.getAllHospitals);

export default router;
