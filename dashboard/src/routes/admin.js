import express from 'express';
import * as adminController from '../controllers/adminController.js';
import adminAuth from '../middleware/auth.js';

const router = express.Router();


router.get('/auth/login', adminController.showLoginPage);
router.post('/auth/login-submit', adminController.login);

router.use(adminAuth);
router.get('/dashboard', adminController.showDashboard);

//default export from here 
export default router;