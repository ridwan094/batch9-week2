// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();
router.get('/',indexCtrl.AuthCtrl.requireSignin,indexCtrl.AuthCtrl.findAll);
router.post('/signup/', indexCtrl.AuthCtrl.signup);
router.post('/signin', indexCtrl.AuthCtrl.signin);

export default router;