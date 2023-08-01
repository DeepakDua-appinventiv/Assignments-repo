"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const sequelize = new Sequelize('sqlite::memory');
// import {sequelize} from 'sequelize';
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../database/db.connection");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    profile: {
        type: sequelize_1.DataTypes.BLOB,
        allowNull: true,
    },
    mobile_number: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    dob: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    favoriteBook: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_connection_1.sequelize,
    tableName: 'users',
});
User.sync();
console.log("The table for the User model was just (re)created!");
exports.default = User;
//# sourceMappingURL=userModel.js.map