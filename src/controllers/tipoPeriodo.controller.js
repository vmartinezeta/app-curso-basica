import { TipoPeriodo } from "../models/TipoPeriodo.js"

export async function createTipoPeriodo(req, res) {
    try {
        await TipoPeriodo.create(req.body)        
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}