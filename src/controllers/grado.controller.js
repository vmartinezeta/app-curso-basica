import { Grado } from "../models/Grado.js"

export async function createGrado(req, res) {
    try {
        await Grado.create(req.body)
        return res.sendStatus(200)      
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


export async function findAll(req, res) {
    try {
        const grados = await Grado.findAll()
        return res.status(200).json(grados)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}