import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Aula } from "./Aula.js";



export const Curso = sequelize.define("curso", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    anyo: {
        type: DataTypes.STRING,
        unique: true
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})




Curso.hasMany(Aula, {
    foreinkey: "cursoId",
    sourceKey: "id",
});

Aula.belongsTo(Curso, { 
    foreinkey: "cursoId",
    targetId: "id" 
});