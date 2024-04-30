import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Asignacion = sequelize.define("asignacion", {
    id: {
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    }
}, {
    timestamps:false
})