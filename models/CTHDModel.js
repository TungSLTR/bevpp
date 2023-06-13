import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import AdProduct from './AdProductModel.js';
const { DataTypes } = Sequelize;

const Cthoadon = db.define('cthoadon', {
    mahd: {
        type: DataTypes.INTEGER,
        primaryKey: true,

    },
    masp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: AdProduct,
            key: "masp",
          },
    },
    soluong: DataTypes.INTEGER,
    dongia: DataTypes.INTEGER,
    tongtien: DataTypes.INTEGER
}, {
    freezeTableName: true
});
Cthoadon.belongsTo(AdProduct, { foreignKey: 'masp' });
export default Cthoadon;

(async () => {
    await db.sync();
})();
