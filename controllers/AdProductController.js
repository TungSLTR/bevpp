import AdProduct from "../models/AdProductModel.js";
import { validationResult } from "express-validator";
import fs from "fs";
import path from "path";
export const getProducts = async (req, res) => {
  try {
    const response = await AdProduct.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


export const getProductById = async (req, res) => {

  try {
    const product = await AdProduct.findOne({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { tensp } = req.body;
    const { mota, mota_chinh } = req.body;
    const { dongia, giacu } = req.body;
    const { img, img_con } = req.files;
    const { id_nhacungcap } = req.body;
    const { id_loailon } = req.body;
    const { id_loai } = req.body;
    const { color } = req.body;
    const { donvitinh } = req.body;
    const { dinhluong } = req.body;
    const { chatlieu } = req.body;
    const { donggoi } = req.body;
    const { khogiay } = req.body;
    const { xuatxu } = req.body;
    const { kichthuoc } = req.body;
    const { thuonghieu } = req.body;
    const { thetich } = req.body;
    const { url } = req.body;


    const product = await AdProduct.create({
      tensp,
      giacu: giacu || 0,
      mota,
      mota_chinh,
      dongia,
      img: img.name,
      img_con: img_con.map((file) => file.name).join(","),
      id_nhacungcap,
      id_loailon,
      id_loai,
      color,
      donvitinh,
      dinhluong,
      chatlieu,
      donggoi,
      khogiay,
      xuatxu,
      kichthuoc,
      thuonghieu,
      thetich,
      url,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { tensp, mota, mota_chinh, dongia, giacu, id_nhacungcap, id_loailon, id_loai, color, donvitinh, dinhluong, chatlieu, donggoi, khogiay, xuatxu, kichthuoc, thuonghieu, thetich, url } = req.body;
    const { img, img_con } = req.files || {};
    const product = await AdProduct.findOne({ where: { id: req.params.id } });

    const updatedProduct = await product.update({
      tensp: tensp || product.tensp,
      mota: mota || product.mota,
      
      mota_chinh: mota_chinh !== "" ? mota_chinh : "",
      dongia: dongia || product.dongia,
      giacu: giacu || 0, // Set giacu to 0 if it's empty
      img: img ? img.name : product.img,
      img_con: img_con || img_con ? img_con.map((file) => file.name).join(",") : product.img_con,
      id_nhacungcap: id_nhacungcap || product.id_nhacungcap,
      id_loailon: id_loailon || product.id_loailon,
      id_loai: id_loai || product.id_loai,
      color: color !== "" ? color : "",
      donvitinh: donvitinh !== "" ? donvitinh : "",
      dinhluong: dinhluong !== "" ? dinhluong : "",
      chatlieu: chatlieu !== "" ? chatlieu : "",
      donggoi: donggoi !== "" ? donggoi : "",
      khogiay: khogiay !== "" ? khogiay : "",
      xuatxu: xuatxu !== "" ? xuatxu : "",
      kichthuoc: kichthuoc !== "" ? kichthuoc : "",
      thuonghieu: thuonghieu !== "" ? thuonghieu : "",
      thetich: thetich !== "" ? thetich : "",
      url: url || product.url,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await AdProduct.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Menu Deleted" });
  } catch (error) {
    console.log(error.message);
  }
}

