import { Seccion } from "../models/Seccion.js"


export const findAll = async (req, res) => {
    try {
        const secciones = await Seccion.findAll()
        return res.status(200).json(secciones)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


export const createSeccion = async(req, res) => {
    try {
        await Seccion.create(req.body)
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}