import nodemailer from 'nodemailer'
import express from 'express';
const router = express.Router();
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    auth: {
        user: 'phuthuyjay04@gmail.com',
        pass: 'yrtrrfgwpdgphdga'
    }
});



// Định nghĩa router
// router.get('/admin/send-email', (req, res) => {
//     const mailOptions = {
//         from: 'phuthuyjay04@gmail.com',
//         to: 'thanhtung17112003@gmail.com',
//         subject: 'Gà',
//         text: 'Gà vc.'
//     };

//     // Gửi email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Internal Server Error');
//         } else {

//             res.send('Email sent successfully');
//         }
//     });
// });
export default router
