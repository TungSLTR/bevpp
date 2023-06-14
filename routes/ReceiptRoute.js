import { addHoadon,deleteHoadon,getHoadonToday, getHoadonAll } from "../controllers/ReceiptController.js";
import express from 'express';

const router = express.Router();

router.get('/admin/counthoadon/',getHoadonAll);
router.get('/admin/counthoadontoday/',getHoadonToday);
router.post('/hoadon/:makh',addHoadon);
router.delete('/hoadon/:mahd',deleteHoadon);
export default router;
