import express from 'express';
import { testController, getEmployees, addEmployee, removeEmployee, updateEmployee, getEmployee } from '../controllers/employeesController';
const router = express.Router();

router.get('/', testController);
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', addEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', removeEmployee);

export default router;