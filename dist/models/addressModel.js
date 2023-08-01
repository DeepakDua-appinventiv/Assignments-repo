"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../database/db.connection");
const userModel_1 = __importDefault(require("../models/userModel"));
class Address extends sequelize_1.Model {
}
Address.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    house_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    street_number: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    landmark: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    zip_code: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        //allowNull: false,
        references: {
            model: userModel_1.default,
            key: "id",
        },
    },
    addressType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db_connection_1.sequelize,
    tableName: 'addresses',
});
Address.sync();
console.log("The table for the User model was just (re)created!");
// User.hasMany(Address, {foreignKey : 'id'})
exports.default = Address;
//# sourceMappingURL=addressModel.js.map