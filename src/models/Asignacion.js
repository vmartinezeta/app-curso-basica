import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Evaluacion } from "./Evaluacion.js";


export const Asignacion = sequelize.define("asignacion", {
    id: {
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    }
}, {
    timestamps:false
})



Asignacion.hasMany(Evaluacion, {
    "foreignKey":"asignacionId",
    "sourceKey":"id"
})


Evaluacion.belongsTo(Asignacion, {
    "foreignKey":"asignacionId",
    "targetKey":"id"
})