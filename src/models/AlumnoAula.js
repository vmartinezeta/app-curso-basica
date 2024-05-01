import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Evaluacion } from "./Evaluacion.js";
import { Aula } from "./Aula.js";

export const AlumnoAula = sequelize.define("alumnoAula", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
},{
    timestamps:false
})


AlumnoAula.hasMany(Evaluacion, {
    "foreignKey":"alumnoAulaId",
    "sourceKey":"id"
})


Evaluacion.belongsTo(AlumnoAula, {
    "foreignKey":"alumnoAulaId",
    "targetKey":"id"
})