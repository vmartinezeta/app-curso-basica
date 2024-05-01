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


 export async function updateGrado(req, res) {
    try {
        const params = req.params
        const grado = await Grado.findOne({
            where: {
                id: params.gradoId
            }
        })
        grado.set(req.body)
        await grado.save()
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
 } 


 export async function deleteGrado(req, res) {
    try {
        const params = req.params
        await Grado.destroy({
            where: {
                id: params.gradoId
            }
        })    
        return res.sendStatus(200)    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
 }