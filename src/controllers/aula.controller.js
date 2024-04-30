import { Aula } from "../models/Aula.js"


export async function createAula(req, res) {
    try {
        const { cursoId, gradoId, seccionId } = req.body
        const existAula = await existeAula(cursoId, gradoId, seccionId)

        if (existAula) {
            return res.status(500).json({ message: "Ya existe el registro" })
        }
        await Aula.create(req.body)
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export async function existeAula(cursoId, gradoId, seccionId) {
    try {
        const aula = await Aula.findOne({
            where: {
                cursoId,
                gradoId,
                seccionId
            }
        })
        if (!aula) {
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
        const aulas = await Aula.findAll({
            attributes: ["id"],
            where: {
                cursoId: params.cursoId
            },
            include: ["grado", "seccion", "curso"]
        })
        return res.status(200).json(aulas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}