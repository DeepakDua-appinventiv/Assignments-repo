"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../database/db.connection");
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    category_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sub_categories: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_connection_1.sequelize,
    tableName: 'categories',
});
Category.sync();
console.log("The table for the User model was just (re)created!");
exports.default = Category;
//# sourceMappingURL=categoryModel.js.map