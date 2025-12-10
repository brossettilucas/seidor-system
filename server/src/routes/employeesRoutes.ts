import express from 'express';
import { testController, getEmployees } from '../controllers/employeesController';
const router = express.Router();

router.get('/', testController);
router.get('/employees', getEmployees);

export default router;