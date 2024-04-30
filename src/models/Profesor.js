import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Asignacion } from "./Asignacion.js";

export const Profesor = sequelize.define("profesor", {
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
    dui: {
        type: DataTypes.CHAR({ length: 10 }),
        unique:true
    },
    username: {
        type: DataTypes.STRING,
        unique:true
    }, 
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps:false
})



Profesor.hasMany(Asignacion, {
    "foreignKey":"profesorId",
    "sourceKey":"id"
})

Asignacion.belongsTo(Profesor, {
    "foreignKey":"profesorId",
    "targetKey":"id"
})