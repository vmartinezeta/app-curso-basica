import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Asignacion } from "./Asignacion.js";

export const Asignatura = sequelize.define("asignatura", {
    id: {
        type:DataTypes.SMALLINT,
        primaryKey:true,
        autoIncrement:true
    },
    nombre: {
        type:DataTypes.STRING,
        unique:true
    }
}, {
    timestamps:false
})


Asignatura.hasMany(Asignacion, {
    "foreignKey":"asignaturaId",
    "sourceKey":"id"
})


Asignacion.belongsTo(Asignatura, {
    "foreignKey":"asignaturaId",
    "targetKey":"id"
})