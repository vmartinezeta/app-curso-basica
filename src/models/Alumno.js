import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { AlumnoAula } from "./AlumnoAula.js";


export const Alumno = sequelize.define("alumno", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    nie: {
        type: DataTypes.CHAR({ length: 8 }),
        unique: true
    }
},{
    timestamps:false
})

Alumno.hasMany(AlumnoAula, {
    "foreignKey":"alumnoId",
    "sourceKey":"id"
})

AlumnoAula.belongsTo(Alumno, {
    "foreignKey":"alumnoId",
    "targetKey":"id"
})