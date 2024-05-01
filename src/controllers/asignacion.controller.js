import { Asignacion } from "../models/Asignacion.js"
import { Aula } from "../models/Aula.js"
import { Curso } from "../models/Curso.js"
import { Profesor } from "../models/Profesor.js"


export async function createAsignacion(req, res) {
    try {
        const { aulaId, asignaturaId } = req.body
        const existe = await existeAsignacion(aulaId, asignaturaId)
        if (existe) {
            return res.status(500).json({ message: "Ya existe" })
        }

        await Asignacion.create(req.body)
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


async function existeAsignacion(aulaId, asignaturaId) {
    try {
        const asignacion = await Asignacion.findOne({
            where: {
                aulaId,
                asignaturaId
            }
        })

        if (!asignacion) {
            return false
        }
        return true
    } catch (error) {
        return true
    }
}


export async function findAll(req, res) {
    try {
        const params = req.params
        const asignaciones = await Asignacion.findAll({
            attributes: ["id"],
            where: {
                aulaId: params.aulaId
            },
            include: [{
                model: Profesor,
                attributes: ["id", "nombres", "apellidos", "dui", "username"]
            },
                "asignatura",
                "aula"
            ]
        })
        return res.status(200).json(asignaciones)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}



export async function findAllByProfesor(req, res) {
    try {
        const params = req.params
        const aulasProfesor = await Asignacion.findAll({
            attributes: ["id"],
            include: [
                {
                    association: Asignacion.associations.profesor,
                    attributes: ["username"]
                },
                {
                    association: "aula",
                    attributes: ["id"],
                    include: ["curso", "grado", "seccion"]
                },
                "asignatura",
            ],
            where: {
                "$aula.cursoId$": params.cursoId,
                "$profesor.username$": params.username
            }
        })
        return res.status(200).json(aulasProfesor)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}