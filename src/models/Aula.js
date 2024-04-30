import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { AlumnoAula } from "./AlumnoAula.js";
import { Asignacion } from "./Asignacion.js";
import { Alumno } from "./Alumno.js";

export const Aula = sequelize.define("aula", {
    id: {
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    }
}, {
    timestamps: false
})



Aula.hasMany(AlumnoAula, {
    "foreignKey":"aulaId",
    "sourceKey":"id"
})

AlumnoAula.belongsTo(Aula, {
    "foreignKey":"aulaId",
    "targetKey":"id"
})




Aula.hasMany(Asignacion, {
    "foreignKey":"aulaId",
    "sourceKey":"id"
})

Asignacion.belongsTo(Aula, {
    "foreignKey":"aulaId",
    "targetKey":"id"
})
