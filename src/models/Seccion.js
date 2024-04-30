import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Aula } from "./Aula.js";



export const Seccion = sequelize.define("seccion", {
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        autoIncrement: true
    },
    letra: {
        type: DataTypes.ENUM("A", "B", "C", "D", "E"),
        unique: true
    }
}, {
    timestamps: false
})


Seccion.hasMany(Aula, {
    foreinkey: "seccionId",
    sourceKey: "id",
  });

Aula.belongsTo(Seccion, { foreinkey: "seccionId", targetId: "id" });  