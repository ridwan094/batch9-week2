import { Router } from 'express';
import IndexCtrl from '../controllers/IndexController'

const router = Router();
router.put('/:id', IndexCtrl.EmployeesCtrl.update);

export default router;