import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Evaluacion } from "./Evaluacion.js";



export const Periodo = sequelize.define("periodo", {
    id: {
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    activo: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
}, {
    timestamps:false
})


Periodo.hasMany(Evaluacion, {
    "foreignKey":"periodoId",
    "sourceKey":"id"
})


Evaluacion.belongsTo(Periodo, {
    "foreignKey":"periodoId",
    "targetKey":"id"
})