import express from 'express';
import { addCtHoaDon, getProductsDashboard, getTotalRevenue, getTodayRevenue,getCTHDByMahd } from '../controllers/CTHDController.js';

const router = express.Router();
router.post('/cthoadon/:mahd', addCtHoaDon);
router.get('/admin/pro/dashboardpro/ad', getProductsDashboard);
router.get('/admin/pro/totaltoday', getTodayRevenue);
router.get('/admin/pro/totalall', getTotalRevenue);
router.get('/admin/cthoadon',getCTHDByMahd); 

export default router