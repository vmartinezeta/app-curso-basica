import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Periodo } from "./Periodo.js";


export const TipoPeriodo = sequelize.define("tipoPeriodo", {
    id: {
        type:DataTypes.TINYINT,
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


TipoPeriodo.hasMany(Periodo, {
    "foreignKey":"tipoId",
    "sourceKey":"id"
})

Periodo.belongsTo(TipoPeriodo, {
    "foreignKey":"tipoId",
    "targetKey":"id"
})


