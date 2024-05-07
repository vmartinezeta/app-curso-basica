import { Op } from "sequelize"
import { Asignacion } from "../models/Asignacion.js"
import { Periodo } from "../models/Periodo.js"



export async function createPeriodo(req, res) {
    try {
        const { cursoId } = req.body
        const periodo = await Periodo.findOne({
            where: {
                cursoId
            }
        })


        // if (!periodo) {
        // }
            await Periodo.create(req.body)
            return res.sendStatus(200)

        // const lastPeriodo = await Periodo.findOne({
        //     where: {
        //         cursoId
        //     },
        //     order: [["id", "desc"]]
        // })
   
        // return res.status(500).json({ message: "No se puede crear este periodo porque falta ingresar notas" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function countAulasAsignadas(req, res) {
    try {
        const aulasAsignadas = await Asignacion.findAndCountAll({
            // attributes:["id"],        
            include: [
                {
                    attributes: ["id"],
                    association: "aula",
                    required:true,
                    include: ["periodo", "grado", "seccion"],
                }
            ],
            where: {
                "$aula.periodo.activo$": true
            },
        })
        // console.log(aulasAsignadas.length)
        return res.status(200).json(aulasAsignadas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function findAllPeriodo(req, res) {
    try {
        const periodos = await Periodo.findAll({
            attributes:["id", "activo"],
            include:[{
                association:"curso",
                attributes:["anyo"]                
            }, "tipoPeriodo"],
            where:{
                "$curso.activo$": true
            }
        })
        return res.status(200).json(periodos)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


export async function togglePeriodo(req, res) {
    try {
        const {periodoId} = req.params
        const periodos = await Periodo.findAll({
            where: {
                [Op.or]: {
                    id:periodoId,
                    activo:true
                }
            }
        })

        console.log(periodos)

        await Promise.all(periodos.map(togglePeriodoAndSave))

        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


async function togglePeriodoAndSave(periodo) {
    periodo.activo = !periodo.activo
    return periodo.save()
}


export async function findPeriodoActivo (req, res) {
    try {
        const periodo = await Periodo.findOne({
            attributes:["id", "activo"],
            include:[{
                association:"curso",
                attributes:["anyo"]                
            }, "tipoPeriodo"],
            where:{
                "$curso.activo$": true,
                "activo":true
            }
        })
        return res.status(200).json(periodo)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}