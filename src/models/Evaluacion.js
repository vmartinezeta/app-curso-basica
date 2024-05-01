import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Evaluacion = sequelize.define("evaluacion", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    }, 
    p1: {
        type:DataTypes.DOUBLE,
        defaultValue:10
    },
    p2:{
        type:DataTypes.DOUBLE,
        defaultValue:10
    },
    p3:{
        type:DataTypes.DOUBLE,
        defaultValue:10
    },
    ps:{
        type:DataTypes.DOUBLE,
        defaultValue:null
    }
}, {
    timestamps:false
})