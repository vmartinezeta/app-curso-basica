import { Evaluacion } from "../models/Evaluacion.js"
import {AlumnoAula} from "../models/AlumnoAula.js"


export async function findEvaluacionAsignadaByProfesor(req, res) {
    try {
        const { aulaId, asignacionId, periodoId } = req.params
        let evaluaciones = await Evaluacion.findAll({
            include: [
                {
                    attributes: ["id", "aulaId"],
                    association: "alumnoAula",
                    include: ["alumno"],
                    right: true,
                },
                {
                    association: "periodo",
                }
            ],
            where: {
                periodoId,
                asignacionId
            }
        })

        if (evaluaciones.length === 0) {
            evaluaciones = await AlumnoAula.findAll({
                include: [
                    "alumno"
                ],
                where: {
                    aulaId
                }
            })
            
            evaluaciones=evaluaciones.map(evaluacion => ({
                alumnoAula:evaluacion.dataValues,
                p1:null,
                p2:null,
                p3:null,
                ps:null,
                asignacionId:+asignacionId,
                periodoId:+periodoId
            }))
        }


        return res.status(200).json(evaluaciones)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


async function updateRow(row) {
    const { id, ...resto } = row
    return Evaluacion.update({
        ...resto
    }, {
        where: {
            id
        }
    })
}


export async function createEvaluacion(req, res) {
    try {
        if (req.body.every(eva => eva.id !== null)) {
            const promises = req.body.map(updateRow)
            await Promise.all(promises)
            return res.status(200)
        }

        await Evaluacion.bulkCreate(req.body.map(row => {
            const { id, ...evaluacion } = row
            return evaluacion
        }))
        return res.status(200)
    } catch (error) {
        //rollback
        return res.status(500).json({ message: error.message })
    }
}