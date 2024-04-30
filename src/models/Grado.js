import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Aula } from "./Aula.js";


export const Grado = sequelize.define("grado", {
    id: {
        type:DataTypes.SMALLINT,
        primaryKey:true,
        autoIncrement: true
    },
    nombre_largo : {
        type:DataTypes.STRING,
        unique:true
    },
    nombre_corto: {
        type:DataTypes.STRING,
        unique: true
    }
}, {
    timestamps:false
})



Grado.hasMany(Aula, {
    foreinkey: "gradoId",
    sourceKey: "id",
  });

Aula.belongsTo(Grado, { foreinkey: "gradoId", targetId: "id" });
  