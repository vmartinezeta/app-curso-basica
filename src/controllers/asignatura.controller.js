import { Asignatura } from "../models/Asignatura.js"

export async function createAsignatura(req, res) {
    try {
        await Asignatura.create(req.body)
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


export async function findAll(req, res) {
    try {
        const asignaturas = await Asignatura.findAll()
        return res.status(200).json(asignaturas)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}