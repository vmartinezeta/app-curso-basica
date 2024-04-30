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