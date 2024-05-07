import { TipoPeriodo } from "../models/TipoPeriodo.js"



export async function createTipoPeriodo(req, res) {
    try {
        await TipoPeriodo.create(req.body)        
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}


export async function findAllTipoPeriodo(req, res) {
    try {
        const tipos = await TipoPeriodo.findAll()
        return res.status(200).json(tipos)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}