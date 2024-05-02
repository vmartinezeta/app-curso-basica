import { Evaluacion } from "../models/Evaluacion.js"

export async function findEvaluacionAsignadaByProfesor(req, res) {
    try {
        const {aulaId} = req.params
        const alumnos =await Evaluacion.findAll({
            include:[
                {
                    attributes:["id", "aulaId"],
                    association:"alumnoAula",
                    right:true,
                    include:["alumno"],
                           
                },
                {
                    association:"asignacion"
                }
            ],
            where: {
                "$alumnoAula.aulaId$":aulaId
            }     
        })
        return res.status(200).json(alumnos)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}



export async function createEvaluacion(req, res) {
    try {
        console.log(req.body)
        await Evaluacion.bulkCreate(req.body)
        return res.status(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}