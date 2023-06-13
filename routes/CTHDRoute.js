import express from 'express';
import { addCtHoaDon, getProductsDashboard } from '../controllers/CTHDController.js';

const router = express.Router();
router.post('/cthoadon/:mahd', addCtHoaDon);
router.get('/admin/product/dashboard', getProductsDashboard);
export default router