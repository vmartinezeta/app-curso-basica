import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";



export const Admin = sequelize.define("admin",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username: {
        type: DataTypes.STRING,
        unique:true
    },
    password: {
        type:DataTypes.STRING
    }
},{
    timestamps:false
})