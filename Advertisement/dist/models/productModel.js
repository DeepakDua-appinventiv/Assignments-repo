"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./userModel"));
const { BLOB, Sequelize, DataTypes, Model } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory');
const db_connection_1 = require("../database/db.connection");
class Product extends Model {
}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true,
    },
    product_images: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    bidding: {
        type: DataTypes.INTEGER,
        //allowNull: true,
    },
    bidder_id: {
        type: DataTypes.INTEGER,
        //allowNull: true,
    },
    base_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        //allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        //allowNull: false,
        references: {
            model: userModel_1.default,
            key: "id",
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        //allowNull: false,
    },
}, {
    sequelize: db_connection_1.sequelize,
    tableName: 'products',
});
// Product.belongsTo(User,{
// foreignKey : 'user_id',
//as: 'user_id',
// })
// User.hasMany(Product, {
//   foreignKey: 'user_d',
//   //as: 'products',
// })
Product.sync();
console.log("The table for the product model was just (re)created!");
exports.default = Product;
//# sourceMappingURL=productModel.js.map