import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";


export const AlumnoAula = sequelize.define("alumnoAula", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
},{
    timestamps:false
})