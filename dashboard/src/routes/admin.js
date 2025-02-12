import express from 'express';
import * as adminController from '../controllers/adminController.js';

const router = express.Router();

router.get('/auth/login', adminController.showLoginPage);
router.post('/auth/login', adminController.login);

