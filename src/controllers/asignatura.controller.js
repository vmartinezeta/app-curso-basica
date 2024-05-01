import { Asignatura } from "../models/Asignatura.js"

export async function createAsignatura(req, res) {
    try {
        await Asignatura.create(req.body)
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function findAll(req, res) {
    try {
        const asignaturas = await Asignatura.findAll()
        return res.status(200).json(asignaturas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function updateAsignatura(req, res) {
    try {
        const params = req.params
        const asignatura = await Asignatura.findOne({
            where: {
                id: params.asignaturaId
            }
        })
        asignatura.set(req.body)
        await asignatura.save()
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function deleteAsignatura(req, res) {
    try {
        const params = req.params
        await Asignatura.destroy({
            where:{
                id:params.asignaturaId
            }
        })    
        return res.sendStatus(200)    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}