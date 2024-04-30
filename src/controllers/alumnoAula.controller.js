import { Alumno } from "../models/Alumno.js"
import { AlumnoAula } from "../models/AlumnoAula.js"


export async function createAlumno(req, res) {
    try {
        const { nie, aulaId } = req.body
        let alumnoFound = await Alumno.findOne({
            where: {
                nie
            }
        })
        if (!alumnoFound) {
            alumnoFound = await Alumno.create(req.body)
        }

        const alumnoWorking = await AlumnoAula.findOne({
            where: {
                aulaId,
                alumnoId: alumnoFound.id
            }
        })

        if (alumnoWorking) {
            return res.status(500).json({ message: "Ya existe" })
        }

        await AlumnoAula.create({
            alumnoId: alumnoFound.id,
            aulaId
        })
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function findAll(req, res) {
    try {
        const params = req.params
        const alumnos = await AlumnoAula.findAll({
            where: {
                aulaId: params.aulaId
            },
            include: ["alumno"]
        })
        return res.status(200).json(alumnos)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}