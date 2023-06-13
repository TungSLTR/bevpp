import AdProduct from "../models/AdProductModel.js";
import User from "../models/User.js";
import Hoadon from "../models/ReceiptModel.js";
import Cthoadon  from "../models/CTHDModel.js";
import db from '../config/Database.js'; 
import { Sequelize } from 'sequelize';
export const addCtHoaDon = async (req, res) => {
    const transaction = await db.transaction();
  
    try {
      const { mahd } = req.params;
     const { masp, soluong, dongia, tongtien } = req.body;
    
    
      // Tạo hóa đơn chi tiết và lưu vào cơ sở dữ liệu trong transaction
      const addcthd = await Cthoadon.create(
        {
          mahd: mahd,
          masp: masp,
          soluong: soluong,
          dongia: dongia,
          tongtien: tongtien,
        },
        { transaction }
      );
  
      // Lưu các bảng khác cùng mahd trong transaction
  
      // Commit transaction sau khi đã lưu thành công
      await transaction.commit();
  
      res.status(201).json(addcthd);
    } catch (error) {
      // Rollback transaction nếu có lỗi xảy ra
      await transaction.rollback();
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const getProductsDashboard = async (req, res) => {
    try {
      const response = await Cthoadon.findAll({
        include: [{ model: AdProduct, as: 'sanpham' }], // Sử dụng alias 'sanpham' thay vì 'sanphams'
        attributes: [
          ['masp', 'type'], // Đổi tên cột thành 'type' để phù hợp với biểu đồ
          [Sequelize.fn('sum', Sequelize.col('soluong')), 'value'],
        ],
        group: ['masp', 'sanpham.id'], // Sử dụng 'sanpham.id' thay vì 'sanphams.id'
      });
  
      const data = response.map(item => ({
        type: item.sanpham.tensp, // Sử dụng 'sanpham' thay vì 'sanphams'
        value: item.dataValues.value,
      }));
  
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  };