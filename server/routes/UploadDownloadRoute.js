import { Router } from 'express';
import IndexCtrl from '../controllers/IndexController'

const router = Router();
router.post('/', IndexCtrl.UploadCtrl.upload);
router.post('/emps/:id', IndexCtrl.UploadCtrl.upload,IndexCtrl.EmployeesCtrl.update);
router.post('/multipart/', IndexCtrl.UploadCtrl.uploadMultipart,
IndexCtrl.EmployeesCtrl.create,
IndexCtrl.EmployeesCtrl.findEmployeeImages);
router.get('/:filename', IndexCtrl.UploadCtrl.download);
export default router;