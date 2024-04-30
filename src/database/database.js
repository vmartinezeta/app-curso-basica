import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('escueladb', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});