import { Sequelize,DataTypes,Model } from "sequelize";

export const sequelize = new Sequelize('advertisement' ,'postgres', 'Deepak', {
    host: 'localhost',
    dialect : 'postgres'
});

export const dbConnection = (async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})()