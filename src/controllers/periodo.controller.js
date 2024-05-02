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


        if (!periodo) {
            await Periodo.create(req.body)
            return res.sendStatus(200)
        }


        const lastPeriodo = await Periodo.findOne({
            where: {
                cursoId
            },
            order: [["id", "desc"]]
        })
   
        return res.status(500).json({ message: "No se puede crear este periodo porque falta ingresar notas" })

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
                    include: ["curso", "grado", "seccion"],
                }
            ],
            where: {
                "$aula.curso.activo$": true
            },
        })
        // console.log(aulasAsignadas.length)
        return res.status(200).json(aulasAsignadas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
