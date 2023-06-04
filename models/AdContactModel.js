import {Sequelize} from 'sequelize';
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const AdContact = db.define('contact',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mota: DataTypes.STRING, 
   
    sdt: DataTypes.STRING,
    diachi: DataTypes.STRING,
    gmail: DataTypes.STRING,
    map: DataTypes.STRING,
    url: DataTypes.STRING,
    status: DataTypes.INTEGER,
},{
    freezeTableName:true
});

export default AdContact;

(async()=>{
    await db.sync();
})();