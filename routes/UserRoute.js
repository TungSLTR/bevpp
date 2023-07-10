import express from 'express';
import { userRegister,userLogin,userRefresh,userLogout,getUserByMakh,editUser,getTenkh,requestPasswordReset,resetPassword,getAllUser,deleteUser} from '../controllers/UserController.js';
import {verifyToken} from '../controllers/middlewareController.js';

const router = express.Router();

router.post('/account/register', userRegister);
router.post('/account/login', userLogin);
router.post('/account/refresh', userRefresh);
router.post('/account/logout', userLogout);
router.get('/account/:makh',verifyToken, getUserByMakh);
router.patch('/account/edit/:makh', editUser);
router.get('/account/tenkh/:makh',getTenkh);
router.post('/account/send-mail',requestPasswordReset)
router.post('/account/rspass',resetPassword);
router.get('/admin/user',getAllUser);
router.delete('/admin/user/:makh',deleteUser);


export default router