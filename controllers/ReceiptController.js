
import Product from "../models/ProductModel.js";
import User from "../models/User.js";
import Hoadon from "../models/ReceiptModel.js";
import { Sequelize, Op } from 'sequelize';
export const addHoadon = async (req, res) => {
    try {
        const { makh } = req.params
        const email = req.body.email
        const sodienthoai = req.body.sodienthoai
        const diachi = req.body.diachi
        const tongtien = req.body.tongtien
        const createHoadon = await Hoadon.create({
            makh,
            email,
            sodienthoai,
            diachi,
            tongtien,
            tinhtrang: 0
        })
       res.status(201).json(createHoadon); 
    } catch (error) {
        console.log(error);
    }
}

export const deleteHoadon = async (req, res) => {
    try {
        const { mahd } = req.params
        const hoadon = await Hoadon.findOne({ where: { mahd } })
        if (!hoadon) {
            res.status(404).json({ msg: "Hoadon không tông tại" });
        } else {
            await Hoadon.destroy({
                where: { mahd }
            })
        }

        res.status(200).json({ msg: "Hoadon Deleted" });
    } catch (error) {
        console.log(error);
    }
}

export const getHoadonAll = async(req, res) => {
    try {
        const count = await Hoadon.count('mahd');
        res.status(200).json(count);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'An error occurred' });
      }
}
export const getHoadonToday = async (req, res) => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Đặt giờ về 00:00:00
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1); // Lấy ngày hôm sau để làm điểm kết thúc
  
      const response = await Hoadon.count("mahd", {
        where: {
          createdAt: {
            [Op.gte]: today,
            [Op.lt]: tomorrow,
          },
        },
      });
  
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };