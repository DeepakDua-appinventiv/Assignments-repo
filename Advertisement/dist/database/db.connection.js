"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('advertisement', 'postgres', 'Deepak', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.dbConnection = (async function () {
    try {
        await exports.sequelize.authenticate();
        console.log('Connection has been established successfully');
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();
//# sourceMappingURL=db.connection.js.map